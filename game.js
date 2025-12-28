console.log("Game initialized successfully.");
//afficher dans le paragraph id="output" le mot du jour

const wordList = ["Bonjour", "Salut", "Coucou", "Hello", "Hi"];
// sélectionner un mot aléatoire dans la liste
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// mettre les lettres du mot choisi dans le désordre
const scrambledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');

document.getElementById("output").innerText = "Mot du jour: " + scrambledWord;
// récupérer le texte saisi par l'utilisateur dans le formulaire html
function getUserInput() {
    const userInput = document.getElementById("userInput").value;
    console.log("User Input:", userInput);
    return userInput;
}
