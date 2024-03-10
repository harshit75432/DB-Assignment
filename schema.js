let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    desc : {
        type : String
    },
    sku : {
        type : String
    },
    category_id : {
        type : Schema.Types.ObjectId,
        ref : 'Productcategory'
    },
    inventory_id : {
        type : Schema.Types.ObjectId,
        ref : 'Productinventory'
    },
    price : {
        type : Number
    },
    discount_id : {
        type : Schema.Types.ObjectId,
        ref : 'discount'
    }
},
{
    timestamp : true
})
let productCategorySchema = new mongoose.Schema({
    name : {
        type : String 
    },
    dec : {
        type : String
    },

},
{
    timestamp : true
}) 
let productInventorySchema = new mongoose.Schema({
    quality : {
        type : Number
    }
},{
    timestamp : true
})
let discountSchema = new mongoose.schema({
    name : {
        type : String
    },
    desc : {
        type : String
    },
    discount_percent :{
        type : String
    },
    active : {
        type : Boolean
    }
},
{
    timestamp : true
})

let product = mongoose.model('Product',productSchema)
let category = mongoose.model('Category',productCategorySchema)
let inventory = mongoose.model('Inventory',productInventorySchema)
let discount = mongoose.model('Discount',discountSchema)

