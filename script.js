// variabler String der die Zitate direkt über die API von quotable.io lädt
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'

// Verknüpfung der Html Elemente (Id's) mit den Variablen für JS
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const speedElement = document.getElementById('speed')

// globale Zählervariable (um den lastCharacterCount ermitteln zu können)
let characterCount = 0
let restart = true

// Funktion die Daten der API Schnittstelle abruft
function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

// Funktion, die das Zitat in Buchstaben teilt und als "span" ausgibt?
async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    
    let lastTime = getTimerTime()
    let lastCharacterCount = characterCount
    characterCount = 0

    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
        characterCount = characterCount +1
    })
    // Textfeld leeren
    quoteInputElement.value = null
    // Anzahl der Wörter letztes Zitat geteilt durch Zeit für das letzte Zitat:
    let speed = Math.floor((lastCharacterCount/lastTime)*12)
    if(speed>0) speedElement.innerText = speed+" WPM"
}



// der EventListener wird bei jedem input getriggert
quoteInputElement.addEventListener('input', () => {
    // erstellt jedes Mal Arrays für alle Buchstaben der Quote und alle Buchstaben im Textfeld
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    // "correct" wird triggert das nächste Zitat wenn die Variable im nächsten Schritt "true" bleibt
    let correct = true
    
    // Abgleich character im Zitat und Textfeld:
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        // nicht getippt
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false  
        // richtig getippt      
        } else if (character == characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        // falsch getippt
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })

    // wenn alle Character correct waren und die nächste Taste angeschlagen wird!
    if (restart) {
        startTimer()
        restart = false
    }

    // wenn alle Character correct nächste Quote:
    if (correct) {
        renderNewQuote()
        restart = true
    }
})


// Timerfunktion für exakten Timer (durch Abgleich Startzeit und Echtzeit)
let startTime
function startTimer() {
    startTime = new Date()
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}


// Aufrufen des ersten Zitats:
renderNewQuote()
