/* alias with variable  ->  for cjs module*/

const linearsearch = require('./Basic_Module')


/* alias with propert  -> for cjs module */

const {linearsearch} = require('./Basic_Module'); 




/* alias with variable -> for Es6 Module */

import { linearsearch } from './Basic_Module'  

/* But For ES6 module we have to change the type as "module" in package. json or we can do also '.mjs' extension for es6 file.

*/

/* alias with 'as' keyword or destructing the objects -> for es6 module */

 import { linearsearch as ls } from './Basic_Module'

/* And whenver we want to use it then we wirte 'ls' everywhere because we change the name  */


/*
console.log(linearsearch([1,3 ,2,6,7,8] , 4));
console.log(linearsearch([1,3 ,2,5,7,8] , 3));

*/


