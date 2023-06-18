import { rm } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'

const remove = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));
    const fileToDelete = path.join(basePath, 'files', 'fileToRemove.txt');
    try {
        await rm(fileToDelete)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await remove();