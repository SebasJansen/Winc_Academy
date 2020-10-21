const countryButton = document.getElementById('countryList');
const steenbokVrouwenButton = document.getElementById('steenbokVrouwen');
const oldCardsButton = document.getElementById('oldCreditcards');
const countryHeadCountButton = document.getElementById('peopleCountByCountry');
const averageAgeButton = document.getElementById('peopleAverageAge');
const matchmakingButton = document.getElementById('matchmaking');
const list = document.querySelector('ul');
console.log(randomPersonData);
const clearList = () => {
    list.innerHTML = "";
}
const addArrayDataToList = (array) => {
    clearList();
    array.forEach(element => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(element);
        node.appendChild(textnode);
        list.appendChild(node);
    });
}
const addObjectArrayDataToList = (object) => {
    clearList();
    object.forEach(x => {
        const listItems = `Name: ${x.Name}, Surname: ${x.Surname}, Phone: ${x.Phone}, Creditcard: ${x.Creditcard}, Expiration: ${x.Expiration}`;
        var node = document.createElement("LI");
        var textnode = document.createTextNode(listItems);
        node.appendChild(textnode);
        list.appendChild(node);
    });
}
const addJSONObjectDataToList = (object) => {
    clearList();
    object.forEach(x => {
        console.log(x);
        var node = document.createElement("LI");
        var textnode = document.createTextNode(listItems);
        node.appendChild(textnode);
        list.appendChild(node);
    });
}
// LandenLijst
const showAllCountries = (randomPersonData) => {
    let countryList = [];
    randomPersonData.forEach(element => {
        if (countryList.includes(element.region)) {
            return;
        } else {
            countryList.push(element.region);
        }
    });
    addArrayDataToList(countryList);
}
countryButton.addEventListener("click", function(){
    showAllCountries(randomPersonData)
});
// Steenbokvrouwen
const checkSteenBok = (dmyString) => {
    const day = dmyString.slice(0,2);
    const month = dmyString.slice(3,5);
    if (parseInt(month) == 12 && parseInt(day) >= 22 || parseInt(month) == 1 && parseInt(day) <= 19) {
        return true;
    } else {
        return false;
    }
}
const getPersons = (randomPersonData) => {
    let steenBokVrouwen = [];
    randomPersonData.forEach(element => {
        if (element.gender === "female" && parseInt(element.birthday.dmy.slice(-4)) < 1990 && checkSteenBok(element.birthday.dmy) == true) {
            steenBokVrouwen.push(`${element.name} ${element.surname} ${element.photo}`);
        } else {
            return;
        }
    });
    addArrayDataToList(steenBokVrouwen)
}
steenbokVrouwenButton.addEventListener("click", function(){
    getPersons(randomPersonData)
});
// Ouwe Creditcards
const sortByDate = (oudeCreditcards) => {
    const sortedByExpirationDate = oudeCreditcards.sort((a, b) => {
        a = a.credit_card.expiration.split('/');
        b = b.credit_card.expiration.split('/');
        return a[1] - b[1] || a[0] - b[0];
    });
    return sortedByExpirationDate;
};
const filterArrayByExpiration = (array, year) => {
    let stringThisYear = String(year);
    stringThisYear = stringThisYear.slice(-2);
    year++;
    let stringNextYear = String(year);
    stringNextYear = stringNextYear.slice(-2);
    const filteredByExpiration = array.filter(person => parseInt(person.credit_card.expiration.slice(-2)) === parseInt(stringThisYear) ||
                                                        parseInt(person.credit_card.expiration.slice(-2)) === parseInt(stringNextYear));
    return filteredByExpiration;
}
const getRelevantInfo = (array) => {
    const mappedArray = array.map(x => ({Name: x.name, Surname: x.surname, Phone: x.phone, Creditcard: x.credit_card.number, Expiration: x.credit_card.expiration}))
    return mappedArray;
}
const checkCreditcardExpiration = (randomPersonData) => {
    let oudeCreditcards = [];
    const today = new Date();
    const year = today.getFullYear();
    randomPersonData.forEach(element => {
        if (parseInt(year) - parseInt(element.birthday.dmy.slice(-4)) > 18) {
            oudeCreditcards.push(element);
        } else {
            return;
        }
    });
    const sortedPersons = sortByDate(oudeCreditcards);
    const filteredArray = filterArrayByExpiration(sortedPersons, year);
    const filteredData = getRelevantInfo(filteredArray);
    addObjectArrayDataToList(filteredData);
}
oldCreditcards.addEventListener("click", function(){
    checkCreditcardExpiration(randomPersonData)
});
// Meeste mensen
const sortByCountry = (randomPersonData) => {
    let count = {};
    randomPersonData.forEach(element => {
        count[element.region] = (count[element.region]||0) + 1;
    });
    console.log(count);
    const sortable = Object.fromEntries(
        Object.entries(count).sort(([,a],[,b]) => b-a)
    );
    const json_data = (JSON.stringify(sortable, null /*replacer function */, 4 /* space */))
    //const result = JSON.parse(json_data);
    console.log("json", json_data);
    //addJSONObjectDataToList(result);
};
countryHeadCountButton.addEventListener("click", function(){
    sortByCountry(randomPersonData)
});
sortByCountry(randomPersonData);
