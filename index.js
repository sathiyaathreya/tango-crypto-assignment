const express = require('express')
const app = express()
const CryptoJS = require('crypto-js')


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/encrypt', (req, res, next) => {
    const { text, secretKey } = req.body
    const encrypted = CryptoJS.AES.encrypt(text, secretKey)
    res.json({ encryptedValue: encrypted.toString() })
})

app.post('/decrypt', (req, res, next) => {
    const { text, secretKey } = req.body
    const decryptedText = CryptoJS.AES.decrypt(text, secretKey);
    res.send({ decryptedValue: decryptedText.toString(CryptoJS.enc.Utf8) })
})

app.listen(3000)