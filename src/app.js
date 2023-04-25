import axios from 'axios'

const card = document.getElementById('card')
const flagImg = document.getElementById('flag-img')
const countryName = document.getElementById('country-name')
const countryAlinea1 = document.getElementById('country-alinea1')
const countryAlinea2 = document.getElementById('country-alinea2')
const countryAlinea3 = document.getElementById('country-alinea3')
const inputField = document.getElementById('country-input');
const submitForm = document.getElementById('submit-form')

async function fetchCountry(country) {
    try {
        const response = await axios.get(`https://restcountries.com/v2/name/${country}`)
        const data = response.data[0]
        const { currencies: [{name: currency}], subregion , languages: [{name : language}], population, capital, flag, altSpellings: [first, fullName, third], name} = data

        flagImg.src = `${flag}`
        countryName.textContent = `${fullName}`
        countryAlinea1.textContent = `${name} is situated in ${subregion}. It has a population of ${population} people.`
        countryAlinea2.textContent = `The capital is ${capital} and you can pay with ${currency}'s.`
        countryAlinea3.textContent = `They speak ${language}.`


        if (card.innerHTML.trim() !== '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

    } catch (e) {
        console.log(e)
    }
}

submitForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchCountry(inputField.value)
    inputField.value = ''
});