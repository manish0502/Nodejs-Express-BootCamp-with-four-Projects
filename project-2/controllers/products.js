const Product = require('../models/products')


const AllDetails= (req, res, next) => {

    res.json({ 
        msg:"This is from controller"
    })
}




module.exports = { 
    AllDetails
}