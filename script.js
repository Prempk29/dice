var randomnum_mama = Math.floor(Math.random() * 6) + 1;
var randomimage_mama= "dice" + randomnum_mama+ ".png"; 
var image_mama = document.querySelectorAll("img")[0];
image_mama.setAttribute("src", randomimage_mama);

var randomnum_mama_1 = Math.floor(Math.random() * 6) + 1;
var randomimage_mama_1= "dice" + randomnum_mama_1+ ".png"; 
var image_mama_1 = document.querySelectorAll("img")[1];
image_mama_1.setAttribute("src", randomimage_mama_1);

if(randomnum_mama>randomnum_mama_1)
{
   document.getElementById("momy").innerText="player 1 won the match ";
}
else if(randomnum_mama<randomnum_mama_1)
{
    document.getElementById("momy").innerText="player 2 won the match ";
}
else
{
    document.getElementById("momy").innerText="Draw ";
}