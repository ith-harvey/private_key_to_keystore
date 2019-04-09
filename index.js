
//requires two env variables
//  1. PRIVATE_KEY_NO_OX_PREFIX
//  2. PASSWORD

const fs = require("fs")
const wallet = require("ethereumjs-wallet")

// replace by correct private key
const pk = new Buffer.from(process.env.PRIVATE_KEY_NO_OX_PREFIX, "hex")
const account = wallet.fromPrivateKey(pk)

// will be required to unlock/sign after importing to a wallet like MyEtherWallet. If pass has spaces be sure to wrap in quotes
const password = process.env.PASSWORD
const json = JSON.stringify(account.toV3(password))

console.log('keystore --> :')
console.log(json);
