// Netflix Clone - JavaScript

// Movie Data (simulando un database)
const moviesData = {
    trending: [
        { id: 1, title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", year: 2022, match: 98 },
        { id: 2, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", year: 2023, match: 95 },
        { id: 3, title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", year: 2021, match: 97 },
        { id: 4, title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", year: 2021, match: 96 },
        { id: 5, title: "Dark", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", year: 2020, match: 94 },
        { id: 6, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", year: 2013, match: 99 },
        { id: 7, title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", year: 2022, match: 93 },
        { id: 8, title: "Narcos", image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg", year: 2017, match: 92 },
        { id: 9, title: "The Crown", image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg", year: 2023, match: 91 },
        { id: 10, title: "Ozark", image: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fvw9EAprHPS1bOxPsL.jpg", year: 2022, match: 94 }
    ],
    top10: [
        { id: 11, title: "Wednesday", image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", year: 2022, match: 98 },
        { id: 12, title: "You", image: "https://image.tmdb.org/t/p/w500/7bEYwjUvlJsib1TxMg6zaJcVd.jpg", year: 2023, match: 95 },
        { id: 13, title: "Cobra Kai", image: "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg", year: 2023, match: 93 },
        { id: 14, title: "Emily in Paris", image: "https://image.tmdb.org/t/p/w500/AnJOcrRc3SWy4LmRRQRhQmOn5hl.jpg", year: 2023, match: 88 },
        { id: 15, title: "The Night Agent", image: "https://image.tmdb.org/t/p/w500/lqS7K1bKp6I2e9BIxCKwFxPzGVo.jpg", year: 2023, match: 91 },
        { id: 16, title: "Ginny & Georgia", image: "https://image.tmdb.org/t/p/w500/2H7pN0RJpxG27PqnGrNxVf3lIWl.jpg", year: 2023, match: 87 },
        { id: 17, title: "The Diplomat", image: "https://image.tmdb.org/t/p/w500/pQH8qb4lnvHH3bazyEGMqhw4nKi.jpg", year: 2023, match: 89 },
        { id: 18, title: "Outer Banks", image: "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiTe.jpg", year: 2023, match: 90 },
        { id: 19, title: "Never Have I Ever", image: "https://image.tmdb.org/t/p/w500/3NVMzDK8e2ByRPKBVuJJyYuQH.jpg", year: 2023, match: 86 },
        { id: 20, title: "All of Us Are Dead", image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg", year: 2022, match: 94 }
    ],
    action: [
        { id: 21, title: "Extraction", image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", year: 2023, match: 92 },
        { id: 22, title: "The Gray Man", image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpW5Pz.jpg", year: 2022, match: 89 },
        { id: 23, title: "Red Notice", image: "https://image.tmdb.org/t/p/w500/lAXONicR4mmPq2QbmIPjPj.jpg", year: 2021, match: 87 },
        { id: 24, title: "6 Underground", image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5Gt3d.jpg", year: 2019, match: 85 },
        { id: 25, title: "Army of the Dead", image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvMJvR.jpg", year: 2021, match: 88 },
        { id: 26, title: "Triple Frontier", image: "https://image.tmdb.org/t/p/w500/vO8Vuy4E8DvFtfH2rQPC4c2FPh.jpg", year: 2019, match: 86 },
        { id: 27, title: "Kate", image: "https://image.tmdb.org/t/p/w500/uJDfMmXar6Fw5aZU3J9X0Y8WPNQ.jpg", year: 2021, match: 84 },
        { id: 28, title: "The Old Guard", image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrs.jpg", year: 2020, match: 90 },
        { id: 29, title: "Spenser Confidential", image: "https://image.tmdb.org/t/p/w500/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg", year: 2020, match: 83 },
        { id: 30, title: "Project Power", image: "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg", year: 2020, match: 85 }
    ],
    comedy: [
        { id: 31, title: "Murder Mystery", image: "https://image.tmdb.org/t/p/w500/bj2i7dqSJ2E0EpKO0lJGnepwHji.jpg", year: 2023, match: 86 },
        { id: 32, title: "Don't Look Up", image: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAODO9uxZcMVv2r.jpg", year: 2021, match: 88 },
        { id: 33, title: "Glass Onion", image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg", year: 2022, match: 93 },
        { id: 34, title: "The Adam Project", image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg", year: 2022, match: 87 },
        { id: 35, title: "Senior Year", image: "https://image.tmdb.org/t/p/w500/cPj0jJYbL6fRqLj9z1jLNMsYcn.jpg", year: 2022, match: 82 },
        { id: 36, title: "Do Revenge", image: "https://image.tmdb.org/t/p/w500/gpXRp3gx8M5V3UYs2dHvfGcOlb.jpg", year: 2022, match: 85 },
        { id: 37, title: "The Lovebirds", image: "https://image.tmdb.org/t/p/w500/5jdLnvALCpK1NW.jpg", year: 2020, match: 84 },
        { id: 38, title: "Eurovision", image: "https://image.tmdb.org/t/p/w500/9zrbgYyFvwH8syGb29NJUOL5M.jpg", year: 2020, match: 89 },
        { id: 39, title: "We Have a Ghost", image: "https://image.tmdb.org/t/p/w500/4Imsu37FTRfvt1bdfYbNjmwn.jpg", year: 2023, match: 81 },
        { id: 40, title: "You People", image: "https://image.tmdb.org/t/p/w500/yFP4z8KZxJP9QrHRZz0N.jpg", year: 2023, match: 83 }
    ],
    documentary: [
        { id: 41, title: "Our Planet", image: "https://image.tmdb.org/t/p/w500/kl4bHE3JLK6lsGPnHyaR9bxqB6l.jpg", year: 2019, match: 97 },
        { id: 42, title: "The Social Dilemma", image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", year: 2020, match: 95 },
        { id: 43, title: "My Octopus Teacher", image: "https://image.tmdb.org/t/p/w500/uNjH9Sdfz0rh4G.jpg", year: 2020, match: 96 },
        { id: 44, title: "Formula 1: Drive to Survive", image: "https://image.tmdb.org/t/p/w500/5ZA91jkNKI2FaB5Gb.jpg", year: 2023, match: 94 },
        { id: 45, title: "The Tinder Swindler", image: "https://image.tmdb.org/t/p/w500/4kLw8vSJL.jpg", year: 2022, match: 91 },
        { id: 46, title: "14 Peaks", image: "https://image.tmdb.org/t/p/w500/8d2GJEy.jpg", year: 2021, match: 93 },
        { id: 47, title: "Seaspiracy", image: "https://image.tmdb.org/t/p/w500/7Q3bYW.jpg", year: 2021, match: 88 },
        { id: 48, title: "The Last Dance", image: "https://image.tmdb.org/t/p/w500/oVg.jpg", year: 2020, match: 98 },
        { id: 49, title: "Inside Job", image: "https://image.tmdb.org/t/p/w500/abcde.jpg", year: 2021, match: 87 },
        { id: 50, title: "American Murder", image: "https://image.tmdb.org/t/p/w500/12345.jpg", year: 2020, match: 89 }
    ]
};

// Descrizioni per i film
const descriptions = {
    1: "Quando un ragazzino scompare, una piccola città scopre una storia che coinvolge esperimenti segreti, forze soprannaturali terrificanti e una strana bambina.",
    2: "Il cacciatore di mostri Geralt di Rivia lotta per trovare il suo posto in un mondo in cui le persone spesso si dimostrano più malvagie delle bestie.",
    3: "Centinaia di persone disperate accettano un misterioso invito a partecipare a un gioco per bambini. Una posta in gioco allettante li attende, ma la posta è mortale.",
    default: "Una storia avvincente che ti terrà incollato allo schermo dall'inizio alla fine. Non perdertela!"
};

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadAllRows();
    setupScrollButtons();
    setupModal();
    setupHeaderScroll();
}

// Carica tutte le righe di contenuto
function loadAllRows() {
    renderRow('trending', moviesData.trending);
    renderTop10('top10', moviesData.top10);
    renderRow('action', moviesData.action);
    renderRow('comedy', moviesData.comedy);
    renderRow('documentary', moviesData.documentary);
}

// Renderizza una riga di film normale
function renderRow(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = movies.map(movie => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}">
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/250x140/333/666?text=${encodeURIComponent(movie.title)}'">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <div class="card-meta">
                    <span>${movie.match}% Match</span>
                    <span>${movie.year}</span>
                </div>
                <div class="card-buttons">
                    <button class="card-btn play"><i class="fas fa-play"></i></button>
                    <button class="card-btn"><i class="fas fa-plus"></i></button>
                    <button class="card-btn"><i class="fas fa-thumbs-up"></i></button>
                    <button class="card-btn info"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    // Aggiungi event listener alle card
    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset));
    });
}

// Renderizza la riga Top 10
function renderTop10(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = movies.slice(0, 10).map((movie, index) => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}">
            <span class="number">${index + 1}</span>
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/130x180/333/666?text=${encodeURIComponent(movie.title)}'">
        </div>
    `).join('');

    // Aggiungi event listener alle card
    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset));
    });
}

// Gestione pulsanti di scroll
function setupScrollButtons() {
    document.querySelectorAll('.row-wrapper').forEach(wrapper => {
        const content = wrapper.querySelector('.row-content');
        const leftBtn = wrapper.querySelector('.scroll-left');
        const rightBtn = wrapper.querySelector('.scroll-right');

        if (leftBtn) {
            leftBtn.addEventListener('click', () => {
                content.scrollBy({ left: -600, behavior: 'smooth' });
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener('click', () => {
                content.scrollBy({ left: 600, behavior: 'smooth' });
            });
        }
    });
}

// Gestione Modal
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Chiudi con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(data) {
    const modal = document.getElementById('modal');
    const modalHeader = document.getElementById('modal-header');
    const modalDescription = document.getElementById('modal-description');

    modalHeader.style.backgroundImage = `linear-gradient(to top, #181818, transparent), url('${data.image}')`;
    modalDescription.textContent = descriptions[data.id] || descriptions.default;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Funzione di ricerca (placeholder per future implementazioni)
function searchMovies(query) {
    const allMovies = [
        ...moviesData.trending,
        ...moviesData.top10,
        ...moviesData.action,
        ...moviesData.comedy,
        ...moviesData.documentary
    ];

    return allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
}

// Aggiungi alla lista (placeholder)
function addToList(movieId) {
    console.log(`Film ${movieId} aggiunto alla lista`);
    // Qui si potrebbe implementare la logica di salvataggio
}

// Gestione like (placeholder)
function likeMovie(movieId) {
    console.log(`Like per il film ${movieId}`);
    // Qui si potrebbe implementare la logica di rating
}

// Riproduci film (placeholder)
function playMovie(movieId) {
    console.log(`Riproduzione film ${movieId}`);
    // Qui si potrebbe implementare il video player
}

// Console log per debug
console.log('🎬 Netflix Clone caricato con successo!');
console.log('📊 Film caricati:', Object.values(moviesData).flat().length);
