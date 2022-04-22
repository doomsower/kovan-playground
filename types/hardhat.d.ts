/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ChainlinkPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkPriceFeed__factory>;
    getContractFactory(
      name: "BaseRewardPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseRewardPool__factory>;
    getContractFactory(
      name: "Booster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Booster__factory>;
    getContractFactory(
      name: "ConvexPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexPoolFactory__factory>;
    getContractFactory(
      name: "IConvexPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConvexPoolFactory__factory>;
    getContractFactory(
      name: "ConvexTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvexTokenFactory__factory>;
    getContractFactory(
      name: "IConvexTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConvexTokenFactory__factory>;
    getContractFactory(
      name: "VirtualBalanceRewardPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VirtualBalanceRewardPool__factory>;
    getContractFactory(
      name: "VirtualBalanceWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VirtualBalanceWrapper__factory>;
    getContractFactory(
      name: "CVXKovan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CVXKovan__factory>;
    getContractFactory(
      name: "ICrvDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrvDeposit__factory>;
    getContractFactory(
      name: "ICurveGauge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveGauge__factory>;
    getContractFactory(
      name: "ICurveVoteEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveVoteEscrow__factory>;
    getContractFactory(
      name: "IDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDeposit__factory>;
    getContractFactory(
      name: "IFeeDistro",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFeeDistro__factory>;
    getContractFactory(
      name: "IMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMinter__factory>;
    getContractFactory(
      name: "IPools",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPools__factory>;
    getContractFactory(
      name: "IRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegistry__factory>;
    getContractFactory(
      name: "IRewardFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewardFactory__factory>;
    getContractFactory(
      name: "IRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewards__factory>;
    getContractFactory(
      name: "IStaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaker__factory>;
    getContractFactory(
      name: "IStash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStash__factory>;
    getContractFactory(
      name: "IStashFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStashFactory__factory>;
    getContractFactory(
      name: "ITokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenFactory__factory>;
    getContractFactory(
      name: "ITokenMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenMinter__factory>;
    getContractFactory(
      name: "IVestedEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVestedEscrow__factory>;
    getContractFactory(
      name: "IVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVoting__factory>;
    getContractFactory(
      name: "IWalletChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWalletChecker__factory>;
    getContractFactory(
      name: "ISyncablePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISyncablePool__factory>;
    getContractFactory(
      name: "KovanConvexManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KovanConvexManager__factory>;
    getContractFactory(
      name: "ERC20Kovan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Kovan__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IYVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYVault__factory>;
    getContractFactory(
      name: "Syncer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Syncer__factory>;
    getContractFactory(
      name: "SyncerTrait",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SyncerTrait__factory>;
    getContractFactory(
      name: "TradingBot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TradingBot__factory>;
    getContractFactory(
      name: "YearnMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnMock__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ChainlinkPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkPriceFeed>;
    getContractAt(
      name: "BaseRewardPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseRewardPool>;
    getContractAt(
      name: "Booster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Booster>;
    getContractAt(
      name: "ConvexPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexPoolFactory>;
    getContractAt(
      name: "IConvexPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConvexPoolFactory>;
    getContractAt(
      name: "ConvexTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConvexTokenFactory>;
    getContractAt(
      name: "IConvexTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConvexTokenFactory>;
    getContractAt(
      name: "VirtualBalanceRewardPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VirtualBalanceRewardPool>;
    getContractAt(
      name: "VirtualBalanceWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VirtualBalanceWrapper>;
    getContractAt(
      name: "CVXKovan",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CVXKovan>;
    getContractAt(
      name: "ICrvDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrvDeposit>;
    getContractAt(
      name: "ICurveGauge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveGauge>;
    getContractAt(
      name: "ICurveVoteEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveVoteEscrow>;
    getContractAt(
      name: "IDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDeposit>;
    getContractAt(
      name: "IFeeDistro",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFeeDistro>;
    getContractAt(
      name: "IMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMinter>;
    getContractAt(
      name: "IPools",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPools>;
    getContractAt(
      name: "IRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegistry>;
    getContractAt(
      name: "IRewardFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewardFactory>;
    getContractAt(
      name: "IRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewards>;
    getContractAt(
      name: "IStaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaker>;
    getContractAt(
      name: "IStash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStash>;
    getContractAt(
      name: "IStashFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStashFactory>;
    getContractAt(
      name: "ITokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenFactory>;
    getContractAt(
      name: "ITokenMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenMinter>;
    getContractAt(
      name: "IVestedEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVestedEscrow>;
    getContractAt(
      name: "IVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVoting>;
    getContractAt(
      name: "IWalletChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWalletChecker>;
    getContractAt(
      name: "ISyncablePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISyncablePool>;
    getContractAt(
      name: "KovanConvexManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KovanConvexManager>;
    getContractAt(
      name: "ERC20Kovan",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Kovan>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IYVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYVault>;
    getContractAt(
      name: "Syncer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Syncer>;
    getContractAt(
      name: "SyncerTrait",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SyncerTrait>;
    getContractAt(
      name: "TradingBot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TradingBot>;
    getContractAt(
      name: "YearnMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YearnMock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
