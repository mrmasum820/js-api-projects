const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'capital not found'}</p>
            <button onclick="loadCountryDetails('${country.cca2
            }')">See details</button>
        `
        countriesContainer.appendChild(div);
    })
}

const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url).then(res => res.json()).then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = ``;
    const div = document.createElement('div');
    div.innerHTML = (`
        <h3>Name: ${country.name.common}</h3>
        <img src="${country.flags.png}" />
    `)

    countryContainer.appendChild(div);
}

loadCountries();