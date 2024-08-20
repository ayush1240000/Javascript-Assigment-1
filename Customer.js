const User = require("./User");

class Customer extends User{
  constructor( fName, lName,custid) {
    super(null, fName, lName, null,null,null);
    this.custid= custid;

  }
  getCustInfo(){
    console.log(` ${this.custid} ${this.fname} ${this.lname}`);
  }
}

module.exports= Customer;