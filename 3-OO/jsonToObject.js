const obj = { a: 1, b: 2, c:3, soma() { return a + b + c}}

//objeto para texto
console.log(JSON.stringify(obj)) //{"a":1,"b":2,"c":3}

//texto para objeto
//console.log(JSON.parse("{a:1, b:2, c:3}")) //SyntaxError: Unexpected token a in JSON at position 1

//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) //Unexpected token ' in JSON at position 1

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //{ a: 1, b: 2, c: 3 }

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) //{ a: 1, b: 'string', c: true, d: {}, e: [] }
