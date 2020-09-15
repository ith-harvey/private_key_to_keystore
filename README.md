# Priv_key_to_keystore
Repository that allows anyone to input a password and a private key resulting in a keystore.json file as the output. 

Designed to be used in tandum with market-making-inhouse/save_keys_to_pass.sh

Clone the repository and cd into root:
```
git clone git@github.com:LiquidityProviders/private_key_to_keystore.git && cd private_key_to_keystore
```
install the packages:
```
npm install
```

Call `index.js` using the below command from the root directory, passing in the password and private key: 
```
PASSWORD="$PASS" PRIVATE_KEY_NO_OX_PREFIX="$PRIV_KEY" node priv_key_to_keystore/index.js
```

