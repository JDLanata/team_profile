const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    
    
    }
    getGithub(){
        const mygitHub = this.github;
        return mygitHub;
    }
    getRole(){
        const enginRole = 'Engineer';
        return enginRole;
    }

}

module.exports = Engineer;