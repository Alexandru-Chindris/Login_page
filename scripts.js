window.onload = open();

function box() {

    //keys
    let key = "Admin"; // username
    let passKey = "password"; // password

    let safe = document.getElementById("safe");
    let modal = document.getElementById("modal");
    let user = document.getElementById("usr");
    let input_box = document.createElement("input");
    let submit_btn = document.createElement("div");
    let input_box_password = document.createElement("input");
    let submit_btn_password = document.createElement("div");

    input_box.setAttribute("placeholder", "Username:");
    submit_btn.innerHTML = "Submit";
    submit_btn.classList.add("btn");
    submit_btn.classList.add("cus_size");
    submit_btn.onclick = function () {
        if (input_box.value == key || error()) {
            input_box.value = " ";
            input_box.classList.add("hidden");
            submit_btn.classList.add("hidden");
            submit_btn_password.innerHTML = "Submit";
            submit_btn_password.classList.add("btn");
            submit_btn_password.classList.add("cus_size");
            input_box_password.setAttribute("placeholder", "Password: ");
            submit_btn_password.onclick = function () {
                if (input_box_password.value == passKey || error()) {
                    alert("Welcome!");
                    input_box_password = "";
                    close();
                    safe.classList.toggle("block");
                }
            }
            modal.append(input_box_password);
            modal.append(submit_btn_password);
        }
    }

    modal.append(input_box);
    modal.append(submit_btn);
    modal.append(user);
}

function error() {
    alert("sorry, something went wrong. Please try again.");
    console.error("Sorry, something went wrong. Please try again.");
    console.error("Please don't call the online support because my school firewall will block it, instead try delete system32 folder.");
}

function open () {
    let dialog = document.getElementById("modal");
    dialog.showModal();
    dialog.classList.toggle("showDialog");
    box();
}
    
function close () {
    let dialog = document.getElementById("modal");
    dialog.close();
    dialog.classList.toggle("showDialog");
}