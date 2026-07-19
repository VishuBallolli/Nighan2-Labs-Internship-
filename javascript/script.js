function greet(name) {
    return "Hello, " + name + "!";
}

function add(a, b) {
    return a + b;
}

function showResult() {

    document.getElementById("greet").innerHTML = greet("Vishwanath");

    document.getElementById("sum").innerHTML =
    "Sum = " + add(10, 20);

}