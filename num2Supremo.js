for (var num = 1; num < 100; num ++) {

    var three = num % 3;
    var five = num % 5;
    
    if ((three == 0) && (five == 0))
        console.log("FizzBuzz");
    
    else if (three == 0)
        console.log("Fizz");
    
    else if (five == 0) 
        console.log("Buzz");
    
    else console.log(num);
    }
      