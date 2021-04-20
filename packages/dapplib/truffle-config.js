require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner argue tackle skull guard render remember social include private bubble soap'; 
let testAccounts = [
"0x11350735d0f5f2cf7bcee5f6db16f778ea512a30e9c974ec403d61a03bf9618c",
"0xdcdf2be7bd2edc955d6a5e8fa371370cfbc2420597083f66cc792a4fe9bf8725",
"0x3b9a08fb6f00744594e5605589f8857d997566b75c7bd4a24fd18d13fbec7ecb",
"0x472312c6db02b42a6d22c619435ce0e41bc0466598aff9a4378079132ab3be27",
"0x820a77b8c73a126caf3fd1de14028f0200082ba03666210994ca3e430de6074f",
"0xafa1a24e93e44cfb90200a864426ab1583b5eb2c696fb4a51f7e79edf744b7ea",
"0xf31cce4d595ebb71e0340d6a6865954eff92f6e911c644ef2bcf1125286953e2",
"0xb3442ae217f87d2f34b28844a79626d4c43e7add9202147e7e788ad30b954dda",
"0xd89c41729e0ee52e45c39d47e90b81fc96b27bf435abe7ac09601f79103743a8",
"0xaae199df47da872008d8ce92775d8e35a38e8d9b2a239135380c2fe99f079937"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


