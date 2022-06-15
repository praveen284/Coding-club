let formData = {
    name: "",
    email: "",
    gender: ""
};


let genderMale = document.getElementById("genderMale");
genderMale.addEventListener("change", function (event) {
    formData.gender = event.target.value;
})

let genderFemale = document.getElementById("genderFemale");
genderFemale.addEventListener("change", function (event) {
    formData.gender = event.target.value;
})



let myName = document.getElementById("name");
let nameErrorMsg = document.getElementById("nameErrorMsg");
myName.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        nameErrorMsg.innerHTML = "Required *";
    } else {
        nameErrorMsg.innerHTML = "";
    }
    formData.name = event.target.value;
});

let myEmail = document.getElementById("email");
let emailErrorMsg = document.getElementById("emailErrorMsg");
myEmail.addEventListener("blur", function (event) {
    if (event.target.value === "") {
        emailErrorMsg.innerHTML = "Required *";
    } else {
        emailErrorMsg.innerHTML = "";
    }
    formData.email = event.target.value;
});



let myForm = document.getElementById("form");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (formData.name !== "") {
        if (formData.email === "") {
            emailErrorMsg.innerHTML = "Required *";
        } else {
            window.location.href = "home.html"
            myName.value = "";
            myEmail.value = "";
        }
    } else {
        nameErrorMsg.innerHTML = "Required *";
    }
}
)