import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/
document.querySelector("#populationBigger").addEventListener("click", () => {

   const bt500 = data.filter(city => city.population > 500000);
   createTableElements(bt500,"allcities");

});
// Land Area Button

document.querySelector("#landAreaLess").addEventListener("click",() => {
   const la1000 = data.filter(city => city.landArea <= 1000);
   createTableElements(la1000,"allcities");

});

// Population Less Than 100 000 

document.querySelector("#isPopulationLess").addEventListener("click", () => {
    const lt100000 = data.some(city => city.population <=100000);
    if(lt100000) {
        alert("YES");
    }else {
        alert("NO");
    }
});

// Land Area Bigger Than 100

document.querySelector("#isLandBigger").addEventListener("click", () => {
    const lt100000 = data.some(city => city.population <=100000);
    if(lt100000) {
        alert("YES");
    }else {
        alert("NO");
    }
});

const cityName = data.map(cityName => cityName.name);
const citySelect = document.querySelector(".custom-select");
cityName.forEach((element) => {
    
    const cityCreate = document.createElement("option");
    cityCreate.setAttribute("value",element);
    cityCreate.textContent = element;
    citySelect.appendChild(cityCreate);
    
});

// Found Item 

citySelect.addEventListener("change", (e) => {
    const selectCities = data.filter(cities => e.target.value === cities.name);
    createTableElements(selectCities, "singlecity");
});

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */


