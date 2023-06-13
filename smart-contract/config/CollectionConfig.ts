import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Afrrose',
  tokenName: 'Afrrose',
  tokenSymbol: 'AFR',
  hiddenMetadataUri: 'ipfs://bafybeiefjtgua4uki2ddedpjhmbjd2rjx3t5vqnoqvg2fwrr6r6iv4stea/hidden.json',
  maxSupply: 5,
  whitelistSale: {
    price: 0.003,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.004,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.005,
    maxMintAmountPerTx: 2,
  },
  contractAddress: `0xa70241C5Bd70eBDdC281fcA2860F3231227469b2`,
  marketplaceIdentifier: 'Afrrose',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
