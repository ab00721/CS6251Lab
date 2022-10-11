function validateForm() {
    if (document.forms[0].myEmail.value == "") {
        alert("Please enter an e-mail address.");
        return false;
    }
    return true;
}