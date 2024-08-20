
const user=require("./User");
const menu= require("./Menu");
const bill= require("./Bill");
const employee = require("./Employee");
const customer = require("./Customer");
const SupplierMenu = require("./SupplierMenu");
const Supplier = require("./Supplier");

const U1= new user(1,"ansh","surve","7555856142",20,"customer");
const c1= new customer("ansh","surve",1);
console.log(c1._fName);

const S1 = new Supplier(1,"ayush","450993930");
 const m1 = new menu(1, 'Pasta', "VEG", 10.99);

 const SM1 = new SupplierMenu(S1,m1);
