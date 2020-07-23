const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const templateFilePath = path.join(__dirname, "./TKWInstaller_template.class");
const filePath = path.join(__dirname, "./TKWInstaller.class");

/**
 * Example commit hash and date
 *
 * 9c38dad0137fb2cb59eca6111ded6dc258b54eac
 * 2020-07-21T14:03:56Z
 */

const getWithPrompt = (prompt) =>
  new Promise((resolve) => {
    rl.question(`${prompt}: `, resolve);
  });

(async () => {
  const _commitHash = await getWithPrompt("Insert GitHub commit hash");

  const _buildDate = await getWithPrompt("Insert build date (YYYY-MM-DD)");

  const buff = fs.readFileSync(templateFilePath);

  const commitHash = _commitHash.slice(0, 7);
  const buildDate = _buildDate.split(/\D/).filter(Boolean).join("").slice(0, 8);

  // Old format: SVN Version: 37 Build Date: 20190918
  // New format: Git version: 9c38dad; Date: 20200721

  const original = "{{    insert version info here    }}";
  const replacement = `Git version: ${commitHash}; Date: ${buildDate}`;

  if (original.length !== replacement.length) {
    throw new RangeError("original.length !== replacement.length");
  }

  const firstInstance = buff.indexOf(original);
  const secondInstance = buff.indexOf(original, firstInstance + 1);

  buff.write(replacement, firstInstance, "binary");
  buff.write(replacement, secondInstance, "binary");

  fs.writeFileSync(filePath, buff);

  console.log(`\nWritten to ${filePath}`)

  rl.close();
})();
