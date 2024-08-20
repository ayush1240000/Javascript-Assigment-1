class Salary {
    constructor(salaryId,employee, salary) {
        this.employee =employee;
        this.salaryId = salaryId;
        this.salary = salary;
    }
    getempSalary(){
        console.log(`${this.employee.fName} ${this.salary}`);
    }
}

module.exports=Salary;