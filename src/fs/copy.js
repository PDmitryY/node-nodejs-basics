import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url'

const basePath = path.dirname(fileURLToPath(import.meta.url));
const dirPathFrom = path.join(basePath, 'files');
const dirPathTo = path.join(basePath, 'files-copy');

const makeDir = async (distFolderPath) => {
  try {
    await fs.mkdir(distFolderPath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
}

const readDir = async (dirPathFrom) => {
    try {
        const files = await fs.readdir(dirPathFrom, {withFileTypes: true});
        for(const file of files) {
        if (file.isFile()) {
            await fs.copyFile(path.join(dirPathFrom, file.name), path.join(dirPathTo, file.name));
        } else if(file.isDirectory()) {
            await copyDir(`${dirPathFrom}/${file.name}`, `${dirPathTo}/${file.name}`);
        }
    }
    } catch (err) {
        throw new Error('FS operation failed')
    }
}

const copyDir = async (dirPathFrom, dirPathTo) => {
  try {
    await makeDir(dirPathTo);
    await readDir(dirPathFrom);
    
  } catch (err) {
    throw new Error('FS operation failed');
  }
}

const copy = async () => {
    await copyDir(dirPathFrom, dirPathTo);
};

await copy();
