////////////////POKEDEX////////////////////
    
    function getPokemon(url){
      fetch (url)
      .then((response) => {return response.json();})
      .then ((drawPokemon) => {
        let elementoLi = document.createElement("li");
        elementoLi.setAttribute("class", "card");

        let divTitulo = document.createElement("div");
        elementoLi.appendChild(divTitulo);
        divTitulo.setAttribute("class", "card-title");

        let divSubtitulo = document.createElement("div");
        elementoLi.appendChild(divSubtitulo);
        divSubtitulo.setAttribute("class", "card-subtitle");

        let textoSubtitulo = document.createTextNode("Experiencia: "+ drawPokemon.base_experience);
        divSubtitulo.appendChild(textoSubtitulo);

       
        let textoNombre = document.createTextNode(drawPokemon.name);
        divTitulo.appendChild(textoNombre);
        
        
        let imagenPokemon = document.createElement("img");
        imagenPokemon.setAttribute("src", drawPokemon.sprites.front_default );
        imagenPokemon.setAttribute("class", "card-image");
        elementoLi.appendChild(imagenPokemon);

        document.getElementById("pokedex").appendChild(elementoLi);
        

       
        
      })
      .then ((testPokemon) => {console.log(testPokemon);}) //for testing purposes only, DELETE AFTER COMPLETE
     
    }
    
    for (i=1; i<=150; i++){
       getPokemon ("https://pokeapi.co/api/v2/pokemon/"+i)
    }





  

