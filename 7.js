//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the 
            correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
 
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
  
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
  
};



const prices = [34, 5, 20];
const shippingCost = 50;

  function totalShoppingCart(user, price, shippingCost) {
  let sum = 0
  for ( i = 0; i < price.length; i++){
   sum = sum + parseInt(price[i]); 
  }
    //\n is break line in a string, parseInt to convert string to integer
    
  if (user.isAmbassador == true ){
    sum = sum - (sum * 0.3);
   
   console.log(user.name + "\n Total cost of item in Cart" + " " + "=" + " " + sum)
  } 
  else {console.log(user.name + "\n Total cost of item in Cart" +" " + "=" + " " + sum)}
  
  if (sum < 100) {
      sum += shippingCost;
     console.log(" Total cost of item in Cart plus shipping" +" " + "=" + " " + sum);
  }
  }  
totalShoppingCart(paul, prices, shippingCost);