//numa arrow function o this nao muda muito (this léxico)

function f1() {
    console.log(this == window)
}

f1()

document.getElementsByTagName("body")[0].click = f2

//() => console.log(this === window)