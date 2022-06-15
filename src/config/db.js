const firebase = require("firebase-admin");
const config = require("./firebase");

const db = firebase.initializeApp(config);

module.exports = db;