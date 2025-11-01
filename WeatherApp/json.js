const toys = {
    toy1: {name: "Teddy Bear", color: "Brown"},
    toy2: {name: "Action Figure", color: "Red"},
    toy3: {name: "Doll", color: "Pink"}
}

console.log(toys);            // Logs the object representation

console.log(JSON.stringify(toys));   

console.log(JSON.parse(JSON.stringify(toys)))