import {dbUsers} from '../scripts/dbUsers.js';




export const currentUser = {
  name: dbUsers[dbUsers.length-1].name,
  password: dbUsers[dbUsers.length-1].password,
  basket: [],
  bought: [],
  favourite:[]
};
