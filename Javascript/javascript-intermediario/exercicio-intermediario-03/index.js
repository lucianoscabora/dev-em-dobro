// Step 1: Select the class
const quadrado = document.querySelector(".quadrado");

// Step 2: Verify the color added to the class sending an event
quadrado.addEventListener('click', () => {
    // Step 3: Create a variable to check if there exist the blue color
const classeAzulExiste = quadrado.classList.contains('azul');

    // Step 4: Verify and remove if exists 
if (classeAzulExiste) {
    quadrado.classList.remove("azul");
} else {
            // Step 5 - If it doesn't have the blue color, add and pop up the alert
    quadrado.classList.add("azul");
      alert("Esse quadrado TEM a classe azul!");  
}
});