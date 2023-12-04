<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flame Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-image: url('love.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        input {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px; /* Add margin to create space between buttons */
        }

        #result {
            margin-top: 20px;
            font-size: 18px;
            color: white;
        }

        h1 {
            color: white;
        }
    </style>
</head>
<body>
    <h1>Flame Calculator</h1>

    <label for="name1">Name 1:</label>
    <input type="text" id="name1" placeholder="Enter Name 1">

    <br>

    <label for="name2">Name 2:</label>
    <input type="text" id="name2" placeholder="Enter Name 2">

    <br>

    <button onclick="calculateFlame()">Calculate Flame</button>

    <button onclick="resetForm()">Reset</button> <!-- Added Reset button -->

    <div id="result"></div>

    <script>
        function calculateFlame() {
            const name1 = document.getElementById('name1').value.toLowerCase();
            const name2 = document.getElementById('name2').value.toLowerCase();

            const flameResult = calculateFlameResult(name1, name2);

            displayResult(flameResult);
        }

        function calculateFlameResult(name1, name2) {
            const combinedNames = name1 + name2;
            const uniqueLetters = [...new Set(combinedNames)].join('');
            const flameResult = uniqueLetters.length % 6 + 1;

            return flameResult;
        }

        function displayResult(flameResult) {
            const resultDiv = document.getElementById('result');
            const resultMessages = [
                "Just Friends",
                "Lovers",
                "Angry",
                "Marriage",
                "Engaged",
                "Soulmates"
            ];

            const resultMessage = resultMessages[flameResult - 1];
            resultDiv.textContent = `Flame Result: ${resultMessage}`;
        }

        function resetForm() {
            document.getElementById('name1').value = '';
            document.getElementById('name2').value = '';
            document.getElementById('result').textContent = '';
        }
    </script>
</body>
</html>
