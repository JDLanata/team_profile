const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email,officeNumber) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;



    }

    getRole() {
        const myRole = 'Manager';
        return myRole;

    }
    getOfficeNumber() {
        const myOffice = this.officeNumber;
        return myOffice;
       
      

    }


}

module.exports = Manager;