import { readFile } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const fileToRead = path.join(basePath, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const contents = await readFile(fileToRead, { encoding: 'utf8' });
        console.log(contents);
      } catch (err) {
        console.log(err.message)
        throw new Error('FS operation failed')
    }
};

await read();