import css from "./style.css";
import logo from "./assets/webpack.svg";
import spidey from "./assets/spidey.jpg";
import data from "./data.json";
import {HelloWorld} from "./components/HelloWorld.js";

//Variables
const arr = [1,2,3],
codeESNext = () => console.log(...arr),
d = document,
$app = d.getElementById("app"),
$p = d.createElement("p"),
$h1 = d.createElement("h1"),
$logo = d.createElement("img"),
$img = d.createElement("img"),
$nav = d.createElement("nav");

let menu = "",
hello = new HelloWorld("Vanilla JS");

data.links.forEach(el => (menu += `<a href="${el[1]}">${el[0]}</a>`));

//Ejecución
console.log("hola mundo sin configuración con Webpack");
codeESNext();

$h1.textContent = hello.greet();
$p.textContent = "By Codereggs.";
$logo.src = logo;
$logo.classList = "icon";
$img.src = spidey;
$img.style.borderRadius = "100%";
$img.style.boxShadow = "0px 0px 4px 4px #000"
$nav.innerHTML = menu;
$nav.classList.add("menu");

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($p);
$app.appendChild($img);