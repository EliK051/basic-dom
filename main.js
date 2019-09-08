
for(i=0;i<6;i++){
    let squaries=document.createElement("div")
    squaries.style.backgroundColor=getRandomColor();
    squaries.setAttribute("id","box"+i)
    squaries.style.margin="1px"
    squaries.style.height="50px"
    squaries.style.width="50px"
    squaries.style.border="1px solid black"
    squaries.style.display="inline-block"
    squaries.setAttribute("class", "squary")
    document.body.appendChild(squaries)
    squaries.onmouseenter=function(){
        squaries.style.backgroundColor=getRandomColor();
    }
    }
    
    
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];//random makes 0-1//floor rounds it to natural num
        }
        return color;
      }
    