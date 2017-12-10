window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);


    CapsuleCoin = TruffleContract(CapsuleCoinABI);
    CapsuleCoin.setProvider(web3.currentProvider);

    CapsuleCoin.deployed().then(function(instance) {
      startApp(instance);
    });
  } else {
    console.log('Error: could not find web3. Please visit this page in MetaMask.');

    document.getElementById('balance').innerText = 'undefined. Please visit this website in MetaMask.'
    }
});

function startApp(instance) {
    var account = web3.eth.accounts[0];
    var account = '0x5159d8C3BE83C21530F4AC43451e326B8FF5bbB0';
    console.log(account);

    renderBalance(instance, account);
}

function renderBalance(instance, account) {
    getBalance(instance, account).then(function(balance) {
      document.getElementById('balance').innerText = balance;
    });
}

function getBalance(instance, account) {
      return instance.getBalance.call(account, {from: account})
}
