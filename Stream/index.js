import {readFile , writeFile} from 'fs/promises';

const path = new URL('./index.html' , import.meta.url );

let content = await  readFile(path , {encoding : 'utf-8'});

const data = {
    name : "Your Name",
    role : "Your Role",
    place: " Your location"
}

for(const [key , value] of Object.entries(data)){
    content = content.replace(`{${key}}` , value);
}

console.log(content);
await writeFile(path , content);

