var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = "Nicholas";
    var lastName = "Jordan";
    console.log(firstName);
    console.log(lastName);
    var p1_fullName = firstName + " " + lastName;
    console.log(p1_fullName)
    if (firstName > 0){
        var p1_valid = true}else{
        var p1_valid = false};
    if (lastName > 0){
        var p1_valid = true}else{
        var p1_valid = false};
    var p1_fullNameLength = p1_fullName.length;
    console.log(p1_fullNameLength);




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);











    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

