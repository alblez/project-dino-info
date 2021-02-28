
const userForm = document.getElementById('dino-compare');
const resultGrid = document.getElementById('grid');
const compareBtn = document.getElementById('btn');
// Create Dino Constructor

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form
const dataForm = (function () {
    let feet, inches, weight = 0;
    let name, diet = '';

    function getElementValue(inputName) {
        let input = document.getElementById(inputName).value;
        const numberTypes = ['feet', 'inches', 'weight'];

        if (input.trim() === '') {
            alert(`${inputName} can not be empty`);
            // throw new Error(`${inputName} can not be empty`);
        }


        if (numberTypes.includes(inputName)) {
            input = parseInt(input);
            if (!Number.isInteger(input)) {
                alert(`${inputName} must be a number`);
                // throw new Error(`${inputName} must must be a number`);
            }

            if (!input > 0) {
                console.log('included! ' + parseInt(input));
                alert(`${inputName} must be highter than zero`);
                // throw new Error(`${inputName} must be highter than zero`);
            }
        }

        return input;
    }

    name = getElementValue('name');
    feet = getElementValue('feet');
    inches = getElementValue('inches');
    weight = getElementValue('weight');
    diet = getElementValue('diet');


    return {
        name,
        feet,
        inches,
        weight,
        diet
    };
})

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
function toggleFormGrid() {
    if (resultGrid.childNodes.length === 0) {
        userForm.style.display = "none";
    } else {
        userForm.style.display = "block";
    }
}

// On button click, prepare and display infographic
compareBtn.addEventListener("click", function (e){
    console.log(dataForm());
    toggleFormGrid();
});

//Load dino json
fetch('data/dino.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
  }).then(data => {



  }).catch(error => {
    alert(error.message);
  });

function Animal() {

}
