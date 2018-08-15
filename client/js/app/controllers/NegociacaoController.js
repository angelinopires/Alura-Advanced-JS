class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = ''; // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas
        
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia', 'sort','inverteOrdem');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');       
    }
    
    adiciona(event) {

        event.preventDefault();

        // We re using try catch because FireFox gets compatibility
        try {
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso'; 
            this._limpaFormulario();   
        } catch(erro) {
            this._mensagem.texto = erro;
        }     
    }
    
    importaNegociacoes() {
        
        let service = new NegociacaoService();
        service
            .obterNegociacoes()
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'   
            }))
            .catch(erro => this._mensagem.texto = erro);               
    }

    sort(column) {
        if(this._ordemAtual == column) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.sort((a, b) => a[column] - b[column]);
        }
        this._ordemAtual = column;
    }
    
    apaga() {
        
        this._listaNegociacoes.esvazia()    ;
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}