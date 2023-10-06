const router= require("express").Router();
const {response}=require("express");
const {create}=require("../models/book");
let books = require("../models/book");

router.route("/add").post((req,res) =>{
    
    const {bookName,authorName,ISBN,description}=req.body;

const newBook = new books({
    bookName,
    authorName,
    ISBN,
    description
})
newBook.save().then(()=>{
    res.json("Book Added")   
}).catch((err)=>{
    console.log(err);
})

})

router.route("/").get((req,res)=>{
    books.find().then((books)=>{
        res.json(books)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/delete/isbn").delete(async(req,res)=>{
    let ISBN = req.params.isbn;
    
   await books.findByIdAndDelete(ISBN).then(()=>{

    res.status(200).send({status:"Book Deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with deleting data",error:err.message});

})

})


module.exports=router;