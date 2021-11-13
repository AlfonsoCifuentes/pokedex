////////////////POKEDEX////////////////////

//Definiendo un array vacío
const allPokeUrls = [];

//Metiendo cada una de las URL de cada pokemon en el array allPoleUrls
for (i=1; i<=150; i++){
  allPokeUrls.push ("https://pokeapi.co/api/v2/pokemon/"+i)
}

//Mapeando el fetch para cada una de las urls del array
const allPokeFetch = allPokeUrls.map (pokemonURL => fetch(pokemonURL)

//Convirtiendo la respuesta a JSON
.then ((response) => response.json())

)

//Metiendo la acción del fetch de las urls en un promise
Promise.all(allPokeFetch)

//Cuando finaliza la promesa nos devuelve un array de promesas, y empezamos la función que dibujará los pokemon
.then ((drawPokemon) => {

  //Bucle para iterar sobre el array de promesas
  for (i=0; i<drawPokemon.length; i++){
    
      
      //Operando el DOM

        let elementoLi = document.createElement("li");
        elementoLi.setAttribute("class", "card");

        /* título de cada tarjeta */

        let divTitulo = document.createElement("div");
        elementoLi.appendChild(divTitulo);
        divTitulo.setAttribute("class", "card-title");

        let textoNombre = document.createTextNode(drawPokemon[i].name);
        divTitulo.appendChild(textoNombre);

        /* subtítulo de cada tarjeta, en este caso la experiencia base */

        let divSubtitulo = document.createElement("div");
        elementoLi.appendChild(divSubtitulo);
        divSubtitulo.setAttribute("class", "card-subtitle");

        let textoSubtitulo = document.createTextNode("XP: "+ drawPokemon[i].base_experience);
        divSubtitulo.appendChild(textoSubtitulo);

        /* imagen del pokemon  */
        
        let imagenPokemon = document.createElement("img");
        imagenPokemon.setAttribute("src", drawPokemon[i].sprites.front_default );
        imagenPokemon.setAttribute("class", "card-image");
        elementoLi.appendChild(imagenPokemon);

        /* añadiendo el elemento li con todo lo anterior al div con id pokedex */

        document.getElementById("pokedex").appendChild(elementoLi);
   }
  }
);






  

