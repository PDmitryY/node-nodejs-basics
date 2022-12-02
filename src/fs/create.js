import { writeFile } from 'fs/promises';
import {fileURLToPath} from 'url'
import path from 'path';

const create = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));
    try {
        await writeFile(path.join(basePath, '/files/fresh.txt'),'I am fresh and young', {flag:'wx'})
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

create();