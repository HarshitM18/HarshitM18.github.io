$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Harshit Gupta"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Software Developer", "Cyber Security Analyst", "Database Administrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

function validate() {
    if(nameVal() && emailVal() && validateEmail() && phoneVal() && phonenumber() && feedbackVal() ){
        return true;
    }
    else{
        return false;
    }
}

function nameVal(){
    let input1 = document.getElementById( 'fnameValid' );
    console.log("input is ", input1);
    console.log("input.value is ", input1.value);
    let allgood1 = true;
    if(input1.value===null||input1.value===""||input1.value===undefined){
        allgood1 = false;
    }
    if( !allgood1 ) {
        alert("Please fill in first name");
    }

    return allgood1;
}

function emailVal(){
    let input = document.getElementById( 'eValid' );
    console.log("input is ", input);
    console.log("input.value is ", input.value);
    let allgood = true;
    if(input.value===null||input.value===""||input.value===undefined){
        allgood = false;
    }
    if( !allgood ) {
        alert("Please fill in email");
    }
    return allgood;
}

function phoneVal(){
    let input = document.getElementById( 'pValid' );
    console.log("input is ", input);
    console.log("input.value is ", input.value);
    let allgood = true;
    if(input.value===null||input.value===""||input.value===undefined){
        allgood = false;
    }
    if( !allgood ) {
        alert("Please fill in phone");
    }
    return allgood;
}

function feedbackVal(){
    let input = document.getElementById( 'fValid' );
    console.log("input is ", input);
    console.log("input.value is ", input.value);
    let allgood = true;
    if(input.value===null||input.value===""||input.value===undefined){
        allgood = false;
    }
    if( !allgood ) {
        alert("Please fill in feedback");
    }
    return allgood;
}

function validateEmail(){
    let emailTextBox= document.getElementById("eValid");
    let email = emailTextBox.value;
    // let emailRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');

    let emailRegEx =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// ^\+[0-9]{1,3}[ ]?\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$

    emailTextBox.style.color = "white";

    if (emailRegEx.test(email)) {
        //emailTextBox.style.backgroundColor = "green";
        return true;

    }
    else {
        //emailTextBox.style.backgroundColor = "red";
        alert("invalid email");
        return false;
    }
}


function phonenumber()
{
    let phoneNum= document.getElementById("pValid");
    let phoneNumVal = phoneNum.value;

    let phoneRegEx = /\+[0-9]{1,3}[ ]?\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    if (phoneRegEx.test(phoneNumVal)) {
        //emailTextBox.style.backgroundColor = "green";
        return true;
    }
    else {
        //emailTextBox.style.backgroundColor = "red";
        alert("invalid number");
        return false;
    }
}

function hiringCheck() {
    var w = window.innerWidth;
    if (document.getElementById("hiring").checked) {
        document.getElementById("ifHiring").style.display = "inline-block";
        if (w > 480) {
            document.querySelector(".label-hidden").style.display = "inline-block";
        } else {
            document.querySelector(".label-hidden").style.display = "none";
        }
    } else {
        document.getElementById("ifHiring").style.display = "none";
        document.querySelector(".label-hidden").style.display = "none";
    }
}
window.onload = function () {
    document.getElementById("ifHiring").style.display = "none";
    document.querySelector(".label-hidden").style.display = "none";
};
