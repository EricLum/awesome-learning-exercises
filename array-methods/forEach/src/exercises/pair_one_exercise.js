/* Pair challenge #1 Implement a function called createLibraVariations that takes in an array of users and a callback. 
This function should iterate through all users and for the the first half of users, call the callback with an object consisting of user email and libraGroup: "A".
For the second half of users, it should call the callback with an object consisting of user email and libraGroup: "B".
If you choose to create a helper function and pass it into createLibraVariations, feel free!

HINT: Callback paramater should look something like this: callback({email: user.email, libraGroup: "A"})
*/
export const createLibraVariations = (array, callback) => {
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
