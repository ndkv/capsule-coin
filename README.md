# CapsuleCoin

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

Contract are compiled with `solc` that is part of `solidity`. 

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



hello world contract address: 0x092d9dbf12e46880ae819e37548a5062337930cc

multiply contract address: 0x932f67f69e86c9afd7a0109f34b4f03dc1a075c4


# JavaScript API

TODO

https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract
