const summonButton = document.getElementById('summon-button');
const resultDiv = document.getElementById('result');
const clickCountSpan = document.getElementById('clickCount');
const displayOneResultButton = document.getElementById('display-one-result'); // New button

const characters = [
    { rarity: '3-star', name: '3 star lightcone', odds: 94.3, avatar: '../4/kys.gif'},
    { rarity: '4-star', name: 'Arlan', odds: 0.17, avatar: '../4/arlan.png' },
    { rarity: '4-star', name: 'Asta', odds: 0.17, avatar: '../4/asta.png' },
    { rarity: '4-star', name: 'Dan Heng', odds: 0.17, avatar: '../4/danheng.png' },
    { rarity: '4-star', name: 'Herta', odds: 0.17, avatar: '../4/cunny.png' },
    { rarity: '4-star', name: 'Hook', odds: 0.17, avatar: '../4/cunny.png' },
    { rarity: '4-star', name: 'March 7th', odds: 0.17, avatar: '../4/march 7th.png' },
    { rarity: '4-star', name: 'Natasha', odds: 0.17, avatar: '../4/MOMMY.png' },
    { rarity: '4-star', name: 'Pela', odds: 0.17, avatar: '../4/cunny.png' },
    { rarity: '4-star', name: 'Qingque', odds: 0.17, avatar: '../4/cunny.png' },
    { rarity: '4-star', name: 'Sampo', odds: 0.17, avatar: '../4/sampo.png' },
    { rarity: '4-star', name: 'Serval', odds: 0.17, avatar: '../4/serval.png' },
    { rarity: '4-star', name: 'Sushang', odds: 0.17, avatar: '../4/sus.gif' },
    { rarity: '4-star', name: 'Tingyun', odds: 0.17, avatar: '../4/Tingyun.png' },
    { rarity: '4-star', name: 'Yukong', odds: 0.17, avatar: '../4/yukong.png' },
    { rarity: '4-star', name: 'Luka', odds: 0.17, avatar: '../4/luka.png' },
    { rarity: '5-star', name: 'Bailu', odds: 0.04285714286, avatar: '../4/cunny.png' },
    { rarity: '5-star', name: 'Bronya', odds: 0.04285714286, avatar: '../4/bronya.png' },
    { rarity: '5-star', name: 'Clara', odds: 0.04285714286, avatar: '../4/cunny.png' },
    { rarity: '5-star', name: 'Gepard', odds: 0.04285714286, avatar: '../4/gepard.png' },
    { rarity: '5-star', name: 'Himeko', odds: 0.04285714286, avatar: '../4/himeko.png' },
    { rarity: '5-star', name: 'Welt', odds: 0.04285714286, avatar: '../4/welt.png' },
    { rarity: '5-star', name: 'Yanqing', odds: 0.04285714286, avatar: '../4/yangqing.png' },
    { rarity: '5-star', name: 'But the Battle Is not Over', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'In The Name of the World', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'Moment of Victory', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'Night on the Milky Way', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'Something Irreplaceable', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'Sleep Like the Dead', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '5-star', name: 'Time Waits for No One', odds: 0.04285714286, avatar: '../4/safe.gif' },
    { rarity: '4-star', name: '4 Star lightcone', odds:2.55, avatar: '../4/skull.jpg'},
];

// Initialize click count
let clickCount = 0;

