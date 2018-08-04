class Negociation {
    constructor(date, amount, value) {
        this._date = new Date(date.getTime()); // Imutability concepts apliccated 
        this._amount = amount;
        this._value = value;
        Object.freeze(this);
    }

    get date() {
        return new Date(this._date.getTime()); // Imutability concepts apliccated
    }

    get amount() {
        return this._amount;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._amount * this._value;
    }
}