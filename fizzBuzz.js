var count=1;
while ( count <= 100) {
    if ((count % 3) == 0 && (count % 5) == 0){
        console.log(count+" FizzBuzz");
    }else if ((count % 3) == 0){
        console.log(count+" Fizz");
    }else if ((count % 5) == 0) {
        console.log(count+" Buzz");
    }else{
        console.log(count);
    }
    count++
}