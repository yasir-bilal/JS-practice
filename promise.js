const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // executor func
  const myExecutor = (resolve, reject) => {
      if (inventory.sunglasses > 0) {
          resolve('Sunglasses order processed.');
      } else {
          reject('That item is sold out.');
      }
  };
  // constructing new promise here
  const orderSunglasses = () => {
      return new Promise(myExecutor);
  };
  //calling promise
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);    
  

  //checking inventory module
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
 
  
 module.exports = { checkInventory };