import {HasFormatter} from '../interfaces/HasFormatter.js'

// classes
export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) {}
  
    // no readonly, private or public = public
    format() {
      return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}