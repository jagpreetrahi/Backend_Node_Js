import {readFile , writeFile} from 'fs/promises';

const path = new URL('./index.html' , import.meta.url );

let content = await  readFile(path , {encoding : 'utf-8'});

const data = {
    name : "Jagpreet Singh",
    role : "Developer",
    place: "Pune"
}

for(const [key , value] of Object.entries(data)){
    content = content.replace(`{${key}}` , value);
}

console.log(content);
await writeFile(path , content);

