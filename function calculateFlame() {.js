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
