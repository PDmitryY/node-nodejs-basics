const parseArgs = () => {
    console.log(process.argv.slice(2).reduce((acc, val, i, arr)=>{
        if(val.startsWith('--') && arr[i + 1]){
            acc.push(`${val.slice(2)} is ${arr[i + 1]}`);
        }
        return acc;
    }, []).join(', '))
};

parseArgs()