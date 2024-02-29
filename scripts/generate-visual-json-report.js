const { readdir, writeFile } = require('fs');
const { join: joinPath, relative, resolve } = require('path');
const { promisify } = require('util');
const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);
const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');
const fs = require('fs');
const outputPath = resolve(__dirname, '..', 'reports', 'ui');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    joinPath(outputPath, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    }),
  );
})();
