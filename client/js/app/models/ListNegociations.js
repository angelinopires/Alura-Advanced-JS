class ListNegociations {

    constructor(model) {
        
        this._negociations = [];
        this._model = model;
    }

    add(negociation) {

        this._negociations.push(negociation);
        this._model(this);
    }
    
    get negociations() {

        return [].concat(this._negociations);
    }

    clear() {
        this._negociations = [];
        this._model(this);
    }
}