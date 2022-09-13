class Emp {
  constructor(id, name, age, city) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
  }
  fullName() {
    console.log(
      `${this.name} id No.${this.id}, age ${this.age}, from ${this.city}  `
    );
  }
}
class Works extends Emp {
  constructor(id, name, age, city, work) {
    super(id, name, age, city);
    this.work = work;
  }
}
class Depts extends Works {
  constructor(id, name, age, city, work, dept) {
    super(id, name, age, city, work);
    this.dept = dept;
  }
}
class Admins extends Depts {
  constructor(id, name, age, city, work, dept, admin) {
    super(id, name, age, city, work, dept);
    this.admin = admin;
  }
}
class Branchs extends Admins {
  constructor(id, name, age, city, work, dept, admin, branch) {
    super(id, name, age, city, work, dept, admin);
    this.branch = branch;
  }
}
let emp1 = new Works(1, "Ramesh", 54, "pune", "painter");
let emp2 = new Depts(2, "Varun", 64, "Nagpur", "web", "FDE-I");
let emp3 = new Admins(3, "Vivek", 69, "varje", "Full-Stack", "SDE-II","CTO");
let emp4 = new Branchs(4, "Atul", 70, "Bramhapuri", "devop", "SED-III", "CEO","Pune");
console.log(emp4.fullName());
