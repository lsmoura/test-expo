import CryptoES from 'crypto-es';

export function encrypt(value: string, key: string) {
  return CryptoES.AES.encrypt(value, key).toString();
}

export function decrypt(value: string, key: string) {
  return CryptoES.AES.decrypt(value, key).toString(CryptoES.enc.Utf8);
}
