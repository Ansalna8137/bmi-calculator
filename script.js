function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        var result = 'Your BMI is: ' + bmi;

        if (bmi < 18.5) {
            result += ' (Underweight)';
            document.getElementById('result').className = 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            result += ' (Normal weight)';
            document.getElementById('result').className = 'normal-weight';
        } else if (bmi >= 25 && bmi < 30) {
            result += ' (Overweight)';
            document.getElementById('result').className = 'overweight';
        } else {
            result += ' (Obese)';
            document.getElementById('result').className = 'obese';
        }

        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = 'Please enter valid height and weight values.';
    }
}




