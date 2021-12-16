import express from 'express';
import mongoose from 'mongoose';

// custom middleware create
const loggerMiddleware = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
    next();
}

const app = express();
app.use(express.json());

// application level middleware
app.use(loggerMiddleware);

//User Route
app.get('/users', (req:express.Request, res:express.Response) => {
    res.json({
        'status':true
    })
})

// save route
app.post('/save', (req:express.Request, res:express.Response) => {
    res.json({
        'status':true
    })
})

const router = express.Router()

router.use((req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log("Time:",new Date())
    next()
})

// get by :id
router.get("/user/:id",(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log('Request URL:', req.originalUrl)
    next()
},(req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log('Request Type:', req.method)
    next()
},(req:express.Request,res:express.Response)=>{
    res.json({
        status:true,
        id:req.params.id
    })
})

app.use('/',router)

const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});

