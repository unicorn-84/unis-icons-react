import { readdir, writeFile } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

(async function createDemo() {
  try {
    const DIR = process.env.COMPONENTS_DIR;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const files = await readdir(join(__dirname, '..', DIR));

    let components = '';

    for (const file of files) {
      if (file === 'index.ts') continue;
      components += `<UnisIcons.${basename(file, '.tsx')} />\n`;
    }

    const content = `import * as React from 'react';
    import * as UnisIcons from '../../src';
    
    function App() {
      return (
        <div className="max-w-sm m-auto p-4 flex flex-wrap text-gray-900">
          ${components}
        </div>
      );
    }
    
    export default App;`;

    await writeFile(join(__dirname, '../demo/src/App.tsx'), content);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
