const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");
const imgDestination = document.getElementById("img-destination");
const titleDestination = document.getElementById("title-destination");
const pDestination = document.getElementById("p-destination");
const distanceP = document.getElementById("distance-p");
const timeP = document.getElementById("time-p");

function destinationMoon() {
  imgDestination.src = "./assets/destination/image-moon.png";
  titleDestination.textContent = "MOON";
  pDestination.textContent =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  distanceP.textContent = "384,400 km";
  timeP.textContent = "3 days";
  moon.classList.add("active");
  mars.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");
}

function destinationMars() {
  imgDestination.src = "./assets/destination/image-mars.png";
  titleDestination.textContent = "MARS";
  pDestination.textContent =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  distanceP.textContent = "225 MIL. km";
  timeP.textContent = "9 months";
  mars.classList.add("active");
  moon.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");
}
function destinationEuropa() {
  imgDestination.src = "./assets/destination/image-europa.png";
  titleDestination.textContent = "EUROPA";
  pDestination.textContent =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  distanceP.textContent = "628 MIl km";
  timeP.textContent = "3 years";
  europa.classList.add("active");
  mars.classList.remove("active");
  moon.classList.remove("active");
  titan.classList.remove("active");
}
function destinationTitan() {
  imgDestination.src = "./assets/destination/image-titan.png";
  titleDestination.textContent = "MOON";
  pDestination.textContent =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  distanceP.textContent = "1.6 BIL. km";
  timeP.textContent = "7 years";
  titan.classList.add("active");
  mars.classList.remove("active");
  europa.classList.remove("active");
  moon.classList.remove("active");
}
