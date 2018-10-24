function modifyAverage(num) {
   let number = +num | 0;

   while (checkAverage(number) <= 5){
       number = (""+number) + "9";
   }

   return number;


   function checkAverage(number) {
       let digits = (""+number).split("");
       let sum = 0;
       for (let i = 0; i < digits.length; i++) {
           sum += parseFloat(digits[i],10);
       }

       return sum / digits.length;
   }
}

console.log(modifyAverage(101));