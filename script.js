window.onload = () => {

    let card = document.querySelector("#card");
    let cvc = document.querySelector("#cvc");
    let amount = document.querySelector("#amount");
    let fname = document.querySelector("#fname");
    let lname = document.querySelector("#lname");
    let city = document.querySelector("#city");
    let state = document.querySelector("#state");
    let postalcode = document.querySelector("#postalcode");
    let message = document.querySelector("#message");


    let alert = document.querySelector("#alert");
    let form = document.querySelector("FORM");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let errorCounter = 0;

        if (card.value == "") {
            card.classList.add("inputerror");
            errorCounter++;
        }
        else {
            card.classList.remove("inputerror");
        }

        if (cvc.value == "") {
            cvc.classList.add("inputerror");
            errorCounter++;
        }
        else {
            cvc.classList.remove("inputerror");
        }
        if (amount.value == "") {
            amount.classList.add("inputerror");
            errorCounter++;
        }
        else {
            amount.classList.remove("inputerror");
        }
        if (fname.value == "") {
            fname.classList.add("inputerror");
            errorCounter++;
        }
        else {
            fname.classList.remove("inputerror");
        }
        if (lname.value == "") {
            lname.classList.add("inputerror");
            errorCounter++;
        }
        else {
            lname.classList.remove("inputerror");
        }
        if (city.value == "") {
            city.classList.add("inputerror");
            errorCounter++;
        }
        else {
            city.classList.remove("inputerror");
        }
        if (state.value == "Pick a state") {
            state.classList.add("inputerror");
            errorCounter++;
        } else {
            state.classList.remove("inputerror");
        }
        if (postalcode.value == "") {
            postalcode.classList.add("inputerror");
            errorCounter++;
        }
        else {
            postalcode.classList.remove("inputerror");
        }
        if (message.value == "") {
            message.classList.add("inputerror");
            errorCounter++;
        }
        else {
            message.classList.remove("inputerror");
        }
        
        let alertsuccess = document.querySelector("#alertsuccess");
        if(errorCounter ==0) {
            alertsuccess.classList.add("d-inline");
            alert.classList.remove("d-inline");
        }
        else {
            alertsuccess.classList.remove("d-inline");
            alert.classList.add("d-inline");
        }
        


    });




}