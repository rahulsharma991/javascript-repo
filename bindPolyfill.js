let obj = {
    productName: 'tesla volt car'
}

function logProducts(brand, skuId) {
    console.log('product' , this.productName, 'brand', brand, 'skuId', skuId)
}

//creating own bind method and attaching in Prototype so It will be available to all functions

Function.prototype.customBind = function(...args) {
    let thisRef = this // take reference of the attached func
    let params = args.slice(1) // 0th index params always refer to this of the calling object
    return function(...innerArgs) { 
        thisRef.apply(args[0], [...params, ...innerArgs]);
    } //returning function
}


//1st way
let productDetail = logProducts.customBind(obj, 'tesla', 'A123');
productDetail();

//If getting brand and skuId later
let productDetail2 = logProducts.customBind(obj);
productDetail2('tesla', 'B12');


//OR
let productDetail3 = logProducts.customBind(obj, 'tesla');
productDetail3('C13');