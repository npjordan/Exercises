var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = "Nicholas";
    var lastName = "Jordan";
    console.log(firstName);
    console.log(lastName);
    var p1_fullName = firstName + " " + lastName;
    console.log(p1_fullName);
    document.getElementById("p1_fullName").innerHTML = p1_fullName;
    if (firstName.indexOf('Nicholas')){
        var p1_valid = true}else{
        var p1_valid = false};
    if (lastName.indexOf('Jordan')){
        var p1_valid = true}else{
        var p1_valid = false};
    console.log(p1_valid);
    document.getElementById("partOne").innerHTML = p1_valid;
    var p1_fullNameLength = p1_fullName.length;
    console.log(p1_fullNameLength);
    document.getElementById("p1_fullNameLength").innerHTML = p1_fullNameLength;




    // Part 2
    var p2_email = "nicholas.jordan.10@gmail.com";
    console.log(p2_email);
    document.getElementById("p2_email").innerHTML = p2_email;
    var p2_valid = (email.indexOf('@') > -1);
    console.log(p2_valid);
    document.getElementById("p2_valid").innerHTML = p2_valid;
    var p2_emailLength = emailAddress.length;
    console.log(emailLength);
    document.getElementById("p2_emailLength").innerHTML = p2_emailLength;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    var p3_number = randomNumber;
    console.log(p3_number);
    document.getElementById("p3_number").innerHTML = p3_number;
    p3_valid = true;
    p3_valid = false;
    if (isNan(p3_number) = false){p3_valid = true
    }else{p3_valid = false
    };
    console.log(p3_valid);
    document.getElementById("p3_valid").innerHTML = p3_valid;



    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    arrayItems.push("arrayInput");
    var p4_arrayLength = arrayItems.length;
    console.log(p4_arrayLength);
    var p4_valid = return.arrayItems;
    console.log(p4_valid);
    document.getElementById("p4_arrayLength").innerHTML = p4_arrayLength;
    document.getElementById("p4_valid").innerHTML = p4_valid;
    
    











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

