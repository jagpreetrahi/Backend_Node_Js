import {pipeline} from 'fs/promises'
import {createReadStream , createWriteStream} from 'fs';
import {Transform} from 'stream';
import  csvParser from 'csv-parser';


const convertToJsonFormat = new Transform({

    objectMode: true,
    transform(chunck , encoding , callback){
        const data  = JSON.stringify(chunck)
        setTimeout(function exec(){
            callback(null , data + '\n')
        })
    }
    /** encoding is optional here */
})

async function runpipe(){
    try{

        await pipeline(
            createReadStream('Your API path which data has csv format'),
            csvParser(), 
            convertToJsonFormat(), 
            createWriteStream("your new file name in txt format")
        );
    }
    catch(error){
         console.log("Something went wrong" , error);
    }
    
   
}

runpipe();



