class Mkulima{

    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.vendors=[];

    }
  }

  class addFarm extends Mkulima{

  
    constructor (farmId,name,phone,address,farmer) {
      super(farmId,name,phone,address,farmer)
  console.log(this.farms.push(farmId,name,phone,address,farmer))

  }
  }
  var farm=new addFarm(6755883,"majimoto","078965433",67544342,"manyare")
  console.log(farm)

  let Farm={
    farmId:3456777,
    name:"quicker",
    phone:098564323,
    address:6754445,
    farmer:"Valaa",
    set Farm(updateFarm)
    {
      return this.Farm=updateFarm
    }
  };
  console.log(farm)

var farm={
  farmer:"manzoo",
  farmId:5676777,
  name:"swimiii",
  phone:098564323,
  address:6754445,
  get getFarm(){
    return this.farmId
  }

  

};

console.log(farms.getFarm)
class addProduct  extends Mkulima{
constructor(productsId,name,price){
super(price,productsId,name,)
console.log(this.product.push(price,productsId,name))
}


}
let product34=new addProduct(7894,"flour",34000)
console.log(product34)
let product354=new addProduct(794,"maize",4400)
console.log(product354)




let products={
   productId:67,
    name:"rice",
    price:780.50,
    set products(updateProducts){
        return this.product=updateProducts
  }
 }
  console.log(products)
 let product={
   productId:80,
    name:"milk",
    price:300,
    get getProducts(){
        return this.productId
 console.log(products.getProduct)
function productList(){
   var mazila=""
    return (mazila);
 }
let items=["oranges",390,"passion",45,"vegetables",100];{
 console.log(items);
 let result=productList(ITEMS);
 console.log(results);
    }
  }
 }







