import { Products } from "../main.js";

export const productsHandler = (req, res) => {
    res.send(Products);
}
export const singleProduct = (req, res) => {
    try{
        let id = req.params.productId;
        const single = Products.find((product) => product.id === Number(id));
        if(!single){
            res.status(404)
            res.send("product not found")
        }
        res.send(single);

    }catch(err){
        res.status(404)
        res.send(`Product not found!, number of products : ${Products.length}`)
    }
}
export const addProduct = (req, res) => {
    let newProduct = {
        id : Products.length+1,
        ...req.body,
        title : req.body.title,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images
    }
res.status(201);
Products.push(newProduct);
res.send(Products[Products.indexOf(newProduct)]);
}
export const updateProduct = (req, res) => {
let id = req.params.productId;
const update = Products.find((product) => product.id === Number(id));
res.send({
    ...update,
    title : req.body.title,
    price: req.body.price,
    description: req.body.description,
    images: req.body.images
    }
    );
}
export const deleteProduct = (req , res) => {
     let id = req.params.productId;
     const deleteProduct = Products.find(product => product.id === Number(id));
     if(deleteProduct){
         Products.splice(Products.indexOf(deleteProduct), 1);
         res.status(202)
         res.send("Product removed Successfully!")
     }else{
         res.status(404)
         res.send("Product Not Found!")
 
     }
}


