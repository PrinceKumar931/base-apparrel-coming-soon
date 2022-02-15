const alert = document.querySelector(".alert");
const email = document.querySelector(".email");
const eIcon = document.querySelector(".eIcon");

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value.match(mailformat)) {
        alert.innerText = "";
        eIcon.classList.remove("addErrorIcon");
        return true;
    } else {
        alert.innerText = "Please provide a valid email";
        eIcon.classList.add("addErrorIcon");
        return false;
    }
}
