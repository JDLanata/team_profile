// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        const myEmployee = this.name;
        return myEmployee;
    }


    getId() {
        const myId = this.id;
        return myId;
    }


    getEmail() {
        const myEmail = this.email;
        return myEmail;
    }



    getRole() {
        const role = 'Employee'

        return role;
    }
}

module.exports = Employee;