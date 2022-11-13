function getTypeOfNum(){
    let numb = [2, 1, 1, 0, "число", 0];
    let zero=0;
    let even=0;
    let uneven=0;
    let NotAN=0;
      for (let i = 0; i < numb.length; i++){
        if (!isNaN(numb[i])&& typeof numb[i] === "number")
        {
          if (numb[i] === 0) {
            zero += 1;
    
          } else if (numb[i] % 2 === 0) {
            even += 1;
          } else {
            uneven+= 1;
          }
        } else {
          NotAN+= 1;
        }
    
      }
      console.log("количество 0 : "+ zero);
      console.log("количество четных чисел : "+ even);
      console.log("количество нечетных чисел : "+ uneven);
      console.log("количество четных чисел : "+ even);
      console.log("это не число! : "+ NotAN);
    };
    
    getTypeOfNum();
    