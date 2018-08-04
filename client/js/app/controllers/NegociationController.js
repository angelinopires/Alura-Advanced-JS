class NegociationController {

    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
        this._listNegociation = new ListNegociations();
    }
    
    add(event) {
        event.preventDefault();
        this._listNegociation.add(this._createNegociation());
        this._clearForm();

        console.log(this._listNegociation.negociations);
    }

    _createNegociation() {
        return new Negociation(
            DateHelper.stringToDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputValue.value
        );
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputAmount.value = 1;
        this._inputValue.value = 0.0;

        this._inputDate.focus();
    }
}