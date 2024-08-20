class Supplier {
    constructor(supplierId, supplierName, contactInfo) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.contactInfo = contactInfo;
    }
    getfname(){
        return this.supplierName;
    }
}

module.exports=Supplier;