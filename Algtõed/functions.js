/**
 * FUNCTIONS
 * Funktsioone kasutame korduvate tegevuste automatiseerimiseks
 * Funktsioon võtan sulgude vahele parameetrid (placeholder)
 */
function sum(num1, num2) {
    return num1 + num2
}

const summaryOfTwoNumbers = sum(4, 6);

/**
 * Arrow function
 * 
 */
function fullName(firstName, lastName) {
    //return firstname + '' + lastName;
    return `${firstName} ${lastName}` ;
}

    console.log(fullName("Maikel", "Lätt")) ;

    /**
     * IIFE-funktsioon
     * 
     */
    
    (() => {
        console.log("IIFE")

})();