class NegociationController {

    constructor() {
        
        let $ = document.querySelector.bind(document); // Similar to how jQuery works with $
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        this._listNegociation = new ListNegociations();

        this._negociationsView = new NegociationsView($('#negociationsView'));
        this._negociationsView.update(this._listNegociation);

        this._message = new Message();
        this._messageView = new MessageView($('.messageView'));
        this._messageView.update(this._message); 
    }
    
    add(event) {

        event.preventDefault();
        this._listNegociation.add(this._createNegociation());
        this._negociationsView.update(this._listNegociation);

        this._message.text = 'Negociation was recorded successfully';
        this._messageView.update(this._message); 

        this._clearForm();
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