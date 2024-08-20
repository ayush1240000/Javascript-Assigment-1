const User = require("./User");

class Employee extends User {
        constructor( fName, lName, contactNo, age, role ,empid) {
            super(null, fName, lName, contactNo, age, role);
            this.empid= empid;
      
    }
}


module.exports = Employee;

