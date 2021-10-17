const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
constructor(name,id,email,school){
    super(name,id,email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;


}
getSchool(){
    const mySchool = this.school;
    return mySchool;
}
getRole(){
    const internRole = 'Intern';
    return internRole;
}

}
module.exports = Intern;