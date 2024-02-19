
let number = 7;
let currentpokemon = [];


async function decision() {
    await pokerender()
    await pokemoninfo()
}


async function pokerender() {
    for (let j = number - 7; j < number; j++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${j + 1}`;
        let response = await fetch(url);
        let currenpokemon = await response.json();
        currentpokemon.push(currenpokemon)
    }
}


async function pokemoninfo() {//pokemon render
    let pokemonpng = document.getElementById('pokemonpng')
    pokemonpng.innerHTML = '';
    for (let i = 0; i < number; i++) {
        if (currentpokemon[i]['types'][1]) {//first type
            let secondtype = currentpokemon[i]['types'][1]['type']['name']
            pokemonpng.innerHTML += `<div onclick="pokemonstats(${i + 1})" class="pokemons"><div class="type">${currentpokemon[i]['types'][0]['type']['name']}<br>${secondtype}</div><b>#${i + 1}</b><div class="name">${currentpokemon[i]['name']}</div><img src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png'></div>`;
        } else {//second type
            pokemonpng.innerHTML += `<div onclick="pokemonstats(${i + 1})" class="pokemons"><div class="type">${currentpokemon[i]['types'][0]['type']['name']}</div><b>#${i + 1}</b><div class="name">${currentpokemon[i]['name']}</div><img src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png'></div>`;
        }
    }
}


async function morecards() {//+10 cards
    let numbers = number;
    number = numbers + 7;
    await pokerender()
    await pokemoninfo()
}


function pokemonstats(i) {//open pokemon specific stats
    document.getElementById('pokemonstats').classList.remove('d-none');
    let pokemonoverlay = document.getElementById('pokemonstats');
    pokemonoverlay.innerHTML = '';
    pokemonoverlay.innerHTML += `<div class="pokemonstatspng">
                                   <div onclick="closestats()" class="close"> <img src="img/icons8-close-window-64.png"></div>
                                   <div id="right" onclick="oneright(${i})" class="right"> <img src="img/right-arrow.png"></div>
                                   <div id="left" onclick="oneleft(${i})" class="left"> <img src="img/right-arrow.png"></div>
                                   <b>${currentpokemon[i - 1]['name']}#${i}</b>
                                   <div class="pictureandname"><img class="pokemonimg" src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png'></div>
                                </div>
                                <div class="pokemonstats">
                                   <canvas class="chart" id="myChart"> </canvas>
                                </div>`;
    chartrender(i - 1)
}


function closestats() {//pokemonstats close
    document.getElementById('pokemonstats').classList.add('d-none');
}


async function oneright(i) {//next pokemon
    if (currentpokemon.length === i) {
        await morecards()
        pokemonstats(i + 1)
    } else {
        pokemonstats(i + 1)
    }
}

function oneleft(i) {//last pokemon
    let j = i - 2
    if (j === 0) {
        pokemonstats(i - 1)
        document.getElementById('left').classList.add('d-none');
    } else {
        pokemonstats(i - 1)
    }
}


function searchpokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase()

    let pokemonpng = document.getElementById('pokemonpng')
    pokemonpng.innerHTML = '';
    for (let i = 0; i < number; i++) {
        if (currentpokemon[i]['name'].includes(search)) {
            if (currentpokemon[i]['types'][1]) {//first type
                let secondtype = currentpokemon[i]['types'][1]['type']['name']
                pokemonpng.innerHTML += `<div onclick="pokemonstats(${i + 1})" class="pokemons"><div class="type">${currentpokemon[i]['types'][0]['type']['name']}<br>${secondtype}</div><b>#${i + 1}</b><div class="name">${currentpokemon[i]['name']}</div><img src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png'></div>`;
            } else {//second type
                pokemonpng.innerHTML += `<div onclick="pokemonstats(${i + 1})" class="pokemons"><div class="type">${currentpokemon[i]['types'][0]['type']['name']}</div><b>#${i + 1}</b><div class="name">${currentpokemon[i]['name']}</div><img src=\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png'></div>`;
            }
        }else{

        }
    }
}