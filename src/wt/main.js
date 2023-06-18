import os from 'os';
import path from 'path';
import {fileURLToPath} from 'url';
import { Worker } from 'worker_threads';

const basePath = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(basePath, 'worker.js');
const numOfCpus = os.cpus().length;
const startingNumber = 10;
const workerArr = [];

const createWorker = (workerData) => {
    return new Promise ((res, rej) => {
        const worker = new Worker(workerPath, {workerData});
        worker.on('message', (data) => res({ status: 'resolved', data }));
        worker.on('error', (data) => res({status: 'error', data: null}));
    })
}

const performCalculations = async () => {
    try {
        for(let i = 0; i < numOfCpus; i++) {
            const worker = createWorker(startingNumber + i);
            workerArr.push(worker);
        }
        Promise.allSettled(workerArr).then(data => {
            console.log(data.map((data) => data.value))
        })
    } catch (e) {
        throw new Error('Ooops');
    }
};

await performCalculations();