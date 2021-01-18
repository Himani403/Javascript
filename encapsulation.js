class employee{

    setempdetails(name,id,phoneNo)
    {
        this.name=name
        this.id=id
        this.phoneNo=phoneNo

    }
    getempName(){
        return this.name;
    }
    getempid(){
        return this.id;
    }
    getempphoneNo(){
        return this.phoneNo
    }
}
let emp1 = new employee();

emp1.setDetails('Jhon', 1001, 0147235473);

console.log(emp1.getempName());
console.log(emp1.getempid());
console.log(emp1.getempphoneNo());
