/* Pair challenge #2: create a function called logUserGroup that takes in an array of users and a callback function, and calls the callback with each key and value on the user object EXCEPT for orderHistory and libraGroup by passing a template literal like callback(`<key>: <value>`)

For Example, the following user 
{
  name: "Roger Branch",
  newCustomer: false,
  orderHistory: [
    { orderNumber: 1, orderDate: "8/19" },
    { orderNumber: 2, orderDate: "4/27" }
  ],
}
would have the following key/value pairs to pass to the callback
"name: Roger Branch"
"newCustomer: false"

HINT - think about extensibility here. You could log out properties individually like callback(`${name}: ${user.name}`), but this only handles the properties that exist now. If you use forEach and dynamic properties and values instead, any new property on the user will be included moving forward.
*/
export const logUserInformation = (array, callBack) => {
  // Your solution here
};

export const data = {
  logger: item => {
    // This function is used as a placeholder callback
    console.log(item);
  },
  users: [
    {
      name: "Hal Smith",
      email: "hal@gmail.com",
      emailOptout: true,
      newCustomer: true,
      orderHistory: [{ orderNumber: 1, orderDate: "8/19" }]
    },
    {
      name: "Roger Branch",
      email: "roger@gmail.com",
      newCustomer: false,
      orderHistory: [
        { orderNumber: 1, orderDate: "8/19" },
        { orderNumber: 2, orderDate: "4/27" }
      ]
    },
    {
      name: "Elizabeth Chandler",
      email: "elizabeth@gmail.com",
      orderHistory: [{ orderNumber: 1, orderDate: "8/21" }],
      newCustomer: true
    },
    {
      name: "Roger Trot",
      email: "roger@gmail.com",
      newCustomer: false,
      orderHistory: [
        { orderNumber: 1, orderDate: "9/22" },
        { orderNumber: 2, orderDate: "9/1" }
      ]
    },
    {
      name: "James Yertz",
      email: "james@gmail.com",
      newCustomer: true,
      orderHistory: [{ orderNumber: 1, orderDate: "3/21" }]
    }
  ]
};
