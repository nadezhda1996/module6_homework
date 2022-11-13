let d=0
const sum = function(a, b){
  c = a+d;
  if (c > b){
   return
  } else {
   console.log(c)
   d+= 1;
  }
}

const IntervalId = setInterval(sum, 1000, 5, 15)