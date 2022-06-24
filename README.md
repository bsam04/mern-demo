# MERN Demo Project

This project acts as a demo to test out the MERN stack (MongoDB, Express.js, React, Node.js).

This webapp will allow a user to create and delete goals.

A demo can be seen [here](https://bsam-mernapp.herokuapp.com/) (note that it may take some time for the app to be ready if it has not been accessed in a while).

This project was based off the MERN stack [video series](https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm) from Traversy Media

## Installation

1. Run the following commands:

```
git clone https://github.com/bvsam/mern-demo.git
cd mern-demo
npm install
cd frontend
npm install
```

2. In the mern-demo folder, rename the `.envexample` file to `.env`
3. Replace "mongodb+srv://YOURMONGOURI" with your own URI in the `.env` file to connect to your MongoDB cluster (ex: mongodb+srv://USERNAME:PASSWORD@CLUSTER/COLLECTION?retryWrites=true&w=majority)
4. Run `npm run dev` in the mern-demo folder to start the app
