document.getElementById('verzendButton').addEventListener('click', function() {
    const leeftijd = parseInt(document.getElementById('leeftijd').value);
    const resultaat = document.getElementById('resultaat');

    if (isNaN(leeftijd) || leeftijd < 0) {
        resultaat.textContent = "Voer alstublieft een geldige leeftijd in.";
    } else if (leeftijd < 1) {
        resultaat.textContent = "Je bent een baby.";
    } else if (leeftijd < 4) {
        resultaat.textContent = "Je bent een peuter.";
    } else if (leeftijd < 7) {
        resultaat.textContent = "Je bent een kleuter.";
    } else if (leeftijd < 12) {
        resultaat.textContent = "Je bent een kind.";
    } else if (leeftijd < 16) {
        resultaat.textContent = "Je bent een puber.";
    } else if (leeftijd < 21) {
        resultaat.textContent = "Je bent een adolescent.";
    } else {
        resultaat.innerHTML = "Je bent een volwassene.";
    }


});
