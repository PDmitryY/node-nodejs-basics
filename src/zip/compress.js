import path from 'path';
import {fileURLToPath} from 'url';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const fileToCompress = path.join(basePath, 'files', 'fileToCompress.txt');
const compressedFile = path.join(basePath, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(compressedFile);
    const compress = createGzip();
    pipeline(readStream, compress, writeStream, (err)=> console.log(err))
};

await compress();