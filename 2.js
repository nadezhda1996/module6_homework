
function hey (n) {
  if(n<1000 && n>=2){
      for (let j = 2; j<n; j++){
      if (n % j == 0){
      console.log(n+ " - сложное число");
      return
    } else {}
    } 
    console.log(n + " - простое число" )
  } else {
  console.log("Упс, что-то пошло не так. Введите данные еще раз.")
  } 
}

hey(181)