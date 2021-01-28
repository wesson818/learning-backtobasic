var CryptoJS = require("crypto-js");
console.log("crypto-js")

function encryptAES(stringToEncrypt, secret) {
    let bytes = CryptoJS.AES.encrypt(stringToEncrypt, secret);
    return bytes.toString();
}

function decryptAES(encryptedString, secret) {
    let bytes = CryptoJS.AES.decrypt(encryptedString, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
}

let aString = "5v8y/B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcRfUjWnZr4u7x!A%D*G-KaPdSgVkYp2s5v8y/B?E(H+MbQeThWmZq4t6w9z$C&F)J@NcRfUjXn2r5u8x/A%D*G-KaPdSg";
let aSecret = "7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+";

let encryptedString = encryptAES(aString,aSecret);
console.log('encryptedString', encryptedString)

let decryptedString = decryptAES(encryptedString,aSecret)
console.log('decryptedString', decryptedString)