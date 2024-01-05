import {encrypt, decrypt} from './module';

it('encrypts and decrypts a string', () => {
    const value = 'Hello World!';
    const encryptedValue = encrypt(value, 'secret');
    expect(encryptedValue).not.toBeFalsy();
    const decryptedValue = decrypt(encryptedValue, 'secret');
    expect(decryptedValue).toBe(value);
});