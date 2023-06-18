
import { AppDataSource } from "./data-source"
import { Trains } from "./entity/Trains"
import { Passengers } from "./entity/Passengers"
import bodyParser from "body-parser";
const express = require("express");
const app = express();
const port = 3007;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

AppDataSource.initialize().then(async () => {

    console.log("AppDataSource.initialize()...")
}).catch(error => console.log(error))

app.get("/", (req: any, res: { send: (arg0: string) => void; }, next: any) => {
 res.send("Welcome to main route!");
});

// gets the trains
app.get('/trains', async (req: any,res: any)=>{ 
    const result = await AppDataSource.getRepository(Trains).find();
    console.log(result);
    res.send(result);
 })

// get the passenger
app.get("/passengers", async function (req: Request, res: any) {
    const result = await AppDataSource.getRepository(Passengers).find();
    console.log(result);
    res.send(result);
})

//get train based on id 
app.get("/trains/:id", async function (req:any, res: any) {
    const results = await AppDataSource.getRepository(Trains).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

// get passenger based on id 
app.get("/passengers/:id", async function (req: any, res: any) {
    const results = await AppDataSource.getRepository(Passengers).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

//post the passenger
app.post('/passenger', async (req: any,res: any)=>{
console.log("inside post",req.body);
const passenger = await AppDataSource.getRepository(Passengers).create(req.body)
const results = await AppDataSource.getRepository(Passengers).save(passenger)
console.log(results)
 res.send(results)

})

//post the passenger
app.post('/train', async (req: any,res: any)=>{
    console.log("inside post train",req.body);
    const train = await AppDataSource.getRepository(Trains).create(req.body)
    const results = await AppDataSource.getRepository(Trains).save(train)
    console.log(results)
    return res.send(results)
    
})

// delete a passenger
app.delete("/passengers/:id", async function (req: any, res: any) {
    const results = await AppDataSource.getRepository(Passengers).delete(req.params.id)
    return res.send(results)
})


app.listen(port, () => console.log(`App listening on port: ${port}`));


 