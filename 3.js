function funcA(foo){
  foo();
  return function (){
   let a=1
   console.log(a+funcB())
  }
}
function funcB(){
   let b=10
   return b
}
const resultSum=funcA(funcB);
resultSum();
