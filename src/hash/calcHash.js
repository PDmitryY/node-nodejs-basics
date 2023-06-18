import { readFile } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    try {
        const basePath = path.dirname(fileURLToPath(import.meta.url));
        const fileToRead = path.join(basePath, 'files', 'fileToCalculateHashFor.txt');
        const content = await readFile(fileToRead);
        const hash =  createHash('sha256').update(content).digest('hex');
        console.log(hash)
    } catch (err) {
        throw err;
    }
};

await calculateHash();