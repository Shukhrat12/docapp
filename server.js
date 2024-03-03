import app from './index.js'
import mongoose from 'mongoose'

const PORT = 3001

const MONGO_URL=""

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("MongoDB running")
    app.listen(PORT, () => {
        console.log(`Server is running successfully on port: ${PORT}`)
    })

})
.catch((err) => {
    console.log("Something went wrong", err)
});
    
