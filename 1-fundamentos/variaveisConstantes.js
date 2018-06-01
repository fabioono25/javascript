var a = 3

//ECMAScript 2015 (priorize o let ao invés do var):
let b = 4

var a = 30
b = 32 //can be

//let b = 32 //SyntaxError: Identifier 'b' has already been declared 
const c = 12

c = 123 //TypeError: Assignment to constant variable.

//tipagem fraca
let qualquer = 'Legal'
console.log(qualquer + ' - ' + typeof qualquer)

qualquer = 3.1516
console.log(qualquer + ' - ' + typeof qualquer)
