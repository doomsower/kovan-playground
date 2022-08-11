import { deploy, waitForTransaction } from "@gearbox-protocol/devops";
import {
  CurveLPToken,
  IYVault__factory,
  tokenDataByNetwork,
  YearnLPToken,
  yearnTokens,
} from "@gearbox-protocol/sdk";

import config from "../../config";
import { YearnMock } from "../../types";
import { AbstractDeployer, DeployedToken } from "../support";

const yearnTokenList: Array<YearnLPToken> = [
  "yvDAI",
  "yvUSDC",
  "yvWETH",
  "yvWBTC",
  "yvCurve_stETH",
  "yvCurve_FRAX",
];

export class YearnDeployer extends AbstractDeployer {
  protected async run(): Promise<void> {
    this.log.info("Deploying Yearn");

    for (const yearnToken of yearnTokenList) {
      if (await this.progress.isDeployNeeded("yearn", yearnToken)) {
        await this.deployVault(yearnToken);
      }
    }
  }

  private async deployVault(yearnToken: YearnLPToken): Promise<void> {
    this.log.debug(`Deploying the Yearn vault mock for ${yearnToken}`);

    const underlying = yearnTokens[yearnToken].underlying;
    const [maybeNormal, maybeCurve] = await Promise.all([
      this.progress.get("normalTokens", underlying as DeployedToken),
      this.progress.get("curve", underlying as CurveLPToken),
    ]);
    let underlyingAddress = maybeNormal ?? maybeCurve;
    if (!underlyingAddress) {
      if (underlying === "WETH") {
        underlyingAddress = tokenDataByNetwork[config.network].WETH;
      } else {
        throw new Error(
          `underlying ${underlying} for ${yearnToken} is not deployed`
        );
      }
    }

    const symbol = yearnTokens[yearnToken].name;

    console.log(
      "underlyingAddress",
      underlyingAddress,
      "underlying",
      underlying,
      "symbol",
      symbol
    );
    const vault = await deploy<YearnMock>(
      "YearnMock",
      this.log,
      this.syncer,
      underlyingAddress,
      symbol
    );

    this.log.info(
      `Yearn vault for ${underlying} deployed at: ${vault.address}`
    );

    this.log.debug(`Syncing the Yearn vault mock for ${yearnToken}`);

    const mainnetVault = IYVault__factory.connect(
      tokenDataByNetwork.Mainnet[yearnToken],
      this.mainnetProvider
    );

    const mainnetPPS = await mainnetVault.pricePerShare();

    await waitForTransaction(vault.setPricePerShare(mainnetPPS));

    this.log.info(
      `Yearn vault for ${yearnToken} synced - pricePerShare: ${mainnetPPS}`
    );

    this.verifier.addContract({
      address: vault.address,
      constructorArguments: [this.syncer, underlyingAddress, symbol],
    });

    await this.progress.save("yearn", yearnToken, vault.address);
  }
}
