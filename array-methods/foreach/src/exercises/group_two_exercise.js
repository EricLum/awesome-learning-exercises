// Group Challenge #2: Implement a function called saveNewUsers that takes an array of
// users and and a callback. For each user, if the "newCustomer" property is true,
// execute the callback with the user's name name and email.
export const saveNewUsers = (array, callBack) => {
  // Your solution here
};

export const data = {
  saveUser: () => {
    //This function is not real, it's just a placeholder to be used in your function
    return () => {};
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
