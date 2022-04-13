const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
const getXlNRBooks=async function (req , res)
{
    let inrBOOKs=await bookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:inrOooks})
}
const getRandomBooks=async function(req,res)
{
    let randomBook=await bookModel.find({$or:[{totalPages:{$gt:500}}]})
    res.send({msg:randomBook})
}
const getParticularBooks=async function(req,res)
{
    let name=req.query.authorName
    let year=req.query.year
    let bookData=await bookModel.find({$or:[{authorName:name},{year:year}]})
    res.send({msg:bookData})
}

module.exports.getXlNRBooks= getXlNRBooks
module.exports. getRandomBooks=  getRandomBooks
module.exports.getParticularBooks=getParticularBooks 