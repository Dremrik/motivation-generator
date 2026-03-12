const phrases = [
    "Success is not final, failure is not fatal.",
    "Small progress is still progress.",
    "Discipline beats motivation",
    "Focus on the goal, not the pain.",
    "Dream big. Start small. Act now.",];

function getPhrase() {
    const random = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").textContent = phrases[random];
}