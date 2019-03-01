package com.datawhale.whale.crypto;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.binary.Base64;

public class Crypto {

    private byte[] key = new byte[] { 28, 44, 21, 37, 60, 10, 59, -11, 89, 66, 76, -59, -35, 98, -27, -51 };
    private String encryptMethod = "Blowfish";
    private Cipher cipher;

    public String encrypt(String value) {
        try {
            return performEncryptAction(value);
        } catch (CipherInitializationException | CryptoException cryptoActionException) {
            return "";
        }
    }

    public String decrypt(String value) {
        try {
            return performDecryptAction(value);
        } catch (CipherInitializationException | CryptoException cryptoActionException) {
            return "";
        }
    }

    private String performEncryptAction(String value) throws CipherInitializationException, CryptoException {
        SecretKeySpec secretKeySpec = getSecretKey();
        cipher = getCipher();
        initCipherInEncryptMode(secretKeySpec);
        return doCrypto(CryptoMode.Encode, value);
    }

    private String performDecryptAction(String value) throws CipherInitializationException, CryptoException {
        SecretKeySpec secretKeySpec = getSecretKey();
        cipher = getCipher();
        initCipherInDecryptMode(secretKeySpec);
        return doCrypto(CryptoMode.Decode, value);
    }

    private SecretKeySpec getSecretKey() {
        return new SecretKeySpec(key, encryptMethod);
    }

    private byte[] getBytes(String value) {
        try {
            return value.getBytes("UTF-8");
        } catch (UnsupportedEncodingException unsupportedEncodingException) {
            return new byte[0];
        }
    }

    private Cipher getCipher() throws CipherInitializationException {
        try {
            return performGetCipherAction();
        } catch (NoSuchAlgorithmException | NoSuchPaddingException noSuchAlgorithmException) {
            throw new CipherInitializationException();
        }
    }

    private Cipher performGetCipherAction() throws NoSuchAlgorithmException, NoSuchPaddingException {
        return Cipher.getInstance(encryptMethod);
    }

    private void initCipherInEncryptMode(SecretKeySpec secretKeySpec) {
        try {
            cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);
        } catch (InvalidKeyException ignoredException) {}
    }

    private void initCipherInDecryptMode(SecretKeySpec secretKeySpec) {
        try {
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);
        } catch (InvalidKeyException ignoredException) {}
    }

    private String doCrypto(CryptoMode mode, String value) throws CryptoException {
        try {
            return switchCryptoMode(mode, value);
        } catch (IllegalBlockSizeException | BadPaddingException cryptoException) {
            throw new CryptoException();
        }
    }

    private String switchCryptoMode(CryptoMode mode, String value) throws IllegalBlockSizeException,
                                                                            BadPaddingException,
                                                                            CryptoException {
        switch (mode) {
            case Decode:
                return performCryptoDecodeAction(value);
            case Encode:
                return performCryptoEncodeAction(value);
                default:
                    throw new CryptoException();
        }
    }

    private String performCryptoDecodeAction(String value) throws IllegalBlockSizeException, BadPaddingException {
        byte[] encryptedByteArr = cipher.doFinal(getBase64Decrypted(getBytes(value)));
        return new String(encryptedByteArr);
    }

    private String performCryptoEncodeAction(String value) throws IllegalBlockSizeException, BadPaddingException {
        byte[] encryptedByteArr = cipher.doFinal(getBytes(value));
        byte[] valueReadyToStringPerformance = getBase64Encrypted(encryptedByteArr);
        return new String(valueReadyToStringPerformance);
    }

    private byte[] getBase64Encrypted(byte[] value) {
        return Base64.encodeBase64(value);
    }

    private byte[] getBase64Decrypted(byte[] value) {
        return Base64.decodeBase64(value);
    }
}
