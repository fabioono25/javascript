const escola = [{
    nome: 'Turma M1',
    alunos: [
        {nome: 'Gustavo',
         nota: 9.3
        },
        {nome: 'Juca',
            nota: 3.3
        }
    ]},
    {
        nome: 'Turma M1',
        alunos: [
            {nome: 'Billy',
            nota: 10.0
            },
            {nome: 'Mika',
                nota: 9.3
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //[ [ 9.3, 3.3 ], [ 10, 9.3 ] ]

//o flatMap permite retornar um array apenas
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
} 

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)