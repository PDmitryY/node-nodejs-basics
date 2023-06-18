import {Transform, pipeline} from 'stream'

const transform = async () => {
    const input = process.stdin;
    const output = process.stdout;
        const transformation = new Transform ({
        transform(chunk, enc, cb) {
            const reversedText = chunk.toString().trim().split('').reverse().join('')
            cb(null, reversedText + '\n')
        }
    })
    pipeline(input, transformation, output, (err)=> console.log(err))
};

await transform();