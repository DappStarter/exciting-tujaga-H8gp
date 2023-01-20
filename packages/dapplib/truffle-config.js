require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind modify heavy arctic success gauge'; 
let testAccounts = [
"0x2e57c24e9e6336bc69f9e1ac4b796b28b2b2a86a6e59dd53bccc7264e8a5d1f8",
"0x424c01eac4bb242ba378bddd12e98e8b95ecb5196a5700032ea71236002029c7",
"0xa00649eaf10d7f121c268412a89a1538316887c7b7fdcd3a8dbdc3bb096c6c85",
"0xc763cd7640b6f7629ebad0265932e2022ba6ac09640d1da86a5e1cf1ce61f252",
"0x31a7e0b0fd1275860a462ab8e0628f3133a28a68e3bcf52f55f463a7c64e72d4",
"0xb1d877b0bf0318275b4c2f0e9d1de7638ef3ad1cb3ac96ef948b7c3e5d5f5a0e",
"0xda4389a1349e88f8441931e6c49fb7ca6ce4a1226126a12cd122b8748fb56131",
"0x15154076665ada843237a53ad2880e3ac41f5c97258f42115907063bb091fb97",
"0xba2c8fdfe1f3da58635bbb864cd1c23bbe47e9e7831c3d9652ccd6a12015ab48",
"0x9a2ff0960bbd1c5c6021b8c347ccb364df042c9c86fee6f4c031cf022c1265f3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

