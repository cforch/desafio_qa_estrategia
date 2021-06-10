class EstrategiaElements {
    vl_por_professor = () => {return '.page-header-title'}
    lk_professor = () => {return 'div.nav-header-links > a:nth-child(3)'}
    lk_concurso = () => {return 'div.nav-header-links > a:nth-child(2)'}
    pf_concurso = () => {return 'div.js-page-courses > div > div > section:nth-child(1) > div > div > section:nth-child(5) > h1 > a'}
    vl_pf_concurso = () => {return 'section.section-content > div > header > h1'}
    vl_qtd_disponivel = () => {return 'div.cur-group-info > div.cur-details-info-features > div > span.text'}
    lk_materia = () => {return 'div.nav-header-links > a:nth-child(4)'}
    vl_buscaMateria = () => {return '.section-header-title'}
    es_administracao = () => {return 'div.page-result-list > section:nth-child(4) > h1 > a'}
    filtra_curso = () => {return 'div.page-courses-filters.-no-margin > form > input'}
    vl_adm_iniSup = () => {return 'div.cur-listing.-margin > div > div.js-cur-content > div.js-card-prod-container > section:nth-child(77) > h1 > a'}
    lk_regiao = () => {return 'div.nav-header-links > a:nth-child(5)'}
    input_pesquisa = () => {return '#b_home > header > div > div > form > div > input'}
    bt_input_pesquisa = () => {return '#b_home > header > div > div > form > div > button'}
    vl_regiao_page = () => {return '#b_cursos > section > div > header > h1'}
    vl_regiao_estado = () => {return '#b_cursos > div.page-courses > div > section > header > h1'}
    es_parana = () => {return '#b_cursos > section > div > div > section:nth-child(5) > ul > li:nth-child(1) > a'}
    es_goias = () => {return '#b_cursos > section > div > div > section:nth-child(1) > ul > li:nth-child(2) > a'}
    es_curso_parana = () => {return 'div.page-courses > div > section > div.page-result-list > section:nth-child(28) > h1 > a'}
    lk_profEnaLoiola = () => {return 'div.page-result-list > section:nth-child(92) > h1 > a'}
    ANM_curso_profLoiola = () => {return 'div.js-card-prod-container > section:nth-child(2) > h1 > a'}
    detalhes_SegundoCurso_ProfLoiola = () => {return 'div.js-card-prod-container > section:nth-child(2) > a'}
    valorParceladoDetalhes = () => {return '.cur-details-shopping-installments'}
    valorTotalDetalhes = () => {return 'div.cur-details-shopping-price > div'}
    valorParceladoListagem = () => {return 'div.js-card-prod-container > section:nth-child(2) > .card-prod-price'}
    inf_carga_horaria = () => {return 'div.cur-details-shopping-features > div:nth-child(3) > div.content > div.text'}
    inf_certificado = () => {return 'div.cur-details-shopping-features > div:nth-child(1) > div.content > div.text'}
    vl_infs_conc_parana = () => {return '.cur-group-features'}
    tl_concurso_esp_PR = () => {return '.section-header-title'}
    vl_pacote_PRF = () => {return 'div.js-search-page > div > div > div.page-result-list > section:nth-child(1) > h1 > a'}
}

export default EstrategiaElements;

