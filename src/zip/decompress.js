import path from 'path';
import {fileURLToPath} from 'url';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const unCompressedFile = path.join(basePath, 'files', 'fileToCompress.txt');
const compressedFile = path.join(basePath, 'files', 'archive.gz');

const decompress = async () => {
    const readStream = createReadStream(compressedFile);
    const writeStream = createWriteStream(unCompressedFile);
    const unCompress = createUnzip();
    pipeline(readStream, unCompress, writeStream, (err)=> console.log(err))
};

await decompress();