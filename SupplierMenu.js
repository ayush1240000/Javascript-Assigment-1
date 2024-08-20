class SupplierMenu {
    constructor(supplier, menu) {
        this.supplier = supplier;
        this.menu = menu;
    }

    getinfo(){
        console.log(`${this.supplier} , ${this.menu}`);
    }
}
module.exports= SupplierMenu;