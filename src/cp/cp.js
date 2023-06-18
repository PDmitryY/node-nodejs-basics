import { fork } from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const pathToProcess = path.join(basePath, './files/script.js');

const spawnChildProcess = async (args) => {
    const child = fork(pathToProcess, args);
};

spawnChildProcess(['1', '2', '3']);