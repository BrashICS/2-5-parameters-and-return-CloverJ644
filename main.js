/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

function square(value) {
    let answer = value**2;
}

let x = square(5);   // 5 squared is 25
console.log(x);

//Converts a value to Fahrenheit
function to_fahrenheit(celsius) {
    let f = (Math.round((celsius * 9/5) + 32));
    return f;
}

//Aaand vice-versa for Celsius!
function to_celsius(fahrenheit) {
    let c = (Math.round((fahrenheit - 32) * 5/9));
    return c;
}

//DICE TIMEEEE!!! :D
function roll_dice(qty, sides) {
    let result = qty*(Math.ceil(Math.random() * (sides)));
    return result;
}
//Wait what.
//Yeah I don't know enough to code this :(

//Dice time is over :(((
//Anyways cricle time???
function area_circle(radius) {
    let a = Math.PI*(radius**2);
    return a;
}

//And cylinder ig
function volume_cylinder(radius, height) {
    area_circle(radius);
    let area = Math.PI*(radius**2);
    let volume = Math.round(area*height);
    return volume;
}

//Extra practice time!!
//Here's the percentage,
function percent(score, total) {
    let p_dec = (score/total)*100;
    let p_rnd = Math.round(p_dec);
    console.log(`${p_rnd}%`);
    return p_dec;
}

//And hey howdy it's our buddy Pythagoreas!
function pythagorean_theorum(a, b) {
    let hypo_sqr = (a**2 + b**2);
    let hypo = Math.sqrt(hypo_sqr);
    return hypo;
}

//Rounding... Ugh >:(
//Literally hate decimals and fractions
function round(value, decimals) {
    let deci_rnd = (value* 10**decimals);
    deci_rnd = Math.round(deci_rnd) / 10**decimals
    return deci_rnd;
}
//There we go, that was a trip