const mongoose = require("mongoose")

const connectDB = async()=>{
   try{
    await mongoose.connect('mongodb://localhost:27017/ABC')
    console.log("DB Connected")
   }
   catch(error){
    console.log("Error in Mongo Connection")
   }
}
module.exports  = connectDB

// , {
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
// }