enum Turno {
    Manhã = "Matutino",
    Tarde = "Vespertino",
    Noite = "Noturno"
}

enum Situacao{
    CURSANDO = "Cursando(a)",
    TRANCADO = "Trancado(a)",
    CANCELADO = "Cancelado(a)",
    APROVADO = "Aprovado(a)",
    PROVAFINAL = "Prova Final",
    REPROVADO = "Reprovado(a)"
}

class RegistroNotas{
    private estudante: string
    private matricula_estudante: number
    private media_b1: number | undefined
    private media_b2: number | undefined
    private media_parcial: number | undefined
    private mediaFinal: number | undefined
    private situacao_estudante: Situacao
    private notaAvalFinal: number | undefined

    constructor(estudante: string, matricula:number, media1: number, media2: number) {
        this.estudante = estudante
        this.matricula_estudante = matricula
        this.media_b1 = media1
        this.media_b2 = media2
        this.calcularMediaParcial(media1, media2)
        this.notaAvalFinal = undefined
        this.mediaFinal = undefined
        this.situacao_estudante = Situacao.CURSANDO
    }
    mudarNomeEstudante(nome: string) {
        this.estudante = nome
    }    
    mudarSituação(situacao: Situacao) {
        this.situacao_estudante = situacao
    }
    adicionarNaf(naf: number) {
        this.notaAvalFinal = naf
    }
    calcularMediaParcial(m1: number, m2: number) {
        let mp = (m1 * 2 + m2 *3) / 5

        if(mp >= 60) {
            this.mediaFinal = this.media_parcial;
            this.situacao_estudante = Situacao.APROVADO
        } else if(mp >= 10) {
            this.situacao_estudante = Situacao.PROVAFINAL
        } else {
            this.mediaFinal = this.media_parcial
            this.situacao_estudante = Situacao.REPROVADO
        }
        this.media_parcial = mp
        return mp
    }
    calcularMediaFinal() {
        if (this.situacao_estudante === Situacao.PROVAFINAL && this.notaAvalFinal !== undefined) {
            this.mediaFinal = (this.notaAvalFinal + this.media_parcial!) / 2
            this.situacao_estudante = this.mediaFinal >= 60 ? Situacao.APROVADO : Situacao.REPROVADO
        }
    }
        
}

class Diario {
    private disciplina: string
    private docente: string
    private turno: Turno
    private curso: string
    private id_turma: string
    private quantidadeAulas: number
    private registroNotas: RegistroNotas()

    constructor (disciplina: string, docente: string, turno: Turno, curso: string, id: string, qtd_aula: number) {
        this.disciplina = disciplina
        this.docente = docente
        this.turno = turno
        this.curso = curso
        this.id_turma = id
        this.quantidadeAulas = qtd_aula
    }
}

let professor = new Diario("Front-End", "Marcelo", Turno.Tarde, "TSI", "TSI", 20)
let jonathan = new RegistroNotas("Jonathan", 20251148060040, 60, 70)
jonathan.mudarSituação(Situacao.TRANCADO)

console.log(jonathan)
console.log(professor)