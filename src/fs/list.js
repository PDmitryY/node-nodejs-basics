import { readdir } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'

const list = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));
    const destinationFolder = path.join(basePath, 'files');
    try {
        const files = await readdir(destinationFolder, {withFileTypes: true})
        for (const file of files) {
            if (file.isFile()) {
                console.log(`${file.name}`) ;
            }; 
        }
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();