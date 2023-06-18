import { rm } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const fileToDelete = path.join(basePath, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(fileToDelete)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await remove();