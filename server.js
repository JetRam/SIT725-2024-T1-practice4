// var express = require("express");
// var app = express();
// const path = require('path');

// app.get('/', async(req, res) => {
//   res.sendFile(path.join(__dirname,'index.html'));
// });

// const {MongoClient, ServerApiVersion} = require('mongodb');

// const uri = "mongodb+srv://djethroramos:ranzhangismyfavorite@cluster0.kqha3em.mongodb.net/?retryWrites=true&w=majority"
// let collection;
// app.use(express.static(__dirname+""))
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));

// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       await client.connect();
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {

//       await client.close();
//     }
//   }
//   run().catch(console.dir);

// // const client = new MongoClient(uri, {
// //     serverApi: {
// //         version: ServerApiVersion.v1,
// //         strict: true,
// //         deprecationErrors: true,
// //     }
// // });

// async function runDBConnection() {
//     try {
//         await client.connect();
//         collection = client.db().collection('Players');
//         console.log(collection);
//     } catch (ex) {
//         console.error(ex);
//     }
// }

// app.get('/', (req, res) => {
//     res.render('index.html');
// });

// // app.get('/api/cards', async (req, res) => {
// //   try {
// //       const result = await getAllCards();
// //       res.json({ statusCode: 200, data: result, message: 'get all cards success'});
// //   } catch (err) {
// //       res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
// //   }
// // });


// // app.get('/api/cards', (req, res) => {
// //   getAllCards((err, result) => {
// //       if (!err) {
// //           res.json({ statusCode: 200, data: result, message: 'get all cards success'});
// //       } else {
// //           res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
// //       }
// //   });
// // });

// // app.get('/api/cards', (req, res) => {
// //     getAllCards((err, result) => {
// //         if (!err) {
// //             res.json({ statusCode: 200, data: result, message: 'get all cards success'});
// //         }
// //     });
// // });

// const addedData = [

// ]

// app.get('/api/cards',(req,res) => {
//     res.json({statusCode: 200, cards: addedData, message:"Success"})
// });

// var port = process.env.PORT || 3000;
var fs = require('fs');
// var http = require('http');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// });

// app.listen(port,()=>{
//     console.log("Jet App listening to: "+port)
// });

var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express()
const uri = "mongodb+srv://djethroramos:ranzhangismyfavorite@cluster0.kqha3em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var port = process.env.port || 3000;
let collection;
const path = require('path');

app.use(express.static(__dirname + ''))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Players');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://djethroramos:<password>@cluster0.kqha3em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const addedData = [

]

app.post('/api/cards', (req, res) => {
    const formData = req.body; // Get the form data from the request body
    addedData.push(formData); // Add the form data to the array
    res.json({ statusCode: 200, message: "Data added successfully", addedData }); // Send a response
});

app.get('/api/cards',(req,res) => {
    res.json({statusCode: 200, cards: addedData , message:"Success"})
});


// app.listen(port,()=>{
//     console.log("Jet App listening to: "+port)
// });


app.listen(3000, () => {
    console.log('express server started');
    runDBConnection();
}); 