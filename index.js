
        let display = document.getElementById('display');

        function appendCharacter(char) {
            display.value += char;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculateResult() {
            try {
                display.value = eval(display.value); // Evaluates the expression
            } catch (error) {
                display.value = 'Error'; // Handles invalid input
            }
        }
