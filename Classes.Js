//class className{

// }

class employee{
    setDetails(name, id){
        this.name = name
        this.id = id;
    }
}

let emp1 = new employee();
let emp2 = new employee();
emp1.setDetails('jhon', 1001);
emp2.setDetails('peter', 1002);


console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);