/* global Given, Then, When */

import EstrategiaHomePage from '../pages/EstrategiaHomePage'
const home = new EstrategiaHomePage
import BuscaProfessorPage from '../pages/BuscaProfessorPage'
const buscaProfessor = new BuscaProfessorPage
import CursoProfessorPage from '../pages/CursoProfessorPage'
const cursosProf = new CursoProfessorPage
import CursoPage from '../pages/CursoPage'
const curso = new CursoPage
import BuscaConcursoPage from '../pages/BuscaConcursoPage'
const buscaConcurso = new BuscaConcursoPage
import ConcursoPage from '../pages/ConcursoPage'
const concurso = new ConcursoPage
import BuscaMateriaPage from '../pages/BuscaMateriaPage'
const buscaMateria = new BuscaMateriaPage
import MateriaPage from '../pages/MateriaPage'
const materia = new MateriaPage
import BuscaRegiaoPage from '../pages/BuscaRegiaoPage'
const regiao = new BuscaRegiaoPage
import PesquisaPage from '../pages/PesquisaPage'
const pesquisa = new PesquisaPage

Given("Acessar Estrategia Concursos", () => {
    home.acessarEstrategia();
})

When("selecionar Por Professor", () => {
    home.acessarCursosPorProfessor();
})
And("acessar os cursos da professora Ena Loiola", () => {
    buscaProfessor.validaPagina();
    buscaProfessor.selecionarProfEnaLoiola();
})
And("escolher um curso disponível na lista de cursos da professora usando o filtro", ()=> {
    cursosProf.escolherSegundoCurso();
})
And("clicar em Detalhes", () => {
    cursosProf.clicarDetalhes();
})
Then("o valor total do curso escolhido na listagem deve bater com o valor total da página de detalhes", () => {
    curso.validarValoresDetalhesListagem();
    cursosProf.clicarDetalhes();
})
And("o valor parcelado deve bater com o valor total do curso", () => {
    curso.compararValorParceladoComTotal();
})
And("deve ter informação de carga horária", () => {
    curso.validarInformaçãoCargaHoraria();
}) 
And("deve ter informação de receber certificado", () => {
    curso.validarInformaçãoDeCertificado();
})

When("selecionar Por Concurso", () => {
    home.acessarCursosPorConcurso();
})
And("acessar os cursos para Polícia Federal", () => {
    buscaConcurso.acessarCursosPF();
})
Then("deve ter informação sobre quantidade de cursos disponiveis", () => {
    concurso.validarConcursoPagePF();
    concurso.validarQtdCursosDisponiveis();
})
When("selecionar Por Máteria", () => {
    home.acessarCursosPorMateria();
})
And("acessar máteria de Administração", () => {
    buscaMateria.acessarAdministração();
}) 
And("filtrar Administração p/ Iniciantes", () => {
    materia.filtrarCurso();
}) 
Then("deve haver curso de Administração p/ Iniciantes Nivel Superior em Busca por Máteria", () => {
    materia.validarAdministraçãoInicianteSuperior();
})

When("selecionar po Região", () => {
    home.acessarCursosPorRegiao();
})
And("escolher região Paraná", () => {
    regiao.escolherParana();
})
Then("validar Página de Cursos em Paraná", () => {
    regiao.validarRegiaoParana();
})
And("alterar para região Goiás", () => {
    regiao.escolherGoias();
})
Then("validar Página de Cursos em Goiás", () => {
    regiao.validarRegiaoGoias();
})
When("selecionar po Região", () => {
    home.acessarCursosPorRegiao();
})
And("escolher curso específico da região Paraná", () => {
    regiao.escolherCursoParana();
})
Then("deve validar informações sobre o concurso da região Paraná", () => {
    curso.validarInfoConcursoParana();
})
When("busca na barra de pesquisa por PRF", () => {
    home.filtrarPRFPesquisa();
})
Then("deve aparecer o pacote completo Pré Edital da PRF", () => {
    pesquisa.validarPacoteCompletoPRFPreEdital();
})