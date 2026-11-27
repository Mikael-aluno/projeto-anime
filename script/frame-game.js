// Cadastre cada anime aqui usando exatamente três imagens da pasta frame.
const animeRounds = [
    {
        title: "Saint Seiya",
        aliases: ["Cavaleiros do Zodíaco"],
        images: ["frame/seiya1.png", "frame/seiya2.png", "frame/seiya3.png"]
    },
    {
        title: "To Love-Ru",
        aliases: ["To Love Ru"],
        images: ["frame/toloveru1.jpg", "frame/toloveru2.jpg", "frame/toloveru3.jpg"]
    },
    {
        title: "Re:Zero",
        aliases: ["Re:Zero"],
        images: ["frame/zero1.jpg", "frame/zero2.png", "frame/zero3.png"]
    },
    {
        title: "Naruto",
        aliases: ["Naruto Shippuden"],
        images: ["frame/na1.png", "frame/na2.png", "frame/na3.png"]
    },
    {
        title: "Dragon Ball Z",
        aliases: ["Dragon Ball", "Dragon Ball Super"],
        images: ["frame/dz1.png", "frame/dz2.png", "frame/dz3.png"]
    },
    {
        title: "One Piece",
        aliases: ["One Piece"],
        images: ["frame/op1.png", "frame/op2.png", "frame/op3.png"]
    }
];

const scoreValue = document.getElementById("scoreValue");
const streakValue = document.getElementById("streakValue");
const frameImage = document.getElementById("frameImage");
const frameCount = document.getElementById("frameCount");
const guessForm = document.getElementById("guessForm");
const animeGuess = document.getElementById("animeGuess");
const submitGuess = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const nextRoundButton = document.getElementById("nextRound");
const frameDots = Array.from(document.querySelectorAll(".frame-dot"));
const assetRoot = new URL("../", document.baseURI);

let score = 0;
let streak = 0;
let currentFrame = 0;
let currentRound = null;
let gameActive = false;
let roundQueue = [];
let previousTitle = "";

function normalizeAnswer(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

function validateAnimeRounds() {
    if (animeRounds.length === 0) {
        throw new Error("adicione pelo menos um anime em frame-game.js.");
    }

    animeRounds.forEach((anime, index) => {
        if (!anime.title || !anime.title.trim()) {
            throw new Error(`o anime na posição ${index + 1} está sem título.`);
        }
        if (!Array.isArray(anime.aliases) || !Array.isArray(anime.images) || anime.images.length !== 3) {
            throw new Error(`"${anime.title}" precisa ter aliases e exatamente três imagens.`);
        }
        if (anime.images.some((image) => typeof image !== "string" || !image.trim())) {
            throw new Error(`"${anime.title}" tem um caminho de imagem vazio ou inválido.`);
        }
    });
}

function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function setFrame(index) {
    currentFrame = index;
    frameImage.src = new URL(currentRound.images[currentFrame], assetRoot).href;
    frameCount.textContent = `Frame ${currentFrame + 1} de 3`;
    frameDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("bg-cyan-400", dotIndex === currentFrame);
        dot.classList.toggle("bg-indigo-900", dotIndex !== currentFrame);
    });
}

function setRoundQueue() {
    roundQueue = shuffle(animeRounds);
    if (roundQueue.length > 1 && roundQueue[0].title === previousTitle) {
        [roundQueue[0], roundQueue[1]] = [roundQueue[1], roundQueue[0]];
    }
}

function startNextRound() {
    if (roundQueue.length === 0) setRoundQueue();

    const nextRound = roundQueue.shift();
    currentRound = { ...nextRound, images: shuffle(nextRound.images) };
    previousTitle = currentRound.title;
    currentFrame = 0;
    gameActive = true;
    animeGuess.value = "";
    animeGuess.disabled = false;
    submitGuess.disabled = false;
    nextRoundButton.classList.add("hidden");
    feedback.textContent = "Digite o nome do anime. Você terá até três frames para acertar.";
    setFrame(0);
    animeGuess.focus();
}

function finishRound(isCorrect) {
    gameActive = false;
    animeGuess.disabled = true;
    submitGuess.disabled = true;
    nextRoundButton.classList.remove("hidden");

    if (isCorrect) {
        const points = [300, 200, 100][currentFrame];
        score += points;
        streak++;
        feedback.textContent = `Acertou! É ${currentRound.title}. +${points} pontos.`;
    } else {
        streak = 0;
        feedback.textContent = `As tentativas acabaram. O anime era ${currentRound.title}.`;
    }

    scoreValue.textContent = score;
    streakValue.textContent = streak;
}

guessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!gameActive) return;

    const guess = normalizeAnswer(animeGuess.value.trim());
    if (!guess) {
        feedback.textContent = "Digite o nome de um anime antes de responder.";
        animeGuess.focus();
        return;
    }

    const acceptedAnswers = [currentRound.title, ...currentRound.aliases];
    const isCorrect = acceptedAnswers.some((answer) => normalizeAnswer(answer) === guess);
    if (isCorrect) {
        finishRound(true);
        return;
    }

    if (currentFrame < 2) {
        setFrame(currentFrame + 1);
        animeGuess.value = "";
        feedback.textContent = `Não foi dessa vez. Tente novamente com o frame ${currentFrame + 1}.`;
        animeGuess.focus();
        return;
    }

    finishRound(false);
});

frameImage.addEventListener("error", () => {
    if (!gameActive) return;
    gameActive = false;
    animeGuess.disabled = true;
    submitGuess.disabled = true;
    nextRoundButton.classList.remove("hidden");
    feedback.textContent = `Não foi possível carregar "${currentRound.images[currentFrame]}". Confira o caminho da imagem em frame-game.js.`;
});

nextRoundButton.addEventListener("click", startNextRound);

try {
    validateAnimeRounds();
    startNextRound();
} catch (error) {
    console.error(error);
    feedback.textContent = `Erro ao iniciar o jogo: ${error.message}`;
    animeGuess.disabled = true;
    submitGuess.disabled = true;
}
