import app from './index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB running")
    app.listen(process.env.PORT, () => {
        console.log(`Server is running successfully on port: ${process.env.PORT}`)
    })

})
.catch((err) => {
    console.log("Something went wrong", err)
});
    
