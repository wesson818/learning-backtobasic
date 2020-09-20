// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // no readonly, private or public = public
    format() {
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
