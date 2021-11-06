////////////////POKEDEX////////////////////
    
    function getPokemon(url){
      fetch (url)
      .then((response) => {return response.json();})
      .then ((drawPokemon) => {
        let elementoLi = document.createElement("li");
        elementoLi.setAttribute("class", "card");

        /* título de cada tarjeta */

        let divTitulo = document.createElement("div");
        elementoLi.appendChild(divTitulo);
        divTitulo.setAttribute("class", "card-title");

        let textoNombre = document.createTextNode(drawPokemon.name);
        divTitulo.appendChild(textoNombre);

        /* subtítulo de cada tarjeta, en este caso la experiencia base */

        let divSubtitulo = document.createElement("div");
        elementoLi.appendChild(divSubtitulo);
        divSubtitulo.setAttribute("class", "card-subtitle");

        let textoSubtitulo = document.createTextNode("XP: "+ drawPokemon.base_experience);
        divSubtitulo.appendChild(textoSubtitulo);

        /* imagen del pokemon  */
        
        let imagenPokemon = document.createElement("img");
        imagenPokemon.setAttribute("src", drawPokemon.sprites.front_default );
        imagenPokemon.setAttribute("class", "card-image");
        elementoLi.appendChild(imagenPokemon);

        /* añadiendo el elemento li con todo lo anterior al div con id pokedex */

        document.getElementById("pokedex").appendChild(elementoLi);
        
        
      })

    
     
    }
    
    /* bucle para iterar sobre la función getPokemon */

    for (i=1; i<=150; i++){
       getPokemon ("https://pokeapi.co/api/v2/pokemon/"+i)
    }





  

