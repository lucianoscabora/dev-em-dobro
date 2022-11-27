// Step 1 - Select the two input fields
const inputText = document.querySelectorAll(".input-text");

// Step 2 - Run the two inputs to check if there are text.
inputText.forEach(input => {
		// Step 3 - Onchange sent to see if the fields are being modified.
    input.addEventListener('change', () => {
				// Step 4 - Verify if the input is different from empty.
        if (input.value !== "") {
						// Step 5 - If it`s not empty, we add the green border class.
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
});