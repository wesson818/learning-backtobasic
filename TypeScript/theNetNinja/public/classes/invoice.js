// classes
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number){
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // no readonly, private or public = public
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
