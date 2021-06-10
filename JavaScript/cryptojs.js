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


var tokenString = "application/json\r\n"+
                   "purpleportal.net\r\n"+
                   "/api/company/v1/venues\r\n"+
                   "Tue, 11 May 2021 03:17:25 UTC\r\n\r\n";
/* tokenString = "application/json purpleportal.net /api/company/v1/venues Mon, 10 May 2021 07:22:41 UTC"; */
var hash = CryptoJS.HmacSHA256(tokenString, "f2649676d7f7e4e8cca56ff608a97ca7");
var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
/* var hashInBase64 = hash.toString(CryptoJS.enc.Base64); */
console.log('hash', hash)
console.log('hashInBase64', hashInBase64)
