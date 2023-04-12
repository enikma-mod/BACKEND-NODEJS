const express = require("express");
const cors = require("cors");
require('dotenv').config()
const db = require("./app/models");
const tutorials = require("./app/controllers/tutorial.controller");

var router = require("express").Router();
const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



       // Create a new Tutorial
       router.post("/", tutorials.create);
  
       // Retrieve all Tutorials
       router.get("/", tutorials.findAll);
     
       // Retrieve all published Tutorials
       router.get("/published", tutorials.findAllPublished);
     
       // Retrieve a single Tutorial with id
       router.get("/:id", tutorials.findOne);
     
       // Update a Tutorial with id
       router.put("/:id", tutorials.update);
     
       // Delete a Tutorial with id
       router.delete("/:id", tutorials.delete);
     
       // Delete all Tutorials
       router.delete("/", tutorials.deleteAll);
     
       app.use('/api/tutorials', router);

// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })

// // app.post('/', (req, res) => {
// //     res.send('Got a POST request')
// //   })

// //   app.put('/user', (req, res) => {
// //     res.send('Got a PUT request at /user')
// //   })

// //   app.delete('/user', (req, res) => {
// //     res.send('Got a DELETE request at /user')
// //   })

// // const express = require("express");
// // const cors = require("cors");

// // const app = express();

// // var corsOptions = {
// //   origin: "http://localhost:8081"
// // };

// // app.use(cors(corsOptions));

// // // parse requests of content-type - application/json
// // app.use(express.json());

// // // parse requests of content-type - application/x-www-form-urlencoded
// // app.use(express.urlencoded({ extended: true }));

// // // simple route
// // app.get("/", (req, res) => {
// //   res.json({ message: "Welcome to bezkoder application." });
// // });

// // require("./app/routes/tutorial.routes")(app);

// // // set port, listen for requests
// // const PORT = process.env.PORT || 8080;



// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}.`);
// // });

// // const db = require("./models");
// // db.mongoose
// //   .connect(db.url, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// //   })
// //   .then(() => {
// //     console.log("Connected to the database!");
// //   })
// //   .catch(err => {
// //     console.log("Cannot connect to the database!", err);
// //     process.exit();
// //   });

// //   const tutorials = require("./app/controllers/tutorial.controller");
  
// //     var router = require("express").Router();
  
// //     // Create a new Tutorial
// //     router.post("/api/tutorials", tutorials.create);
  
// //     // Retrieve all Tutorials
// //     router.get("/", tutorials.findAll);
  
// //     // Retrieve all published Tutorials
// //     router.get("/published", tutorials.findAllPublished);
  
// //     // Retrieve a single Tutorial with id
// //     router.get("/:id", tutorials.findOne);
  
// //     // Update a Tutorial with id
// //     router.put("/:id", tutorials.update);
  
// //     // Delete a Tutorial with id
// //     router.delete("/:id", tutorials.delete);
  
// //     // Delete all Tutorials
// //     router.delete("/", tutorials.deleteAll);
  
// //     app.use('/api/tutorials', router);

// const express = require("express");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "*"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// require("./app/routes/tutorial.routes")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 3000;



// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });