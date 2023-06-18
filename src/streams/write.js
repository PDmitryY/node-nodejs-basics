import path from 'path';
import {fileURLToPath} from 'url';
import { createWriteStream } from 'fs';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const fileToRead = path.join(basePath, 'files', 'fileToWrite.txt');

const write = async () => {
    try {
        const writeStream = createWriteStream(fileToRead, 'utf-8');
        process.stdin.on('data', (data)=>{
            writeStream.write(data.toString());
        })
      } catch (err) {
        throw err;
    }
};

await write();