package com.datawhale.whale;

import com.datawhale.whale.crypto.Crypto;
import org.junit.Test;

public class CryptoTests {

    private String mockPassword = "qwerty";

    @Test
    public void cryptoEncryptionDecryptionTest() {
        Crypto crypto = new Crypto();
        String encryptedPassword = crypto.encrypt(mockPassword);
        String processedPassword = crypto.decrypt(encryptedPassword);
        assert mockPassword.equals(processedPassword);
    }

}
