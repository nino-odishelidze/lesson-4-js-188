' use strict'
//დავალება1

function sum (...numbers) {
    let sum = 0;
    for (let item of numbers){
        sum = sum + item;
    };
     console.log(sum);
    
};

sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

//დავალება 2

function data() {
    let name
    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        isloggedin: true
    }
   if (user.isloggedin === true){
    name =   user.firstname + " " + user.lastname
      console.log("name");
   } else {
    console.log("false");
   
   }
   return(name)
    };
    console.log(data);

    //davaleba 3

    
        function array (...numbers){

            for( let i of item2){
             return Math.max(...item2)
            }

         
         }
         let resultnumbers = array (4, 6 ,8, 14, 67, 43, 23)
         console.log(resultnumbers)


     //    davaleba 4

     function array2 (i){
        if (i % 2 === 0){
            return(" this number is odd")
        }else if (i % 2 !== 0 ){
            return(" this number is even")
        }
    }
    let result = array2(14)
    console.log(array2)
