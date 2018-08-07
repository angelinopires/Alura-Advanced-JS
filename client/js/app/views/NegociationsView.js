class NegociationsView extends View {

    constructor(element) {
        
        super(element);
    }

    template(model) {

        // We need to convert the expression to string, because this method just accept strings notations
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociations.map(n => `

                    <tr>
                        <td>${DateHelper.dateToString(n.date)}</td>
                        <td>${n.amount}</td>
                        <td>${n.value}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3">TOTAL</td>
                <td>
                    ${model.negociations.reduce((total, index) => total + index.volume, 0.0)}
                </td>
            </tfoot>
        </table>    
        `;
    }
}

