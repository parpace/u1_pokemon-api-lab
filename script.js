const getPokemon = async () => {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    console.log(pokemon)
}
getPokemon()

let button = document.querySelector("#btn")

button.addEventListener('click', async (event) => {
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage1 = document.querySelector("#pokemonImage1")
    let pokemonImage2 = document.querySelector("#pokemonImage2")
    let ability1 = document.querySelector("#ability1")
    let ability2 = document.querySelector("#ability2")
    let hp = document.querySelector("#hp")
    let attack = document.querySelector("#attack")
    let defense = document.querySelector("#defense")
    let speed = document.querySelector("#speed")
    let baseStats = document.querySelector(`.baseStats`)
    let abilities = document.querySelector(`.abilities`)

    let textInput = document.querySelector("#searchBar").value.toLowerCase()

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)

    let abilitiesName1 = response.data.abilities[0].ability.name
    let abilitiesName2 = response.data.abilities[1].ability.name
    let hpValue = response.data.stats[0].base_stat
    let attackValue = response.data.stats[1].base_stat
    let defenseValue = response.data.stats[2].base_stat
    let speedValue = response.data.stats[5].base_stat
    
    pokemonName.innerText = response.data.name
    pokemonImage1.src = response.data.sprites.front_default
    pokemonImage2.src = response.data.sprites.back_default
    ability1.innerText = abilitiesName1
    ability2.innerText = abilitiesName2
    hp.innerText = `Hit-points: ${hpValue}`
    attack.innerText = `Attack: ${attackValue}`
    defense.innerText = `Defence: ${defenseValue}`
    speed.innerText = `Speed: ${speedValue}`
    baseStats.innerText = `Base Stats`
    abilities.innerText = `Abilities`
})

