const buttonPokemon = document.getElementById('apicall');
const listGenres = document.querySelector('ul');
async function getPokemonData() {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/1/`;
    try {
        const res = await fetch(apiUrl);
        return res.json();
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}
const fetchPokemonData = async () => {
    const result = await getPokemonData();
    return result;
};
buttonPokemon.addEventListener('click', () => {
    fetchPokemonData().then(data => {
        console.log(data);
        const listItemPokemon = "Pokemon Name: " + data.forms[0].name + ", Weight: " + data.weight;
        var node = document.createElement("LI");
        var textnode = document.createTextNode(listItemPokemon);
        node.appendChild(textnode);
        listGenres.appendChild(node); 
    });
});
