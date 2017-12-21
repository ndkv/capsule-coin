window.addEventListener('load', function() {
  try {
    window.web3 = new Web3(web3.currentProvider);

    const CapsuleCoin = TruffleContract(CapsuleCoinABI);
    CapsuleCoin.setProvider(web3.currentProvider);

    // fetch the deployed instance of the contract
    CapsuleCoin.deployed().then(function(instance) {
        startApp(instance, web3.eth.accounts[0]);
    });
  }
  catch (e) {
      startApp(null, null);

      console.log('Error: could not find web3. Please visit this page in MetaMask.');
    }
});

function startApp(instance, account) {
    // var account = '0x5159d8C3BE83C21530F4AC43451e326B8FF5bbB0';

    const vm = new Vue({
        el: '#balance-component',
        data: {
           balance: 0,
           message: craftMessage(instance, account),
        },
        computed: {
            alertType: function () {
                return {
                    'show-display': this.message,
                    'alert-danger': !instance,
                    'alert-warning': !account,
                    'alert-info': !this.balance
                }
            }
        },
        mounted: function() {
            const self = this;

            if (instance && account) {
                getBalance(instance, account)
                .then(function(result) {
                    let balance = parseInt(result);

                    if (balance === 0) {
                        self.message = "Oh-oh, you don't have any coins. <a href=\"https://github.com/ndkv/capsule-coin#gimme-some-coins-please-\" class=\"alert-link\">Get some!</a>"
                    } else {
                        self.balance = balance;
                    }
                })
            }
        }
    });

    const explainer = new Vue({
        el: '#explainer-component',
        data: {
            explainerShow: false,
            description: 'What is this?'
        },
        methods: {
            toggle: function () {
                this.explainerShow = !this.explainerShow;

                this.description = (this.explainerShow === true) ? 'Much nonsense! Wow!' : 'What is this?';
            }
        }
    })
}

function craftMessage(instance, account) {
    let message = '';

    if (instance === null) {
        message = 'Please <a href="https://github.com/ndkv/capsule-coin#gimme-some-coins-please-" class="alert-link">install Metamask</a>.';
    }

    if (account === undefined) {
        message = 'Please unlock your Metamask account.';
    }

    return message;
}

function getBalance(instance, account) {
      return instance.getBalance.call(account, {from: account})
}
