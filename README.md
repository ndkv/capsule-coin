# 🌔 CapsuleCoin 🌖

This coin is going to the Moon... in the future!

We are working on a revolutionary technology that will bring us sooner to the Moon than rockets: time travel!

By hoarding as many Capsule coins as you can you ensure a seat for yourself and a friend in our super deluxe time travel Capsule.

## Gimme some coins, please! 🤑

Sure thing! Follow along and you will swiftly be the owner of the venerable Capsule coins:

1. install the [MetaMask](https://metamask.io/) browser extension
2. create an account
3. switch to the `Rinkeby` network
4. send us (@ndkv) your account address and we will swiftly transfer 10 CECs.
5. Go to the [Capsule Coin Ðapp](https://github.ndkv.io/capsule-coin) to verify your possession of sublime Capsule Coins!

## Is this for real, tho? 🤔

Yes, we are extremely passionate about our vision and dedicated to executing it swiftly. Verify for yourself:

- inspect the underlying [open source Smart Contract](https://github.com/ndkv/capsule-coin/blob/master/contracts/CapsuleCoin.sol) in this repository
- inspect the deployed contract on the [Ethereum (test) blockchain](https://rinkeby.etherscan.io/address/0x138db7ce2af44c6c3ccb1589dfe223f15a7ef750).
- verify that the account holding the Capsule Coins is [actually distributing them](https://rinkeby.etherscan.io/address/0x245f73498be5c1767570d687263c6ef368df62cd#tokentxns).
- inspect our Ðapp's [open source code](https://github.com/ndkv/capsule-coin/tree/gh-pages) over in the `gh-pages` branch.

See, we mean bussiness!


# I'd like to help you mint!

Great, come back later for instructions on how to deploy your very own Smart Contract!

# Ethereum clients

## command line

The go-to command line client is `geth`.

### install geth on macOS

Install the `geth` command line client throught `brew`

```bash
brew update
brew upgrade

brew tap ethereum/ethereum
brew install ethereum
brew install solidity
brew linkapps solidity
```

### install geth on Ubuntu
TODO

### run a Rinkeby node

We interact with the `Rinkeby` test chain through a light node which is set up as follows

    geth --rinkeby --syncmode=light --datadir=$HOME/.rinkeby console

A light node only fetches the

Once the node starts it will fetch the headers of all blocks since the genesis block. Once it's done you will be presented with an interactive shell.

## desktop client

If you prefer to click on things you can install [Mist]().

You can connect to your Mist node in geth by issuing

```bash
geth attach
```

You can access your wallet through `eth.accounts[0]`.

# Contracts

## writing contracts

Contracts are written in Solidity. A very simple contract looks something like this

```
contract HelloWorld {
    event Print(string out);
    function() { Print("Hello, World!"); }
}
```

See http://www.ethdocs.org/en/latest/contracts-and-transactions/contracts.html#writing-a-contract for more information.

## compiling contracts

### Truffle

Truffle is great. Use Truffle.

### Bare metal

Don't like frameworks? Fine, here be dragons.

Contracts are compiled with `solc` which is part of `solidity` we installed earlier.

```bash
echo "var testOutput=`solc --optimize --combined-json abi,bin,interface hello-world.sol`" > hello-world.js
```

# Publish the contract

```javascript

loadScript('contracts/hello-world.js');

var testContract = web3.eth.contract(JSON.parse(testOutput.contracts["hello-world.sol:HelloWorld"].abi));

personal.unlockAccount(eth.accounts[0], "{top secret password}");

var test = testContract.new({ from: eth.accounts[1], data: "0x" + testOutput.contracts["hello-world.sol:HelloWorld"].bin, gas: 4700000},
  function (e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
});
```

Truffle is nice, see?

hello world contract address: 0x092d9dbf12e46880ae819e37548a5062337930cc

multiply contract address: 0x932f67f69e86c9afd7a0109f34b4f03dc1a075c4


# JavaScript API

TODO

https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract


# Resources

Walktrough
https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4

Deploy contract to Rinkeby through Truffle
https://blog.abuiles.com/blog/2017/07/09/deploying-truffle-contracts-to-rinkeby/

Deploy contract to live network
https://ethereumdev.io/deploy-truffle-smart-contracts-live-network/

Get balance of account in various ways
https://stackoverflow.com/questions/32312884/how-do-i-get-the-balance-of-an-account-in-ethereum#32313312