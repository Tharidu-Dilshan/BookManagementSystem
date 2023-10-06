const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName :{
        type : String,
        required: true
    },
    authorName :{
        type : String,
        required: true
    },
    ISBN:{
        type: String,
        required:true
         
    },

    description:{
        type:String,
    }
    

}
);
const books = mongoose.model("book",bookSchema);
module.exports=books;