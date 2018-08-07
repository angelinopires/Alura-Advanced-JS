class NegociationController {

    constructor() {
        
        let $ = document.querySelector.bind(document); // Similar to how jQuery works with $
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');

        // We are sending the model to the add and update methods. This way we can call the methods inside the instance and reduce de code
        this._listNegociation = new ListNegociations(model => this._negociationsView.update(model));
        this._negociationsView = new NegociationsView($('#negociationsView'));
        this._negociationsView.update(this._listNegociation);

        this._message = new Message();
        this._messageView = new MessageView($('.messageView'));
        this._messageView.update(this._message); 
    }
    
    add(event) {

        event.preventDefault();
        this._listNegociation.add(this._createNegociation());
        this._message.text = 'Your negociation was recorded successfully';
        this._messageView.update(this._message);  
        this._clearForm();
    }

    delete() {

        this._listNegociation.clear();
        this._message.text = 'Your negociations were deleted successfully';
        this._messageView.update(this._message);
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