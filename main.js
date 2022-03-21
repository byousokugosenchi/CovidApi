async function fetchCovidAPI() {
    let response = await fetch('https://corona.lmao.ninja/v2/countries/');
    let responseJson = await response.json();
    document.getElementById('tb-2').appendChild(renderCountries(responseJson));    //In ra các quốc gia
    searchCountry(responseJson);                                                   // Hàm tìm kiếm 
    return responseJson;
}

function renderCountries(listCountries) {
    let tbody = document.createElement('tbody');

    for (let i = 0; i < listCountries.length; i++) {
        let tableRow = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            switch (j) {
                case 0:
                    let countryName_data = document.createElement('td');
                    let name = document.createElement('span');
                    name.innerHTML = listCountries[i].country;
                    countryName_data.appendChild(name);

                    let flag = document.createElement('img');
                    flag.src = listCountries[i].countryInfo.flag

                    countryName_data.appendChild(flag);
                    countryName_data.classList.add('country')

                    tableRow.appendChild(countryName_data)
                    break

                case 1:
                    let totalCases = document.createElement('td');
                    totalCases.innerText = listCountries[i].cases;
                    totalCases.classList.add('case')                    //tô màu text
                    tableRow.appendChild(totalCases);
                    break

                case 2:
                    let todayCases = document.createElement('td');
                    todayCases.innerText = listCountries[i].todayCases;
                    tableRow.appendChild(todayCases);
                    break

                case 3:
                    let deathCases = document.createElement('td');
                    deathCases.innerText = listCountries[i].deaths;
                    deathCases.classList.add('deaths')                  //tô màu text
                    tableRow.appendChild(deathCases);
                    break
                case 4:
                    let todayDeath = document.createElement('td');
                    todayDeath.innerText = listCountries[i].todayDeaths;
                    tableRow.appendChild(todayDeath);
                    break
                case 5:
                    let recoverCases = document.createElement('td');
                    recoverCases.innerText = listCountries[i].recovered;
                    recoverCases.classList.add('recovered')             //tô màu text
                    tableRow.appendChild(recoverCases);
                    break
                case 6:
                    let activeCases = document.createElement('td');
                    activeCases.innerText = listCountries[i].todayRecovered;
                    tableRow.appendChild(activeCases);
                    break
            }

        }
        tbody.appendChild(tableRow);
    }
    return tbody
}

function searchCountry(listCountries) {
    let tbody2 = ""
    let newArr = [];
    let objCountry
    let clickButton = document.getElementById('xem')
    clickButton.onclick = function () {
        let inputValue = document.getElementById('myinput').value;
        for (let i = 0; i < listCountries.length; i++) {
            if (listCountries[i].country.indexOf(inputValue) !== -1) {
                objCountry = listCountries[i];
                newArr.push(objCountry);
            }
        }

        tbody2 = renderCountries(newArr)

        document.getElementById('tb-1').appendChild(tbody2);
    }

}


fetchCovidAPI();
