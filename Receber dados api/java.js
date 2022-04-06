let tbody=document.querySelector("body")
tbody.style.backgroundColor="#24282F",tbody.style.color="white"
document.querySelector("button").onclick=function(){
    var imagem=document.createElement("img")
    let div=document.querySelector("#div")
    let nome=document.createElement("h2")
    let estado=document.createElement("h2")
    let especie=document.createElement("h2")
    if(aa.value=="Albert Einstein"){
        var div2=document.createElement("div")
        div2.id="div2"
    var link='https://rickandmortyapi.com/api/character/11'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/11.jpeg'
}
    else if(aa.value=='Beth Smith') {
    var link='https://rickandmortyapi.com/api/character/39'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/39.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Ideal Jerry'){
    var link='https://rickandmortyapi.com/api/character/163'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/163.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Communications Responsible Rick'){
    var link='https://rickandmortyapi.com/api/character/461'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/461.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Nick'){
    var link='https://rickandmortyapi.com/api/character/789'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/789.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Deformed Morty'){
    var link='https://rickandmortyapi.com/api/character/812'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/812.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Japheth'){
    var link='https://rickandmortyapi.com/api/character/675'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/675.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
else if(aa.value=='Commander Rick'){
    var link='https://rickandmortyapi.com/api/character/69'
    imagem.src='https://rickandmortyapi.com/api/character/avatar/69.jpeg'
    var div2=document.createElement("div")
    div2.id="div2"
}
fetch(link).then(
    function(res){
        return res.json()
        }
    ).then(function(res){
                nome.append(document.createTextNode("Nome: " +res.name))
                estado.append(document.createTextNode("Estado: "+res.status))
                especie.append(document.createTextNode("Especie: "+res.species))
                let div3=document.createElement("div")
                div.append(div2)
                div2.append(imagem)
                div2.append(div3)
                div3.append(nome)
                div3.append(estado)
                div3.append(especie)
                //Parte de Estilizacao
                div3.style.display="inline-block ",div3.style.marginLeft="20px",div2.style.display="inline-block ",div2.style.backgroundColor="gray",div2.style.borderRadius = "25px",div2.style.margin = "20px", div2.style.width = "700px"
                imagem.style.borderRadius = "200px",imagem.style.width = "200px",imagem.style.margin="20px",imagem.style.float="left",div3.style.float="left",div3.style.marginTop="40px"
        }  
    )        
}