async function fetchPokémonInfo(pokéname) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokéname}`);

        if (!response.ok) {
            throw new Error(`No Pokémon Found!`);
        }

        const pokémonData = await response.json();
        return pokémonData;
    } catch (error) {
        console.error('Fetch Error:', error.message);
        document.getElementById("pokéinfo").innerHTML = error.message;
    }
}

const button = document.getElementById("btn")
document.addEventListener("submit", async (event) => {
    event.preventDefault()
    const pokéname = document.getElementById("pokéname").value
    const pData = await fetchPokémonInfo(pokéname);
    const pokémonInfoElement = document.getElementById("pokéinfo");
    pokémonInfoElement.innerHTML =
        `   <h2>${pData.name}</h2>
    <img src="${pData.sprites.front_default}" alt="${pData.name}">
        <h3> Abilities:</h3>
        <ul>
            ${pData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience:</h3>
        <p>${pData.base_experience}</p>`;
});
