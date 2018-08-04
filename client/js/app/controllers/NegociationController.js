class NegociationController {

    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
    }
    
    add(event) {
        event.preventDefault();

        let date = new Date(...
            this._inputDate.value
                .split('-')
                .map((item, index) => item - index % 2)
        );

        let negociation = new Negociation(
            date,
            this._inputAmount.value,
            this._inputValue.value
        );

        console.log(date, negociation);
    }
}