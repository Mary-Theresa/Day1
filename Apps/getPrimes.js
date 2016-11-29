module.exports={

prime: function(number)
{

  
  var root = Math.ceil(Math.pow(number, 0.5));
  for(var i = 2; i <= root; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true
},



getPrimes: function(number)
{
  if (number < 2)
  {
    return [];
  }
  var primes = [2,3];
  for(var count = 5; count <=number;count++){
    if(this.prime(count)){
      primes.push(count)
    }
  }
  return primes
}
}