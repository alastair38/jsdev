var form = document.forms.hero;

form.addEventListener("submit", makeHero, false); // event listener will call the makeHero() function

form.name.addEventListener("blur", validateInline, false);

function validateInline(event) {
    var firstLetter = form.name.value[0]; // get first letter of the name input field
    var label = document.querySelector("label[for='name']"); // get reference to name input label
    if (firstLetter.toUpperCase() === "X") {
        label.classList.add("error");
        label.textContent = "Your name is not allowed to start with X!";
    } else { // the error has not happened or has been fixed
        label.classList.remove("error");
        label.textContent = "Name:";
        }
}

function makeHero(){

    event.preventDefault(); // this prevents the form from being submitted

    var hero = {} // create an empty object for the form data being entered

    hero.name = form.name.value; // create a name property based on the name input field's value
    hero.realName = form.realName.value;
    hero.powers = [];
    for (i=0; i < form.powers.length; i++){
        if(form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    for (i=0; i < form.type.length; i++){
        if(form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;


    alert(JSON.stringify(hero)); // converts hero object to JSON string and displays in alert

}
