///////////////////////////////
// Constants & DOM Elements //
/////////////////////////////

const monthsArray = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
    "Juli", "Augustus", "September", "Oktober", "November", "December"];

const button = document.getElementById("addDater");
const nameInput = document.getElementById("name");
const bDaySelect = document.getElementById("bDaySelect");
const bMonthSelect = document.getElementById("bMonthSelect");
const bYearSelect = document.getElementById("bYearSelect");
const datersList = document.getElementById("datersList");



////////////////////
// Website Logic //
//////////////////

// Logic to generate the select options for birthDay
const generateDays = () => {
    for (let i = 1; i <= 31; i++) {
        // Create an option & set its value + text
        let option = createSelectOption(i.toString());

        // Add the day option to the bDaySelect
        bDaySelect.add( option );
    }
};

// Logic to generate the select options for birthMonth
const generateMonths = () => {
    for (let i = 0; i < monthsArray.length; i++) {
        // Create an option & set its value + text
        let option = createSelectOption(monthsArray[i]);

        // Add the day option to the bDaySelect
        bMonthSelect.add( option );
    }
};

// Logic to generate the select options for birthYear
const generateYears = () => {
    // Set a start year being an age of at least 18 years old
    const startYear = new Date().getFullYear() - 18;
    const endYear = new Date().getFullYear() - 118;

    for (let i = startYear; i >= endYear; i--) {
        // Create an option & set its value + text
        let option = createSelectOption(i.toString());

        // Add the day option to the bDaySelect
        bYearSelect.add( option );
    }
};

// Logic to handle the onChange of an input
const checkForEmptyNameInput = () => {
    // Check to see if any of the fields are empty
    nameInput.value ? button.disabled = false : button.disabled = true;
};

// Logic to add a dater
const addDater = () => {
    // Fetch the values from the HTML elements
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const name = nameInput.value;
    const birthDay = bDaySelect.value;
    const birthMonth = bMonthSelect.value;
    const birthYear = bYearSelect.value;

    // Create all the items
    // .. Parent elements
    let listItem = document.createElement('li');
    let outerDiv = document.createElement('div');

    // .. listItem content
    let avatar = document.createElement('div');
    let image = document.createElement('img');

    let info = document.createElement('div');
    let infoHeader = document.createElement('h1');
    let infoRuler = document.createElement('hr');
    let infoBirth = document.createElement('h3');

    // Configure the created elements
    let imageSrc = createAvatarURL(name, gender);
    setAttributes(image, {src: imageSrc, alt: name, width: '75', height: '75'});

    infoHeader.innerHTML = name;
    infoBirth.innerHTML = generateBdayInfo(birthDay, birthMonth, birthYear);

    // Apply styles to the elements
    outerDiv.classList.add("list");
    avatar.classList.add("avatar");
    info.classList.add("info");

    if (gender === "male") {
        outerDiv.classList.add("block","grow","male")
    } else if (gender === "female") {
        outerDiv.classList.add("block","grow","female")
    } else {
        outerDiv.classList.add("block","grow","transgender")
    }

    // Add Avatar & Textual info
    avatar.appendChild(image);
    appendChildren(info, [infoHeader, infoRuler, infoBirth]);
    appendChildren(outerDiv, [avatar, info]);

    // Fill list-item
    listItem.appendChild(outerDiv);

    // Add the listItem to the list
    datersList.appendChild(listItem);
};

// Logic to generate all Data & activate the logic to add people
const createPageFunctionality = () => {
    // Generate select list options
    generateDays();
    generateMonths();
    generateYears();

    // Props
    button.disabled = true;

    // Eventlistener(s)
    button.addEventListener("click", addDater);
    nameInput.addEventListener("change", checkForEmptyNameInput)
};



///////////////////
// Helper Logic //
/////////////////

// Logic to generate a selectOption
const createSelectOption = (value) => {
    // Create an option & set its value + text
    let option = document.createElement( 'option' );
    option.value = option.text = value;

    // Return the select option
    return option;
};

// Logic to set multiple Attributes at once
const setAttributes = (htmlElement, attributes) => {
    Object.keys(attributes).forEach(key => {
        htmlElement.setAttribute(key, attributes[key])
    });
};

// Logic to append multiple children at once
const appendChildren = (htmlElement, children) => {
    children.forEach(child => {
        htmlElement.appendChild(child)
    })
};

// Logic to get the birthDay in dd/mm/yyyy
const generateBdayInfo = (day, month, year) => {
    let monthInt = monthsArray.indexOf(month) + 1;
    let dayInt;
    let fullDate;

    // Format text according to result (preceding 0 if needed)
    monthInt < 10 ? monthInt = `0${monthInt}` : null;
    parseInt(day) < 10 ? dayInt = `0${day}` : dayInt = day;

    // Generate the full date
    fullDate = `${dayInt}/${monthInt}/${year}`;

    return fullDate;

};

// Logic to generate the Avatar URL (For API use: check https://robohash.org/)
const createAvatarURL = (name, gender) => {
    // Initialize an empty set
    let set;

    // Choose a different avatar set per gender
    if(gender === "male") {
        set = "set2";
    } else if (gender === "female" ){
        set = "set4";
    } else {
        set = "set3";
    }

    // Return the full robohash avatar url (url can not contain spaces)
    return `https://robohash.org/${name.replace(/\s/g, '')}?set=${set}&bgset=bg1`
};



/////////////////////////
// Main functionality //
///////////////////////

createPageFunctionality();
