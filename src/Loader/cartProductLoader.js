import { getShoppingCart } from "../utilities/fakedb";

 const cartProductLoader = async()=>{
    const productLoaded = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const Products = await productLoaded.json();
    console.log(Products);
   
    // if data in database you use awits method//
    const storeCart =getShoppingCart()
    const saveCart = [];
 
    for(const id in storeCart){
      const addedProduct = Products.find(pd=>pd.id===id);
      if(addedProduct){
         const quentity = storeCart[id];
          addedProduct.quentity = quentity;
          saveCart.push(addedProduct)
      }

    }
    return saveCart;
 }
 export default cartProductLoader