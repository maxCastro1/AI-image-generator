import mongoose from "mongoose";

const connectDB  = (url) => {
//    mongoose.set('strictQuery', true);
//    mongoose.connect(url)
//    .then(()=>console.log('MongoDB connected'))
//    .catch((error)=>console.log(error))

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  console.log("Server up and running!"))
.catch((error) => console.log(error.message) )

    
}

export default connectDB