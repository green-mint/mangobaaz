const firebase = require("firebase-admin");
const { authDomain } = require("./firebase");
const config = require("./firebase");

const db = firebase.initializeApp({
    ...config,
    credential: firebase.credential.cert(require("./privateKey.json"))
});

module.exports = db;