// Group Challenge #1: Implement a function called forEach that takes in an array and a callback,
// and will apply the callback to every element in an array. A couple of notes - this is by no
// means an exhaustive forEach. The actual forEach spec handles objects, arrays, and sparse
// arrays but this will help understand the inter-workings of forEach.

// HINTS:
// You will need to use a for loop
// If you're stuck, check out underscore :)

export const forEach = (array, callBack) => {
  // Your solution here
};

export const data = {
  exerciseOneArray: ["this", "is", "working", "so", "well!"],
  logger: item => {
    // This function is used as a placeholder callback
    return item;
  }
};

console.log(forEach(data.exerciseOneArray, data.logger));


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
