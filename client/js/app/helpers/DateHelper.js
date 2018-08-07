class DateHelper {
    // We defined thoses methods to static because we can this class instead of instantiate

    constructor() {

        throw new Error('Datahelper cant be instantiate');
    }

    static dateToString(date) {

        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    static stringToDate(text) {

        // This RegExp selects just numbers
        if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
            throw new Error('The date is invalid! Please use the yyyy-mm-dd format')

        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }
}