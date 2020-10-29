export class User{
  _id?: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  sex: string;
  phone_number: string;
  address: string;
  constructor(obj: any){
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.age = obj.age;
    this.address = obj.address;
    this.email = obj.email;
    this.sex = obj.sex;
    this.phone_number = obj.phone_number;
  }
}

export class Users{
  users: User[];
}
