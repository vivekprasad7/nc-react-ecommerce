import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */



export const users = [
  {
    _id: uuid(),
    firstName: "Tyler",
    lastName: "Durden",
    email: "tylerdurden@gmail.com",
    password: "tylerdurden",
    address: [
      {
        _id:uuid(),
        name:"Howard Roark",
        street:"4 Envision Avenue",
        city:"New York City",
        zipcode:"54321",
        state:"New York State",
        country:"United States",
        mobile:"9876543210",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
