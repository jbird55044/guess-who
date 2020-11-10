console.log('Here are all the available people:', people);
let thePick = 'empty';

$(document).ready (letsGo);


function letsGo () {

    randomizeArray(people);   //randomizes placement of people
    updatePicsInDom ();
    $('#randomPickButtonId').on ('click', pickRandomName)
    $('.pictureAreaClass').on ('click', '.pictureClass', peoplePicker);
}


function updatePicsInDom () {
    let html = '';
    $('.pictureAreaClass').empty();
    for ( let i = 0; i < people.length; i += 1 ) {
    html = $(`<img class="pictureClass" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">`);
    html.data('people', people[i]);
    $('.pictureAreaClass').append(html);
    };
} // end of updatePicsInDom fn

function pickRandomName () {
    let randomNumber = randomNumberGen(0, (people.length - 1), 0);
    thePick = people[randomNumber].name;
    alert (`Pick the picture of: ${thePick}`);
    $('#nameToBeFoundId').empty();
    $('#nameToBeFoundId').append(`-->The person you are looking for is: ${thePick}`);
} // end of pickRandomName fn

function randomNumberGen (min, max, fixed) {
    let rn = 0;
    rn=((Math.random() * (max - min))+ min).toFixed(fixed);
    return +rn;
}  // end of randomNumberGen fn

function randomizeArray (arrayToBeRandomized) {
    // help from: https://javascript.info/task/shuffle
    arrayToBeRandomized.sort ( () => Math.random() -0.5);
}


function peoplePicker () {
    let whoWasPicked = $(this).data('people').name; 
    if ( thePick === 'empty' ) {
        alert (`'First select the 'Display a Random Name' Button`)
        return
    } else if ( thePick === whoWasPicked) {
        alert (`You nailed it by picking ${whoWasPicked}`)
        thePick = 'empty';
        $('#nameToBeFoundId').empty()
        randomizeArray(people);   //randomizes placement of people
        updatePicsInDom();
    } else {
        alert ('So Sorry, you missed this one, try again')
    }
} // end of peoplePicker fn