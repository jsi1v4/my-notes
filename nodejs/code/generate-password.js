const crypto = require("crypto");

const password = process.argv[2];
const algorithm = process.argv[3];

function generatePassword(password = "", algorithm = "sha256") {
  return crypto.createHash(algorithm).update(password).digest("base64");
}

console.log(generatePassword(password, algorithm));
