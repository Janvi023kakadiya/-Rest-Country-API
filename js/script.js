async function getCountryData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    data.forEach((country) => {
        const show = document.getElementById("Country");
        show.innerHTML += `
        <tr>
            <td><img src="${country.flags.png}" alt="${country.name.common} Flag"></td>
            <td>${country.name.common}</td>
            <td>${country.capital ? country.capital[0] : 'N/A'}</td>
            <td>${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
            <td>${country.coatOfArms.png ? `<img src="${country.coatOfArms.png}" alt="${country.name.common} Coat of Arms">` : 'N/A'}</td>
        </tr>`;
    });
}

getCountryData();