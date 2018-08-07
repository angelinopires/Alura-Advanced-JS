class ListNegociations {

    constructor() {
        
        this._negociations = [];
    }

    add(negociation) {

        this._negociations.push(negociation);
    }
    
    get negociations() {

        return [].concat(this._negociations);
    }
}