class View  {

    constructor(element) {

        this._element = element;
    }

    template() {
        
        // we used this method because the childrens overwritten this method (if they have it)
        throw new Error('The template method should be builded first!');
    }

    update(model) {

        return this._element.innerHTML = this.template(model);
    }
}