# 🌔 CapsuleCoin 🌖

This coin is going to the Moon... in the future!

We are working on a revolutionary technology that will bring you sooner to the Moon than Musk's rockets: time travel! Once completed, our time travel Capsule will propel you into a future in which mankind has colonised the Moon.

We are confident that we will complete your Capsule before any of the rockets lift off giving you the chance to depart much much earlier to the Moon than otherwise possible.

By hoarding as many Capsule coins as you can you ensure a seat for yourself and a friend in our super deluxe time travel Capsule.

## Gimme some coins, please! 🤑

Sure thing! Follow along and you will swiftly be the owner of the venerable Capsule coins:

1. install the [MetaMask](https://metamask.io/) browser extension
2. create an account
3. switch to the `Rinkeby` network
4. send us (@ndkv) your account address and we will swiftly transfer 100 Capsule Coins (CECs).
5. Go to the [Capsule Coin Ðapp](https://ndkv.github.io/capsule-coin) to verify that you posses sublime Capsule Coins!
6. (Planned) Share your coins with other friends through the `Transfer` tab in the Capsule Coin Ðapp.

## Is this for real, tho? 🤔

Yes, we are extremely passionate about our vision and dedicated to executing it swiftly. Verify for yourself:

- inspect the underlying [Smart Contract](https://github.com/ndkv/capsule-coin/blob/master/contracts/CapsuleCoin.sol) in this repository
- inspect the deployed contract on the [Ethereum Rinkeby blockchain](https://rinkeby.etherscan.io/address/0x138db7ce2af44c6c3ccb1589dfe223f15a7ef750).
- inspect the [Node.js script](https://github.com/ndkv/capsule-coin/blob/master/scripts/CapsuleCoin.js) we use to distribute the coins.
- verify that the account holding the Capsule Coins is [actually distributing them](https://rinkeby.etherscan.io/address/0x245f73498be5c1767570d687263c6ef368df62cd#tokentxns).
- inspect our Ðapp's [source code](https://github.com/ndkv/capsule-coin/tree/gh-pages) over in the `gh-pages` branch.

See, we mean business!


# I'd like to collab! 🙋

Great, let's get you started.

## Basic workflow

1. write a contract in Solidity
2. compile the contract
3. publish the contract to the blockchain
4. interact with your contract instance

## Truffle

Truffle is JavaScript framework for crafting, deploying and interacting with smart contracts. It makes the whole process much more bearable than going at it with Ethereum's stock tooling.

    npm install -g truffle

This will install the `truffle` CLI and give you access to the following Truffle operations

- `init` - [initiates an empty Truffle project](http://truffleframework.com/docs/getting_started/project) that contains `contracts/`, `migrations/`, `test/` and `truffle.js`.
- `compile` - compiles your Solidity contracts in `contract/` and puts them in `build/contracts/`
- `migrate` - publishes the compiled contract on the Ethereum blockchain

Execute `truffle compile` to compile your contracts in `contracts/`.

### Writing, compiling and testing contracts

Contracts are written in [Solidity](https://solidity.readthedocs.io/en/develop/). The CapsuleCoin contract is located in `contracts/CapsuleCoin.sol`. You will notice it has three functions

- `CapsuleCoin()` - this is the constructor. It is called once when the contract is published. In our case it mints 10000 coins and gives them to the account publishing the contract.
- `sendCoin(address receiver, uint amount)` - sends `amount` of coins to `receiver` address.
- `getBalance(address addr)` - get the balance of `address`.

Truffle comes with two local blockchains: Ganachi and `truffle develop`.  Use these to develop and test your contract locally.

### Publishing to a live network

To publish your contract on one of the public Ethereum networks we need to install and run a *gasp* real Ethereum node and tell Truffle to use it.

#### Install and configure geth

First, let's install and run the node. `geth` seem to be the most popular implementation. You can install it on macOS with `brew`

```bash
brew tap ethereum/ethereum
brew install ethereum
```

Executing `geth --rinkeby --datadir=$HOME/.rinkeby --verbosity 2 console` will launch an Ethereum node at `127.0.0.1:8545` connected to the `Rinkeby` test network and drop you in a JavaScript console.

The console exposes Ethereum's [web3.js JavaScript API](https://github.com/ethereum/web3.js/). web3 is awesome as it allows us to interact with Ethereum blockchains through the browser, see `Interacting with your contracts` section.

Contracts are published and owned by an Ethereum account. Right now our node doesn't have one: execute `web3.eth.accounts` in the console to verify. You should get an empty list.

Let's create an account. Hit `Ctrl + C` to stop the node/console and execute

`geth account new`

to create a new account. Remember the password and note the address; you will need both later.

#### Get some fake Ether

[Publishing and interacting with contracts costs Ether](http://truffleframework.com/docs/getting_started/contracts). We can get some for the test newtork for free from the [Rinkeby Faucet](https://faucet.rinkeby.io/).

#### Publish your contract with Truffle `migrate`

Execute  `truffle migrate` to publish a contract to the network. You will need

1. a running node that allows RPC connections
2. an unlocked account on that node
3. the correct Truffle configuration.

1 and 2 are solved by running our Ethereum node with the following parameters

    geth --rinkeby --rpc --datadir=$HOME/.rinkeby --unlock <your_ethereum_account> --verbosity 2 console

where

- `--rpc` enables the Remote Procedure Call interface that Truffle requires
- `-- unlock` specifies the account which will be used to publish the contract. Replace `<your_ethereum_account` with the account you created earlier.

`truffle-example.js` contains the required configuration: rename it to `truffle.js` and execute

    truffle migrate rinkeby

Truffle will compile your contract and publish it!

### Interacting with your contracts

Once a contract is published you can interact with it through the awesome [truffle-contract](https://github.com/trufflesuite/truffle-contract) module. Get it from NPM

    npm install truffle-contract

`require` it in your Node scripts, feed it your contract's ABI located in `build/contracts/CapsuleCoin.js`, obtain an instance of your published contract and call its functions directly in JS. It's magic/the future/mindblowing! Check out `scripts/CapsuleCoin.js` for the exact workflow.

## Bare metal

Don't like frameworks? Fine, but here be dragons 'cause you have to do most of the stuffs on your own.

### Install all the stuffs on MacOS

Install the Ethereum node `geth` and the Solidity compiler `solc` with `brew`

```bash
brew tap ethereum/ethereum
brew install ethereum
brew install solidity
brew linkapps solidity
```

#### Compile your contract

Compile your contract with `solc` as

```bash
echo "var testOutput=`solc --optimize --combined-json abi,bin,interface hello-world.sol`" > hello-world.js
```

#### Publish your contract

Start the `geth` console (see above) and execute the following

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

Take note of the contract's address. You can put this in a JavaScript file and `require` it but Truffle is much nicer. Use it.

# Resources

Truffle walktrough
https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4

Deploy contract to Rinkeby through Truffle
https://blog.abuiles.com/blog/2017/07/09/deploying-truffle-contracts-to-rinkeby/

Deploy contract to live network
https://ethereumdev.io/deploy-truffle-smart-contracts-live-network/

Get balance of account in various ways
https://stackoverflow.com/questions/32312884/how-do-i-get-the-balance-of-an-account-in-ethereum#32313312