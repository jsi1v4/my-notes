const childProcess = require("child_process");

const url = process.argv[2];

console.log(`open: ${url}`);

function openCommand() {
  switch (process.platform) {
    case "darwin":
      return "open";
    case "win32":
      return "start";
    default:
      return "xdg-open";
  }
}

childProcess.exec(`${openCommand()} ${url}`);
