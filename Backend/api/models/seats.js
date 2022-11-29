import mongoose  from "mongoose";

const { Schema } = mongoose;

const seatSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    seatnumbers:[{ number : Number, 
                    reserved:{  
                                type:Boolean,
                                default:false 
                            }
                }]

},

{timestamps:true});

export default  mongoose.model("Seats", seatSchema);