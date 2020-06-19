// The day we were waiting for happened and unknown species contacted us for the first time. Scientist are struggling to
// learn their languages, but they immediately found out that they are using numeric system that can be represented with
// only 3 characters.
// 
// We need to create a program that converts our numbers to those understandable by aliens. You can use our letters A, B and C
// to represent the alien characters.
// 
// Process of converting decimal system to any other system (binary, octal, hexadecimal) looks like this:
// 
// 1. Define the number of characters (c) of the targeted numeric system. For example binary system has only 0 and 1 so 
//      the number of characters would be 2. For hexadecimal we have from 0 to 9 and from A to F which is in total 16 characters.
//      Decimal, of course, have 10 characters.
// 2. Take the number we want to convert (n) and divide it by the number of characters (c). You will get the result of 
//      division (d) and a rest of division as integer (r).
// 3. Map the rest of this division (r) into characters. In our case you can use following mapping:
//      0 => A
//      1 => B
//      2 => C
// 4. Result of division (d) is our new number which you should use for step 2 as a (n)
// 5. Repeat this until result of division (d) is 0
// 6. Reverse the order of letters that you got from mapping in step 3
// 
// Good luck, the future of humanity is in your hands now!

exports.translate = function(number) {
    //TODO implement me
    // decimal => 0 1
    // hex 0 - 9 a -f

    //num c => 20
}


let translatee = function (num) {
    
}

console.log(translatee(22)) //CBB