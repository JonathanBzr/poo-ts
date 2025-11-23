"use strict";
var Turno;
(function (Turno) {
    Turno["Manh\u00E3"] = "Matutino";
    Turno["Tarde"] = "Vespertino";
    Turno["Noite"] = "Noturno";
})(Turno || (Turno = {}));
var Situacao;
(function (Situacao) {
    Situacao["CURSANDO"] = "Cursando(a)";
    Situacao["TRANCADO"] = "Trancado(a)";
    Situacao["CANCELADO"] = "Cancelado(a)";
    Situacao["APROVADO"] = "Aprovado(a)";
    Situacao["PROVAFINAL"] = "Prova Final";
    Situacao["REPROVADO"] = "Reprovado(a)";
})(Situacao || (Situacao = {}));
class RegistroNotas {
    constructor(estudante, matricula, nota11, nota12, nota21, nota22) {
        this.estudante = estudante;
        this.matricula_estudante = matricula;
        this.nota1_b1 = nota11;
        this.nota2_b1 = nota12;
        this.nota1_b2 = nota21;
        this.nota2_b2 = nota22;
        this.media_b1 = (this.nota1_b1 + this.nota2_b1) / 2;
        this.media_b2 = (this.nota1_b2 + this.nota2_b2) / 2;
        this.media_parcial = (this.media_b1 * 2 + this.media_b2 * 3) / 5;
        this.notaAvalFinal = this.nota1_b1;
        this.mediaFinal = undefined;
        this.situacao_estudante = Situacao.CURSANDO;
        if (this.media_parcial >= 60) {
            this.mediaFinal = this.media_parcial;
            this.situacao_estudante = Situacao.APROVADO;
        }
        else if (this.media_parcial >= 10) {
            this.mediaFinal = (this.notaAvalFinal + this.media_parcial) / 2;
            this.situacao_estudante = Situacao.PROVAFINAL;
        }
        else {
            this.mediaFinal = this.media_parcial;
            this.situacao_estudante = Situacao.REPROVADO;
        }
    }
    mudarNomeEstudante(nome) {
        this.estudante = nome;
    }
    mudarSituação(situacao) {
        this.situacao_estudante = situacao;
    }
    adicionarNaf(naf) {
        this.notaAvalFinal = naf;
    }
}
class Diario {
    constructor(disciplina, docente, turno, curso, id, qtd_aluno) {
        this.disciplina = disciplina;
        this.docente = docente;
        this.turno = turno;
        this.curso = curso;
        this.id_turma = id;
        this.quantidade_alunos = qtd_aluno;
    }
}
let jonathan = new RegistroNotas("Jonathan", 20251148060040, 58, 15, 60, 20);
jonathan.adicionarNaf(99);
console.log(jonathan);
