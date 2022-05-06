//Begin creating the element
/* addEventListener takes two arguments
* 1st is the TYPE of event being listened for
* 2nd is the Listener's callback arguement containing what will happen
    when an event occurs
    */

window.addEventListener('load', () => {
// define variables for classes and id that requires a click or input

    const form = document.querySelector('#submit-form');
    const input = document.querySelector('#info-input');
    const list_el = document.querySelector('#user');
    const individual = document.querySelector('individual');


//when a click is heard on form, do something  
    form.addEventListener('submit', (event) => {
//!!prevent default page refresh - was preventing the page from returning placeholder values
   // event.preventDefault();       

//define indiviual variable
    const individual = input.value;

    if(!individual) {
        alert('Please complete all fields');
        return;
    } else {
        alert('Information has been submitted!'); 
        return; 
    }

//form is refreshing even if fields are not filed in
//Do not submit form if fields are not complete 

//After Save has been submitted, return default fields(Placeholders)
 individual.value = '';
  
//------------------------------------------------------------


});
})

