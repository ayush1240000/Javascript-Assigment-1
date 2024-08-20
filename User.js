class User {
    constructor(userId, fName, lName, contactNo, age, role) {
        this._userId = userId;
        this._fName = fName;
        this._lName = lName;
        this._contactNo = contactNo;
        this._age = age;
        this._role = role;
    }
    getinfo(){
        return console.log(`the user name is ${this._fName} ${this._lName}`);
    }
}
module.exports = User;  


