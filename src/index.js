import truffleConfig from '../truffle.js'
import mortal from "./test.sol"
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
mortal.setProvider(provider);