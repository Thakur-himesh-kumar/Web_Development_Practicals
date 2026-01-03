// ===== USER DEFINED FUNCTIONS =====
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Function calls
console.log("Function Output:");
console.log("Add =", add(5, 3));
console.log("Multiply =", multiply(4, 2));


// ===== var, let, const SCOPE =====
console.log("\nScope Output:");

// Global scope
var x = 10;
let y = 20;
const z = 30;

function scopeTest() {
    var x = 100;
    let y = 200;
    const z = 300;

    console.log("\nInside Function:");
    console.log("var x =", x);
    console.log("let y =", y);
    console.log("const z =", z);

    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;

        console.log("\nInside Block:");
        console.log("var a =", a);
        console.log("let b =", b);
        console.log("const c =", c);
    }

    console.log("\nAfter Block:");
    console.log("var a =", a);
}

scopeTest();

console.log("\nOutside Function:");
console.log("var x =", x);
console.log("let y =", y);
console.log("const z =", z);
