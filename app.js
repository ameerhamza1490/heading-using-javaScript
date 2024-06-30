let heading = document.querySelector("#heading");
let inputField = document.querySelector("#inputfield");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    if (inputField.value !== "") {
        heading.innerHTML = inputField.value.toUpperCase();
        heading.style.visibility = "visible";
        document.getElementById('inputfield').value='';

    }
    else {
        alert("Please Enter some Text");
        heading.style.visibility = "hidden";
    }


})