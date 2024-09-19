// Function to calculate BMI
function calculateBMI() {
    // Get the input elements for weight and height
    let weightInput = document.getElementById('weight');
    let heightInput = document.getElementById('height');

    // Convert the input values to integers
    let weight = parseInt(weightInput.value);
    let height = parseInt(heightInput.value);

    // Check if weight and height are valid positive numbers
    if (weight > 0 && height > 0) {
        // Calculate BMI (convert height to meters before squaring)
        let bmi = weight / ((height / 100) * (height / 100));

        // Log the calculated BMI in the console for debugging purposes
        console.log("BMI:", bmi.toFixed(2));

        // Display the BMI result on the page
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

        // Display the appropriate category and message for the BMI
        document.getElementById('description').innerHTML = getBMICategory(bmi);

        // Clear the input fields after calculation
        weightInput.value = '';
        heightInput.value = '';
    } else {
        // If invalid input, display an error message
        document.getElementById('result').innerHTML = "Please enter valid weight and height.";
        document.getElementById('description').innerHTML = "";

        // Log the error in the console
        console.log("Invalid input: Please enter a valid weight and height.");
    }
}

// Function to determine the BMI category and provide a corresponding message
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "You are underweight. Focus on maintaining a balanced diet and incorporating healthy, nutrient-dense foods.";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        return "Great job! You have a normal weight. Keep maintaining a healthy lifestyle with regular exercise and balanced nutrition.";
    } else if (bmi >= 25 && bmi <= 29.99) {
        return "You are slightly overweight. Consider making small changes to your diet and incorporating more physical activity.";
    } else if (bmi >= 30 && bmi <= 34.99) {
        return "You are in Obese Class 1. Focus on healthier eating habits and increasing your activity levels.";
    } else if (bmi >= 35 && bmi <= 39.99) {
        return "You are in Obese Class 2. Consider seeking guidance from a healthcare professional.";
    } else {
        return "You are in Obese Class 3. It's critical to take immediate steps to improve your health. Consult a healthcare professional.";
    }
}
