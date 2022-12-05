import path from 'path';
import {fileURLToPath} from 'url'
import { createReadStream } from 'fs';

const read = async () => {
    try {
        const basePath = path.dirname(fileURLToPath(import.meta.url));
        const fileToRead = path.join(basePath, 'files', 'fileToRead.txt');
        const readStream = createReadStream(fileToRead, 'utf-8');
        readStream.on('data', (data)=>{
            process.stdout._write(data)
        })
      } catch (err) {
        throw err;
    }
};

await read();