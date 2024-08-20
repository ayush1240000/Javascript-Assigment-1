class UserMenu {
    constructor(id ,customer,orderItems) {
        this.id = id;
        this.customer= customer;
        this.orderItems = []; 
        this.total =this.getOrderDetails() 
            return this.orderItems.map(item => ({
              menuName: item.menu.menuName,
              quantity: item.quantity,
              total: item.menu.price * item.quantity
            }));
        }
        
            addItem(menu, quantity) {
              this.orderItems.push({ menu, quantity });
            }
    }



module.exports=UserMenu;