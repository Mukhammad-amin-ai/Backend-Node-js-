import Express from "express";
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'

import router from "./router.js";
const PORT = 5000;
const DB_URL = 'mongodb+srv://amin:user@cluster01.kcpynb7.mongodb.net/?retryWrites=true&w=majority'

const app = Express()

app.use(Express.json())
app.use(Express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Serever work on port' + PORT))
    } catch (e) {
        console.error(e);
    }
}

startApp()