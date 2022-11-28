

//Access the body tag to append divs
let body = document.body;
console.log(body);

//Create the main div container and append it to the body
const results = document.createElement('div');
results.id = "results";
body.append(results);

//Declare Drop button and add event listener
const dropButton = document.createElement("button");
dropButton.className = "drop";
dropButton.innerHTML = "Get Fishy";
results.append(dropButton);

dropButton.addEventListener("click", () => {
    window.location = `https://www.youtube.com/shorts/B4su9o1vgR8`;
})

//Create other divs to populate the results container
const titleBox = document.createElement("div");
titleBox.className = "title";
titleBox.innerText = "Enter A Fish Species:";
results.append(titleBox);

const inputSearch = document.createElement("input");
inputSearch.className = "input-box";
results.append(inputSearch);

const searchButton = document.createElement("button");
searchButton.className = "search";
searchButton.innerText = "Search";
results.append(searchButton);

const calories = document.createElement('div');
calories.className = "calories";
results.append(calories);

const photo = document.createElement("img");
photo.className = "photo";
results.append(photo);

const carbs = document.createElement("div");
carbs.className = "carbs";
results.append(carbs);


//Declare dietary information 
const cholesterol = document.createElement('div');
cholesterol.className = 'cho';
results.append(cholesterol);

const fat = document.createElement('div');
fat.className = 'fat';
results.append(fat);

const protein = document.createElement('div');
protein.className = "protein";
results.append(protein);

const servings = document.createElement('div');
servings.className = "servings";
results.append(servings);

const sodium = document.createElement('div');
sodium.className = "sodium";
results.append(sodium);

const fishName = document.createElement('div');
fishName.className = 'fish-name';
results.append(fishName);



const searchText = inputSearch;

searchButton.addEventListener("click", () => {
    $.get(`https://www.fishwatch.gov/api/species/${searchText.value}`, (data) => {
// let results = JSON.parse(data);
const resultData = data[0];
console.log(resultData);
console.log(searchText.value);

cholesterol.innerText = `Cholesterol: ${resultData.Cholesterol}`;
cholesterol.style.border = "solid 4px white";

calories.innerText = `Calories: ${resultData.Calories}`;
calories.style.border = "solid 4px white";

carbs.innerText = `Carbohydrate: ${resultData.Carbohydrate}`;
carbs.style.border = "solid 4px white";

fat.innerText = `Fat: ${resultData["Fat, Total"]}`;
fat.style.border = "solid 4px white";

protein.innerText = `Protien: ${resultData.Protein}`;
protein.style.border = "solid 4px white";

sodium.innerText = `Sodium: ${resultData.Sodium}`;
sodium.style.border = "solid 4px white";

servings.innerText = `Serving Size: ${resultData.Servings}`;
servings.style.border = "solid 4px white";

fishName.innerText = `${searchText.value} Dietary Information:`;


photo.setAttribute("src", resultData["Image Gallery"][0].src);
photo.style.border = "solid 5px white";


//Click through Photos
let nextPhoto = 1;
photo.addEventListener("click", () => {
    photo.setAttribute("src", resultData["Image Gallery"][nextPhoto].src);
    
    if(nextPhoto >= resultData["Image Gallery"].length -1){
alert("Bon Apeptite!");
    }
    nextPhoto++;
})


    })
   
})




// const randomButton = document.createElement("button");
// randomButton.className = "random";
// randomButton.innerText = "Random";
// const randomFish = 
// ['Acadian Redfish', 'Alaska Pollock', 'Alaska Snow Crab',
//  'American Lobster', 'Arrowtooth Flounder', 'Atlantic Bigeye Tuna',
//  'Atlantic Blacktip Shark', 'Atlantic Chub Mackerel', 'Atlantic Cod',
//  'Atlantic Mackerel', 'Atlantic Mahi Mahi', 'Atlantic Northern Shrimp',
//  'Atlantic Common Thresher Shark', 'Atlantic Halibut', 'Atlantic Herring',
//  'Atlantic Pollock', 'Atlantic Salmon', 'Atlantic Sea Scallop'];
// results.append(randomButton);




