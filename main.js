
const infoPoke = pokename => {
    axios

        .get(`https://pokeapi.co/api/v2/pokemon/${pokename}/`)
        .then(response => {
            const dataPokemon = response.data
            console.log(dataPokemon);

            const abilitiesPoke = dataPokemon.abilities
            const imgpokes = dataPokemon.sprites

            // console.log(abilitiesPoke);
            console.log(imgpokes.front_default);
            const abilityP = []


            let namePoke = document.createElement('h2')
            let imgPoke = document.createElement('img')
            let abilitys = document.createElement('h2')
            //let heightPoke = document.createElement('h2')

            namePoke.classList.add('poke-name')
            //imgPoke.classList.add('poke-img')
            abilitys.classList.add('abilitys-list')


            document.querySelector('.info-poke').appendChild(namePoke)

            document.querySelector('.info-poke').appendChild(imgPoke)
            document.querySelector('.info-poke').appendChild(abilitys)

            namePoke.innerText = `${dataPokemon.name}`
            imgPoke.setAttribute('src', imgpokes.front_default)
            //imgPoke.innerHTML = `${imgpokes}`
            abilitys.innerText = `Click => Abilitys:`

            console.log(abilitys.innerText);


            let toClick = document.querySelectorAll('.abilitys-list')
            //let abilityPoke = document.createElement('p')

            abilitiesPoke.forEach(abil => {

                let abilityPoke = document.createElement('p')
                abilityPoke.classList.add('list-abil')
                document.querySelector('.info-poke').appendChild(abilityPoke)
                abilityPoke.innerText = ''
                abilityPoke.innerText = `${abil.ability.name.toUpperCase()}` //me muestra el nombre de las categorias en los links
                abilityP.push(abil)

            })

            toClick.forEach(click => {
                click.onclick = () => {

                    //     abilitiesPoke.forEach(abil => {

                    //         let abilityPoke = document.createElement('p')
                    //         abilityPoke.classList.add('list-abil')
                    //         document.querySelector('.info-poke').appendChild(abilityPoke)
                    //         abilityPoke.innerText = ''
                    //         abilityPoke.innerText = `${abil.ability.name.toUpperCase()}` //me muestra el nombre de las categorias en los links
                    //         abilityP.push(abil)

                    //     })
                }

            })



            // abilitiesPoke.forEach(abil => {

            //     let abilityPoke = document.createElement('p')
            //     document.querySelector('.info-poke').appendChild(abilityPoke)
            //     abilityPoke.innerText = `${abil.ability.name}` //me muestra el nombre de las categorias en los links
            //     abilityP.push(abil)

            //     console.log(abil);
            // })

        })
    //.catch(err => console.error('errores comunes', err))
}

const pokeBtn = document.querySelector('.data-search')

pokeBtn.addEventListener('click', () => {
    const pokeInput = document.querySelector('.input-name')
    //console.log(pokeInput);
    infoPoke(pokeInput.value)
})