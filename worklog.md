# Learning Microservices with Express.js and MongoDB Tutorial Worklog

- Library microservice-based application
  - Books service
  - Orders service
  - Customers service
- Tech Stack
  - Node.js
  - Express.js
  - MongoDB
  - Mongoosee (ODM)
  - mLAB (Host database)



- create a new folder called `Library`

  - ```
    > mkdir Library
    ```

- open the created Library folder somewhere that you usually store your code project

- create 3 folders for the following services, `books`, `customers`, and `orders`

  - ```
    > cd Library
    > mkdir books 
    > mkdir customers
    > mkdir orders
    ```

- not actually part of the tutorial but its better to track the changes in this app in git

  - initiate a git init inside the `Library` folder

    - ```
      Library > git init
      ```

  - since the instruction above just create a empty folder, lets make them visible to git by creating empty files caled `.gitkeep`. This force git to recognized the empty `books`, `customers` and `orders` folder

    - ```
      Library > touch books/.gitkeep
      Library > touch customers/.gitkeep
      Library > touch orders/.gitkeep
      
      Library > git add .
      Library > git commit -am "Add folders for books, customers and orders services"
      ```

- inside the `books` folder, create a new files called `books.js` 

  - ```
    Library > cd books
    books > touch books.js
    
    ```

- next, install `express` dependencies

  - ```
    books > npm install --save express
    ```

  - this will create a `package.json` and `package-lock.json` files and `node_modules` folder inside of the `books` folder

  - ```bash
    books > ls -l
    total 72
    -rw-r--r--   1 ulysses  staff      0 Dec 17 13:52 books.js
    drwxr-xr-x  53 ulysses  staff   1696 Dec 17 13:59 node_modules
    -rw-r--r--   1 ulysses  staff  31820 Dec 17 13:59 package-lock.json
    -rw-r--r--   1 ulysses  staff     53 Dec 17 13:59 package.json
    
    ```

- next install body-parser dependencies package

  - ```bash
    books > npm install --save body-parser
    ```

- next install mongoose dependencies package

  - ```bash
    books > npm install --save mongoose
    ```

- Don't forget to commit any changes thru `git`

  -  ```
     books > git add ..
     books > git commit -am "Add package dependencies express, body-parser, and mongoose"
     ```

- next, add the following code in the `books.js` file

  - ```javascript
    // Load express
    const express = require("express");
    const app = express();
    
    app.listen(4545, () => {
        console.log("Up and running! -- This is our Books service");
    })
    ```

- next, run the app like this

  - ```
    books > node books.js
    ```

  - it should show something like this

    - ```bash
      ulysses@hornburg books % node books.js
      Up and running! -- This is our Books service
      ```

- next, add this routes

  - ```javascript
    app.get("/", (req, res) => {
      res.send("This is our main endpoint!");
    })
    ```

  - the `books.js` should look like this

    - ```javascript
      // Load express
      const express = require("express");
      const app = express();
      
      app.get("/", (req, res) => {
        res.send("This is our main endpoint!");
      })
      
      app.listen(4545, () => {
          console.log("Up and running! -- This is our Books service");
      })
      ```

- next, install `nodemon`

  - ```
    books > npm install -g nodemon
    ```

    - the **-g** flag install the `nodemon` globally in the system

  - @TODO add the purpose of `nodemon`

- **END OF PART 1**

- next, setup a cloud base MongoDB

- next, add the following code so that `books.js` could connect to cloud based MongoDB database

  - ```javascript
    // Load mongoose
    const mongoose = require("mongoose");
    
    // connect
    mongoose.connect("mongodb+srv://ulegaspi:jeQki1-vizdej-dugkih@cluster0.stndn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
        console.log("Database is connected!");
    });
    ```

  - the complete code should look likee this:

    - ```javascript
      // Load express
      const express = require("express");
      const app = express();
      
      // Load mongoose
      const mongoose = require("mongoose");
      
      // connect
      mongoose.connect("mongodb+srv://ulegaspi:jeQki1-vizdej-dugkih@cluster0.stndn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
          console.log("Database is connected!");
      });
      
      app.get("/", (req, res) => {
          res.send("This is our main endpoint!");
      })
      
      app.listen(4545, () => {
          console.log("Up and running! -- This is our Books service");
      })
      ```

    - @TODO move the username and login creds to a ENV VARIABLE

- **END PART 2**

- MongoDB/Atlas Credentials

  - ```
      username: ulegaspi
      password: jeQki1-vizdej-dugkih
    ```

  - ```
    mongodb+srv://ulegaspi:<password>@cluster0.stndn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    ```

- 

