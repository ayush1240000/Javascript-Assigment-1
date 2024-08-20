class Menu {
    constructor(menuId, menuName, menuCategory, price) {
        this.menuId = menuId;
        this.menuName = menuName;
        this.menuCategory = menuCategory;
        this.price = price;
    }
    getMenuinfo(){
     console.log(`${this.menuId} ${this.menuName}`);
    }
}

module.exports = Menu;

// class Menu {
//     constructor(menuId, menuName, menuCategory, price) {
//       this.menuId = menuId;
//       this.menuName = menuName;
//       this.menuCategory = menuCategory; // 'veg' or 'non_veg'
//       this.price = price;
//     }
  
//     getDetails() {
//       return `${this.menuName} (${this.menuCategory}) - $${this.price}`;
//     }
//   }
  