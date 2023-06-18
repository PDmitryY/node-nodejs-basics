import { rename as giveNewName } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'

const rename = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));
    const wrongName = path.join(basePath, 'files', 'wrongFilename.txt');
    const properName = path.join(basePath, 'files', 'properFilename.md');
    try {
        await giveNewName(wrongName, properName)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

rename();