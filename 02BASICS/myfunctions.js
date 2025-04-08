function addTwo(num) {
    return num + 2;
}
addTwo(5);
var person = function (name, email, isPaid) { };
person("suyog", "s@s.com", false);
function addString(name) {
    return name;
}
addString("Suyog");
var person2 = function (name) {
    return name;
};
person2("suyog");
var person3 = function (name) {
    console.log(name);
};
person3("suyog");
var errorMsg = function (err) {
    throw new err;
};
errorMsg("suyog");
