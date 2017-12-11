const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const contract = require('truffle-contract');
const CapsuleCoin = contract(require('../build/contracts/CapsuleCoin.json'));
const accounts = require('./accounts');

CapsuleCoin.setProvider(provider);

function readBalance(account) {
    return CapsuleCoin.deployed().then(instance => {
        return instance.getBalance.call(account);
    })
}

function displayBalance(account) {
    readBalance(account).then(balance => { console.log(balance.toNumber()); });
}

function sendCoin(source, destination) {
    return CapsuleCoin.deployed().then(instance => {
        return instance.sendCoin(destination, 1, {from: source});
    })
    .then(result => {
        console.log('Transaction completed!');
    })
    .catch(e => {
        console.log('Transaction failed... :|')
    });
}

let alpha = accounts[0];
let beta = accounts[1];
let gamma = accounts[2];

displayBalance(gamma);

sendCoin(alpha, gamma).then(result => { displayBalance(gamma); });