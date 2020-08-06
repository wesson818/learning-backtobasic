export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Dan';
        this.lastName = data.lastName || 'AI';
        this.middleName = data.middleName;    
    }
}