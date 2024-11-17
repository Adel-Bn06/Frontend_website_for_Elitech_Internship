var p;
var t;
function imc(p,t){
    return p/(t*t);
}
// imc(60,1.77);
// console.log(imc(60,1.77))
var a;
var b;
function PGCD(a,b){
    while(a!=b){
      if(a>b){
        a=a-b;
        
      }
      else  {
        b=b-a;
      }
    }
 return a;
}
console.log(PGCD(4,12))