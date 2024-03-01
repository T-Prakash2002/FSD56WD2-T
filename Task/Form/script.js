function submitForm() {
    


    let fnameinput=document.getElementById('fname');
    let lnameinput=document.getElementById('lname');
    let genderinput=document.getElementsByName('gender');
    let addressinput=document.getElementById('address');
    let pincodeinput=document.getElementById('pinc');
    let choice=document.getElementById('food-choice');
    let stateinput=document.getElementById('state');
    let countryinput=document.getElementById('country');


    let firstName = fnameinput.value;
    let lastName = lnameinput.value;
    let address = addressinput.value;
    let pincode = pincodeinput.value;
    let gender = SelectedValue(genderinput);
    let foodChoice = choice.value;
    let state = stateinput.value;
    let country = countryinput.value;

    function SelectedValue(genderinput) {
        for (let i = 0; i < genderinput.length; i++) {
            if (genderinput[i].checked) {
                return genderinput[i].value;
            }
        }
    }


    let table=document.getElementById('result-table');

    let newRow=table.insertRow(1);

    let c1 = newRow.insertCell(0);
    let c2 = newRow.insertCell(1);
    let c3 = newRow.insertCell(2);
    let c4 = newRow.insertCell(3);
    let c5 = newRow.insertCell(4);
    let c6 = newRow.insertCell(5);
    let c7 = newRow.insertCell(6);
    let c8 = newRow.insertCell(7);

    c1.innerHTML = firstName;
    c2.innerHTML = lastName;
    c3.innerHTML = address;
    c4.innerHTML = pincode;
    c5.innerHTML = gender;
    c6.innerHTML = foodChoice;
    c7.innerHTML = state;
    c8.innerHTML = country;


    fnameinput.value=""
    lnameinput.value=""
    addressinput.value=""
    pincodeinput.value=""
    choice.value=""
    stateinput.value=""
    countryinput.value=""


}           

