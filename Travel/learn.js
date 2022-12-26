//const paragraphs = document.getElementsByClassName("somePara");

//const trimm = (text,  start, finish) => {
   // const result = `${text.slice(start, finish)}...Read More`
    //return result;
//}
//console.log(trimm('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit and so on',
//0, 501));
//paragraphs.addEventListener('click', trimm)
function isDivideBy(number, a, b) {
    if ((number % a)  === 0 && (number % b)  === 0){
        return true
        }
        else {
            return false
          }
  }
  //console.log(isDivideBy(50, 3, 2));
  function evenOrOdd(number) {
    if (number%2===0){
      return "Even"
    }
    else{return "Odd"
    }
}
//console.log(evenOrOdd(53));

    
    
  //console.log(solution('abc', 'bc'));
  function repeatStr (n, s) {
    return n.repeat(s)
  }
  //console.log(repeatStr('hey', 3));
  function finalGrade (exam, projects) {
  if (exam >90 || projects>10){
    return 100
  }
  else if (exam>75 && projects>=5){
    return 90
  }
  else if (exam>50 && projects>=2){
           return 75
           }
  else 0
}
//console.log(finalGrade(40, 1));
function removeChar(str){
 //You got this!
return str.slice(1, -1)
};
//console.log(removeChar("Artur"));
const x = "balerina"
//console.log(x.split().map());
const quarterOf = (month) => {
  // Your code here
  if (month === 1 || month===2 || month ===3 || month ===4){
    return 1
  }
  else if(month ===5 || month===6 || month ===7 || month ===8){
    return 2
  }
  else if(month ===9 || month===10 || month ===11 || month ===12){
    return 3
}
  }
 // console.log(quarterOf(6));

//let a += 10;
for(let i = 0; i <= 4; i++) {
  //console.log(++i);
}

//let first = 1; let second = 2;
//let first = 1; first = 2;
//let first = 1; let first = 2;
//const first = 1; first = 2;
//const first = 1, second = 2;
a = true, b = true
console.log(!(!a && !b));
