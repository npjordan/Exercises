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
    if (firstName.indexOf('Nicholas')){
        var p1_valid = true}else{
        var p1_valid = false};
    if (lastName.indexOf('Jordan')){
        var p1_valid = true}else{
        var p1_valid = false};
    var p1_fullNameLength = p1_fullName.length;
    console.log(p1_fullNameLength);




    // Part 2
    var emailAddress = "nicholas.jordan.10@gmail.com";
    console.log(emailAddress);
    var p2_valid = (email.indexOf('@') > -1);
    console.log(p2_valid);
    var p2_emailLength = emailAddress.length;
    console.log(emailLength);

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    var p3_number = randomNumber;
    console.log(p3_number);
    if (isNan(p3_number) = false){p3_number = true
    }else{p3_number = false
    };



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

