let players = [
"Игрок 1",
"Игрок 2",
"Игрок 3",
"Игрок 4",
"Игрок 5",
"Игрок 6",
"Игрок 7",
"Игрок 8",
"Игрок 9"
];


let box=document.getElementById("bracket");


if(box){

players.forEach((p)=>{

let div=document.createElement("div");

div.innerHTML=
`
<h3>${p}</h3>
<button>Внести счет</button>
`;

div.style.background="white";
div.style.margin="10px";
div.style.padding="10px";

box.appendChild(div);

});

}
