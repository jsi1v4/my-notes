const crypto = require("crypto");

const start = Date.now();

function logHashTime() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash: ${Date.now() - start}`);
  });
}

// thread pool
logHashTime(); // thread one
logHashTime(); // thread two
logHashTime(); // thread three
logHashTime(); // thread four

logHashTime(); // thread one after first done