summonButton.addEventListener('click', () => {
    resultDiv.innerHTML = ''; // Clear previous results

    //Can't believe all I spent 2 hour to make the result only 10 not 11, all I have to do is to make 'i < 10' to 'i < 9'
    for (let i = 0; i < 9; i++) {
        
        const randomNumber = Math.random() * 100;
        let accumulatedOdds = 0;

        for (const character of characters) {
            accumulatedOdds += character.odds;

            if (randomNumber <= accumulatedOdds) {
                resultDiv.innerHTML += `
                <p>You summoned ${character.name} </p>
                <img src=" ${character.avatar}">
                `;
                
                break;
            }
        }
    }
    // Increment the click count by 10
    clickCount += 10;

    // Update the click count displayed on the page
    clickCountSpan.textContent = clickCount;

    // You can add additional logic here for character summoning if needed
  // Check if the clickCount is a multiple of 10 and summon a 4star character if available
  if (clickCount >= 10 && clickCount % 10 === 0 && clickCount % 90 !== 0) {
    const fourStarCharacters = characters.filter(character => character.rarity === '4-star');
    const randomIndex = Math.floor(Math.random() * fourStarCharacters.length);
    const character = fourStarCharacters[randomIndex];

    if (character) {
        resultDiv.innerHTML += `
        <p>You summoned ${character.name} </p>
        <img src="${character.avatar}">
        `;
        }
     }

     // Check if the clickCount is a multiple of 90 and summon a 5star character if available
  if (clickCount >= 90 && clickCount % 90 === 0) {
    const fiveStarCharacters = characters.filter(character => character.rarity === '5-star');
    const randomIndex = Math.floor(Math.random() * fiveStarCharacters.length);
    const character = fiveStarCharacters[randomIndex];

    if (character) {
        resultDiv.innerHTML += `
        <p>You summoned ${character.name} </p>
        <img src="${character.avatar}">
        `;
        }
     }
});

// Add a click event listener to the "Display One Result" button
displayOneResultButton.addEventListener('click', () => {
    // Clear previous results
    resultDiv.innerHTML = '';

    // Simulate summoning one character
    const randomNumber = Math.random() * 100;
    let accumulatedOdds = 0;

    for (const character of characters) {
        accumulatedOdds += character.odds;

        if (randomNumber <= accumulatedOdds) {
            resultDiv.innerHTML = `
            <p>You summoned ${character.name} </p>
            <img src="${character.avatar}">
            `;
            break;
        }
    }
    // Increment the click count by 1
    clickCount ++;

    // Update the click count displayed on the page
    clickCountSpan.textContent = clickCount;

  // Check if the clickCount is a multiple of 10 and summon a 4star character if available
  if (clickCount % 10 === 0 && clickCount % 90 !== 0) {
        // Clear previous results
        resultDiv.innerHTML = '';
    const fourStarCharacters = characters.filter(character => character.rarity === '4star');
    const randomIndex = Math.floor(Math.random() * fourStarCharacters.length);
    const character = fourStarCharacters[randomIndex];

    if (character) {
        resultDiv.innerHTML += `
        <p>You summoned ${character.name} </p>
        <img src="${character.avatar}">
        `;
        }
     }

     // Check if the clickCount is a multiple of 90 and summon a 5star character if available
  if (clickCount % 90 === 0) {
        // Clear previous results
        resultDiv.innerHTML = '';
    const fiveStarCharacters = characters.filter(character => character.rarity === '5star');
    const randomIndex = Math.floor(Math.random() * fiveStarCharacters.length);
    const character = fiveStarCharacters[randomIndex];

    if (character) {
        resultDiv.innerHTML += `
        <p>You summoned ${character.name} </p>
        <img src="${character.avatar}">
        `;
        }
     }
});

const audio = document.getElementById('audio');
const playStopButton = document.getElementById('playStopButton');

playStopButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playStopButton.style.backgroundImage = "url('../4/PlayButton.png')";
  } else {
    audio.pause();
    audio.currentTime = 0;
    playStopButton.style.backgroundImage = "url('../4/PauseButton.png')";
  }
});

// Sfx for button 
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

displayOneResultButton.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});

displayOneResultButton.addEventListener("click", () => {
    clickSound.currentTime = 0; // Rewind sound to the beginning
    clickSound.play();
});

summonButton.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});

summonButton.addEventListener("click", () => {
    clickSound.currentTime = 0; // Rewind sound to the beginning
    clickSound.play();
});

playStopButton.addEventListener('click', () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});
