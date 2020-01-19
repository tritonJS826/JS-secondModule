


export class User  {
  constructor(id, name, password) {
    this.id = id;
    this.name= name;
    this.password = password;
    //getUserName: () => {return document.getElementById('userName').value;},
    //getUSerPassword: () => {return document.getElementById('userPassword').value;},
    this.basket= [];
    this.bought= [];
    this.favourite=[];
  }
}
