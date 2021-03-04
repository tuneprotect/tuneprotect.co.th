import crypto from "crypto";

var key = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    iv = 'oUpmq2xAayR5GKtv';

export function encrypt_token(data) {
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    cipher.update(data, 'binary', 'base64');
    return cipher.final('base64');
}

export function decrypt_token(data) {
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.update(data, 'base64', 'binary');
    return decipher.final('binary');
}

// console.log('NodeJS encrypt: ', encrypt_token('dmyz.org'));
// console.log('NodeJS decrypt: ', decrypt_token('FSfhJ/gk3iEJOPVLyFVc2Q=='));
