// Netflix Clone - JavaScript

// Movie Data (simulando un database)
const moviesData = {
    trending: [
        { id: 1, title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", year: 2022, match: 98, genre: "Thriller, Sci-Fi", cast: "Winona Ryder, David Harbour", rating: 0 },
        { id: 2, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", year: 2023, match: 95, genre: "Fantasy, Avventura", cast: "Henry Cavill, Anya Chalotra", rating: 0 },
        { id: 3, title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", year: 2021, match: 97, genre: "Dramma, Thriller", cast: "Lee Jung-jae, Park Hae-soo", rating: 0 },
        { id: 4, title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", year: 2021, match: 96, genre: "Thriller, Crimine", cast: "Álvaro Morte, Úrsula Corberó", rating: 0 },
        { id: 5, title: "Dark", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", year: 2020, match: 94, genre: "Mistero, Sci-Fi", cast: "Louis Hofmann, Karoline Eichhorn", rating: 0 },
        { id: 6, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", year: 2013, match: 99, genre: "Crimine, Dramma", cast: "Bryan Cranston, Aaron Paul", rating: 0 },
        { id: 7, title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", year: 2022, match: 93, genre: "Dramma, Crimine", cast: "Cillian Murphy, Paul Anderson", rating: 0 },
        { id: 8, title: "Narcos", image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg", year: 2017, match: 92, genre: "Crimine, Dramma", cast: "Wagner Moura, Pedro Pascal", rating: 0 },
        { id: 9, title: "The Crown", image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg", year: 2023, match: 91, genre: "Dramma, Storico", cast: "Imelda Staunton, Olivia Colman", rating: 0 },
        { id: 10, title: "Ozark", image: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fvw9EAprHPS1bOxPsL.jpg", year: 2022, match: 94, genre: "Crimine, Dramma", cast: "Jason Bateman, Laura Linney", rating: 0 }
    ],
    top10: [
        { id: 11, title: "Wednesday", image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", year: 2022, match: 98, genre: "Mistero, Commedia Nera", cast: "Jenna Ortega, Catherine Zeta-Jones", rating: 0 },
        { id: 12, title: "You", image: "https://image.tmdb.org/t/p/w500/7bEYwjUvlJsib1TxMg6zaJcVd.jpg", year: 2023, match: 95, genre: "Thriller, Dramma", cast: "Penn Badgley, Tati Gabrielle", rating: 0 },
        { id: 13, title: "Cobra Kai", image: "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg", year: 2023, match: 93, genre: "Azione, Dramma", cast: "Ralph Macchio, William Zabka", rating: 0 },
        { id: 14, title: "Emily in Paris", image: "https://image.tmdb.org/t/p/w500/AnJOcrRc3SWy4LmRRQRhQmOn5hl.jpg", year: 2023, match: 88, genre: "Commedia, Romantico", cast: "Lily Collins, Philippine Leroy-Beaulieu", rating: 0 },
        { id: 15, title: "The Night Agent", image: "https://image.tmdb.org/t/p/w500/lqS7K1bKp6I2e9BIxCKwFxPzGVo.jpg", year: 2023, match: 91, genre: "Thriller, Azione", cast: "Gabriel Basso, Hong Chau", rating: 0 },
        { id: 16, title: "Ginny & Georgia", image: "https://image.tmdb.org/t/p/w500/2H7pN0RJpxG27PqnGrNxVf3lIWl.jpg", year: 2023, match: 87, genre: "Commedia, Dramma", cast: "Antonia Gentry, Brianne Howey", rating: 0 },
        { id: 17, title: "The Diplomat", image: "https://image.tmdb.org/t/p/w500/pQH8qb4lnvHH3bazyEGMqhw4nKi.jpg", year: 2023, match: 89, genre: "Thriller, Dramma", cast: "Keri Russell, Rufus Sewell", rating: 0 },
        { id: 18, title: "Outer Banks", image: "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiTe.jpg", year: 2023, match: 90, genre: "Avventura, Mistero", cast: "Chase Stokes, Madelyn Cline", rating: 0 },
        { id: 19, title: "Never Have I Ever", image: "https://image.tmdb.org/t/p/w500/3NVMzDK8e2ByRPKBVuJJyYuQH.jpg", year: 2023, match: 86, genre: "Commedia, Dramma", cast: "Maitreyi Ramakrishnan, Darren Barnet", rating: 0 },
        { id: 20, title: "All of Us Are Dead", image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg", year: 2022, match: 94, genre: "Azione, Horror", cast: "Park Ji-hu, Cho Yi-hyun", rating: 0 }
    ],
    action: [
        { id: 21, title: "Extraction", image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", year: 2023, match: 92, genre: "Azione, Thriller", cast: "Chris Hemsworth, Randeep Hooda", rating: 0 },
        { id: 22, title: "The Gray Man", image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpW5Pz.jpg", year: 2022, match: 89, genre: "Azione, Thriller", cast: "Ryan Gosling, Chris Evans", rating: 0 },
        { id: 23, title: "Red Notice", image: "https://image.tmdb.org/t/p/w500/lAXONicR4mmPq2QbmIPjPj.jpg", year: 2021, match: 87, genre: "Azione, Commedia", cast: "Dwayne Johnson, Ryan Reynolds", rating: 0 },
        { id: 24, title: "6 Underground", image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5Gt3d.jpg", year: 2019, match: 85, genre: "Azione, Avventura", cast: "Ryan Reynolds, Corey Hawkins", rating: 0 },
        { id: 25, title: "Army of the Dead", image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvMJvR.jpg", year: 2021, match: 88, genre: "Azione, Horror", cast: "Dave Bautista, Ella Purnell", rating: 0 },
        { id: 26, title: "Triple Frontier", image: "https://image.tmdb.org/t/p/w500/vO8Vuy4E8DvFtfH2rQPC4c2FPh.jpg", year: 2019, match: 86, genre: "Azione, Thriller", cast: "Ben Affleck, Oscar Isaac", rating: 0 },
        { id: 27, title: "Kate", image: "https://image.tmdb.org/t/p/w500/uNjH9Sdfz0rh4G.jpg", year: 2021, match: 84, genre: "Azione, Thriller", cast: "Mary Elizabeth Winstead", rating: 0 },
        { id: 28, title: "The Old Guard", image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrs.jpg", year: 2020, match: 90, genre: "Azione, Fantasy", cast: "Charlize Theron, Kiki Layne", rating: 0 },
        { id: 29, title: "Spenser Confidential", image: "https://image.tmdb.org/t/p/w500/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg", year: 2020, match: 83, genre: "Azione, Thriller", cast: "Mark Wahlberg, Winston Duke", rating: 0 },
        { id: 30, title: "Project Power", image: "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg", year: 2020, match: 85, genre: "Azione, Sci-Fi", cast: "Jamie Foxx, Joseph Gordon-Levitt", rating: 0 }
    ],
    comedy: [
        { id: 31, title: "Murder Mystery", image: "https://image.tmdb.org/t/p/w500/bj2i7dqSJ2E0EpKO0lJGnepwHji.jpg", year: 2023, match: 86, genre: "Commedia, Mistero", cast: "Adam Sandler, Jennifer Aniston", rating: 0 },
        { id: 32, title: "Don't Look Up", image: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAODO9uxZcMVv2r.jpg", year: 2021, match: 88, genre: "Commedia, Dramma", cast: "Leonardo DiCaprio, Jennifer Lawrence", rating: 0 },
        { id: 33, title: "Glass Onion", image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg", year: 2022, match: 93, genre: "Mistero, Commedia", cast: "Daniel Craig, Janelle Monáe", rating: 0 },
        { id: 34, title: "The Adam Project", image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg", year: 2022, match: 87, genre: "Commedia, Sci-Fi", cast: "Ryan Reynolds, Mark Ruffalo", rating: 0 },
        { id: 35, title: "Senior Year", image: "https://image.tmdb.org/t/p/w500/cPj0jJYbL6fRqLj9z1jLNMsYcn.jpg", year: 2022, match: 82, genre: "Commedia, Romantico", cast: "Rebel Wilson, Kathryn Hahn", rating: 0 },
        { id: 36, title: "Do Revenge", image: "https://image.tmdb.org/t/p/w500/gpXRp3gx8M5V3UYs2dHvfGcOlb.jpg", year: 2022, match: 85, genre: "Commedia, Dramma", cast: "Camila Mendes, Maya Hawke", rating: 0 },
        { id: 37, title: "The Lovebirds", image: "https://image.tmdb.org/t/p/w500/5jdLnvALCpK1NW.jpg", year: 2020, match: 84, genre: "Commedia, Romantico", cast: "Issa Rae, Kumail Nanjiani", rating: 0 },
        { id: 38, title: "Eurovision", image: "https://image.tmdb.org/t/p/w500/9zrbgYyFvwH8syGb29NJUOL5M.jpg", year: 2020, match: 89, genre: "Commedia, Musicale", cast: "Will Ferrell, Rachel McAdams", rating: 0 },
        { id: 39, title: "We Have a Ghost", image: "https://image.tmdb.org/t/p/w500/4Imsu37FTRfvt1bdfYbNjmwn.jpg", year: 2023, match: 81, genre: "Commedia, Fantastico", cast: "David Harbour, Jenna Ortega", rating: 0 },
        { id: 40, title: "You People", image: "https://image.tmdb.org/t/p/w500/yFP4z8KZxJP9QrHRZz0N.jpg", year: 2023, match: 83, genre: "Commedia, Romantico", cast: "Jonah Hill, Lauren London", rating: 0 }
    ],
    documentary: [
        { id: 41, title: "Our Planet", image: "https://image.tmdb.org/t/p/w500/kl4bHE3JLK6lsGPnHyaR9bxqB6l.jpg", year: 2019, match: 97, genre: "Documentario, Natura", cast: "David Attenborough", rating: 0 },
        { id: 42, title: "The Social Dilemma", image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", year: 2020, match: 95, genre: "Documentario, Tecnologia", cast: "Tristan Harris, Jaron Lanier", rating: 0 },
        { id: 43, title: "My Octopus Teacher", image: "https://image.tmdb.org/t/p/w500/uNjH9Sdfz0rh4G.jpg", year: 2020, match: 96, genre: "Documentario, Natura", cast: "Craig Foster", rating: 0 },
        { id: 44, title: "Formula 1: Drive to Survive", image: "https://image.tmdb.org/t/p/w500/5ZA91jkNKI2FaB5Gb.jpg", year: 2023, match: 94, genre: "Documentario, Sport", cast: "Vari piloti F1", rating: 0 },
        { id: 45, title: "The Tinder Swindler", image: "https://image.tmdb.org/t/p/w500/4kLw8vSJL.jpg", year: 2022, match: 91, genre: "Documentario, Crimine", cast: "Simon Leviev", rating: 0 },
        { id: 46, title: "14 Peaks", image: "https://image.tmdb.org/t/p/w500/8d2GJEy.jpg", year: 2021, match: 93, genre: "Documentario, Avventura", cast: "Nirmal Purja", rating: 0 },
        { id: 47, title: "Seaspiracy", image: "https://image.tmdb.org/t/p/w500/7Q3bYW.jpg", year: 2021, match: 88, genre: "Documentario, Ambiente", cast: "Ali Tabrizi", rating: 0 },
        { id: 48, title: "The Last Dance", image: "https://image.tmdb.org/t/p/w500/oVg.jpg", year: 2020, match: 98, genre: "Documentario, Sport", cast: "Michael Jordan, Phil Jackson", rating: 0 },
        { id: 49, title: "Inside Job", image: "https://image.tmdb.org/t/p/w500/abcde.jpg", year: 2021, match: 87, genre: "Documentario, Finanza", cast: "Vari esperti", rating: 0 },
        { id: 50, title: "American Murder", image: "https://image.tmdb.org/t/p/w500/12345.jpg", year: 2020, match: 89, genre: "Documentario, Crimine", cast: "Chris Watts", rating: 0 }
    ]
};

// Descrizioni per i film
const descriptions = {
    1: "Quando un ragazzino scompare, una piccola città scopre una storia che coinvolge esperimenti segreti, forze soprannaturali terrificanti e una strana bambina.",
    2: "Il cacciatore di mostri Geralt di Rivia lotta per trovare il suo posto in un mondo in cui le persone spesso si dimostrano più malvagie delle bestie.",
    3: "Centinaia di persone disperate accettano un misterioso invito a partecipare a un gioco per bambini. Una posta in gioco allettante li attende, ma la posta è mortale.",
    default: "Una storia avvincente che ti terrà incollato allo schermo dall'inizio alla fine. Non perdertela!"
};

// Variabili globali
let currentGenreFilter = 'all';
let currentMovieId = null;
let myListItems = JSON.parse(localStorage.getItem('netflix-mylist')) || [];

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadAllRows();
    setupScrollButtons();
    setupModal();
    setupHeaderScroll();
    setupSearch();
    setupThemeToggle();
    setupGenreFilters();
    setupMyList();
}

// Funzione di ricerca
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const results = searchMovies(query);
        
        if (results.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = results.slice(0, 8).map(movie => `
                <div class="search-result-item" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}">
                    <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/40x60/333/666?text=${encodeURIComponent(movie.title)}'">
                    <div class="search-result-info">
                        <div class="search-result-title">${movie.title}</div>
                        <div class="search-result-year">${movie.year}</div>
                    </div>
                </div>
            `).join('');

            // Event listener per i risultati di ricerca
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    openModal(item.dataset);
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                    searchResults.innerHTML = '';
                });
            });
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<div class="search-result-item" style="cursor: default; pointer-events: none;">Nessun risultato trovato</div>';
        }
    });

    // Chiudi risultati quando clicchi fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            searchResults.classList.remove('active');
        }
    });
}

// Tema scuro/chiaro
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('netflix-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('netflix-theme', isLight ? 'light' : 'dark');
        themeToggle.innerHTML = `<i class="fas fa-${isLight ? 'sun' : 'moon'}"></i>`;
        Toast.show(`Tema ${isLight ? 'chiaro' : 'scuro'} attivato`, 'info', 2000);
    });
}

// Setup filtri per genere
function setupGenreFilters() {
    const genreButtons = document.querySelectorAll('.genre-btn');
    genreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            genreButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGenreFilter = btn.dataset.genre;
            loadAllRows();
        });
    });
}

// Filtra film per genere
function filterMoviesByGenre(movies, genre) {
    if (genre === 'all') return movies;
    return movies.filter(movie => movie.genre.includes(genre));
}

// Carica tutte le righe di contenuto
function loadAllRows() {
    const trendingFiltered = filterMoviesByGenre(moviesData.trending, currentGenreFilter);
    const top10Filtered = filterMoviesByGenre(moviesData.top10, currentGenreFilter);
    const actionFiltered = filterMoviesByGenre(moviesData.action, currentGenreFilter);
    const comedyFiltered = filterMoviesByGenre(moviesData.comedy, currentGenreFilter);
    const documentaryFiltered = filterMoviesByGenre(moviesData.documentary, currentGenreFilter);
    
    renderRow('trending', trendingFiltered);
    renderTop10('top10', top10Filtered);
    renderRow('action', actionFiltered);
    renderRow('comedy', comedyFiltered);
    renderRow('documentary', documentaryFiltered);
}

// Renderizza una riga di film normale
function renderRow(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = movies.map(movie => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x140/333/666?text=${encodeURIComponent(movie.title)}'">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <div class="card-meta">
                    <span>${movie.match}% Match</span>
                    <span>${movie.year}</span>
                </div>
                <div class="card-buttons">
                    <button class="card-btn play"><i class="fas fa-play"></i></button>
                    <button class="card-btn add-to-list"><i class="fas fa-plus"></i></button>
                    <button class="card-btn"><i class="fas fa-thumbs-up"></i></button>
                    <button class="card-btn info"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    // Aggiungi event listener alle card
    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset));
        const addBtn = card.querySelector('.add-to-list');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addMovieToList(card.dataset);
            });
        }
    });
}

// Renderizza la riga Top 10
function renderTop10(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = movies.slice(0, 10).map((movie, index) => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}">
            <span class="number">${index + 1}</span>
            <img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/130x180/333/666?text=${encodeURIComponent(movie.title)}'">
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

    // Setup star rating
    setupStarRating();
}

function setupStarRating() {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            updateStarRating(rating);
        });
    });
}

function updateStarRating(rating) {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach(star => {
        if (star.dataset.rating <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    const ratingText = document.getElementById('rating-text');
    const messages = {
        1: '😞 Non mi è piaciuto',
        2: '😐 Non male',
        3: '😊 Buono',
        4: '😃 Molto buono',
        5: '🤩 Straordinario!'
    };
    ratingText.textContent = messages[rating];
    
    // Salva il rating nel localStorage
    if (currentMovieId) {
        const ratings = JSON.parse(localStorage.getItem('netflix-ratings')) || {};
        ratings[currentMovieId] = rating;
        localStorage.setItem('netflix-ratings', JSON.stringify(ratings));
    }
}

function openModal(data) {
    currentMovieId = data.id;
    const modal = document.getElementById('modal');
    const modalHeader = document.getElementById('modal-header');
    const modalDescription = document.getElementById('modal-description');
    const modalGenre = document.getElementById('modal-genre');
    const modalCast = document.getElementById('modal-cast');
    const modalMatch = document.getElementById('modal-match');
    const modalYear = document.getElementById('modal-year');

    modalHeader.style.backgroundImage = `linear-gradient(to top, #181818, transparent), url('${data.image}')`;
    modalDescription.textContent = descriptions[data.id] || descriptions.default;
    modalGenre.textContent = data.genre || 'Genere non disponibile';
    modalCast.textContent = data.cast || 'Cast non disponibile';
    
    // Aggiorna anche le info di match e anno se presenti nel data
    if (data.match) {
        modalMatch.textContent = `${data.match}% Match`;
    }
    if (data.year) {
        modalYear.textContent = data.year;
    }
    
    // Carica il rating precedente se esiste
    const ratings = JSON.parse(localStorage.getItem('netflix-ratings')) || {};
    const previousRating = ratings[data.id] || 0;
    updateStarRating(previousRating);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentMovieId = null;
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

// Setup My List
function setupMyList() {
    const myListLink = document.getElementById('my-list-link');
    const myListSection = document.getElementById('my-list-section');
    const clearBtn = document.getElementById('clear-list-btn');

    myListLink.addEventListener('click', (e) => {
        e.preventDefault();
        myListSection.style.display = myListSection.style.display === 'none' ? 'block' : 'none';
        if (myListSection.style.display === 'block') {
            renderMyList();
            myListSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    clearBtn.addEventListener('click', () => {
        if (confirm('Sei sicuro di voler svuotare la lista?')) {
            myListItems = [];
            localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
            renderMyList();
            Toast.show('Lista svuotata', 'info');
        }
    });
}

function addMovieToList(movieData) {
    const exists = myListItems.find(item => item.id === movieData.id);
    if (exists) {
        Toast.show('Film già nella tua lista', 'info');
        return;
    }
    
    myListItems.push(movieData);
    localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
    Toast.show(`${movieData.title} aggiunto a La mia lista!`, 'success');
}

function renderMyList() {
    const container = document.getElementById('my-list');
    if (myListItems.length === 0) {
        container.innerHTML = '<div class="empty-state">La tua lista è vuota. Aggiungi film cliccando il pulsante <i class="fas fa-plus"></i></div>';
        return;
    }
    
    container.innerHTML = myListItems.map(movie => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <div class="card-buttons">
                    <button class="card-btn remove-from-list" title="Rimuovi"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset));
        const removeBtn = card.querySelector('.remove-from-list');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = card.dataset.id;
                myListItems = myListItems.filter(item => item.id !== id);
                localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
                renderMyList();
                Toast.show('Film rimosso dalla lista', 'info');
            });
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
function addToList() {
    if (currentMovieId) {
        const allMovies = [...moviesData.trending, ...moviesData.top10, ...moviesData.action, ...moviesData.comedy, ...moviesData.documentary];
        const movie = allMovies.find(m => m.id == currentMovieId);
        if (movie) {
            addMovieToList(movie);
        }
    }
}

// Gestione like (placeholder)
function likeMovie() {
    Toast.show('Mi piace salvato!', 'success');
}

// Riproduci film (placeholder)
function playMovie() {
    Toast.show('Avvio riproduzione...', 'info');
}

// Sistema di notifiche Toast
class Toast {
    static show(message, type = 'success', duration = 3000) {
        const container = Toast.getContainer();
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Animazione di entrata
        setTimeout(() => toast.classList.add('show'), 10);

        // Rimozione automatica
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    static getContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }
}

// Console log per debug
console.log('🎬 Netflix Clone caricato con successo!');
console.log('📊 Film caricati:', Object.values(moviesData).flat().length);
    top10: [
        { id: 11, title: "Wednesday", image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", year: 2022, match: 98, genre: "Mistero, Commedia Nera", cast: "Jenna Ortega, Catherine Zeta-Jones" },
        { id: 12, title: "You", image: "https://image.tmdb.org/t/p/w500/7bEYwjUvlJsib1TxMg6zaJcVd.jpg", year: 2023, match: 95, genre: "Thriller, Dramma", cast: "Penn Badgley, Tati Gabrielle" },
        { id: 13, title: "Cobra Kai", image: "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg", year: 2023, match: 93, genre: "Azione, Dramma", cast: "Ralph Macchio, William Zabka" },
        { id: 14, title: "Emily in Paris", image: "https://image.tmdb.org/t/p/w500/AnJOcrRc3SWy4LmRRQRhQmOn5hl.jpg", year: 2023, match: 88, genre: "Commedia, Romantico", cast: "Lily Collins, Philippine Leroy-Beaulieu" },
        { id: 15, title: "The Night Agent", image: "https://image.tmdb.org/t/p/w500/lqS7K1bKp6I2e9BIxCKwFxPzGVo.jpg", year: 2023, match: 91, genre: "Thriller, Azione", cast: "Gabriel Basso, Hong Chau" },
        { id: 16, title: "Ginny & Georgia", image: "https://image.tmdb.org/t/p/w500/2H7pN0RJpxG27PqnGrNxVf3lIWl.jpg", year: 2023, match: 87, genre: "Commedia, Dramma", cast: "Antonia Gentry, Brianne Howey" },
        { id: 17, title: "The Diplomat", image: "https://image.tmdb.org/t/p/w500/pQH8qb4lnvHH3bazyEGMqhw4nKi.jpg", year: 2023, match: 89, genre: "Thriller, Dramma", cast: "Keri Russell, Rufus Sewell" },
        { id: 18, title: "Outer Banks", image: "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiTe.jpg", year: 2023, match: 90, genre: "Avventura, Mistero", cast: "Chase Stokes, Madelyn Cline" },
        { id: 19, title: "Never Have I Ever", image: "https://image.tmdb.org/t/p/w500/3NVMzDK8e2ByRPKBVuJJyYuQH.jpg", year: 2023, match: 86, genre: "Commedia, Dramma", cast: "Maitreyi Ramakrishnan, Darren Barnet" },
        { id: 20, title: "All of Us Are Dead", image: "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg", year: 2022, match: 94, genre: "Azione, Horror", cast: "Park Ji-hu, Cho Yi-hyun" }
    ],
    action: [
        { id: 21, title: "Extraction", image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg", year: 2023, match: 92, genre: "Azione, Thriller", cast: "Chris Hemsworth, Randeep Hooda" },
        { id: 22, title: "The Gray Man", image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpW5Pz.jpg", year: 2022, match: 89, genre: "Azione, Thriller", cast: "Ryan Gosling, Chris Evans" },
        { id: 23, title: "Red Notice", image: "https://image.tmdb.org/t/p/w500/lAXONicR4mmPq2QbmIPjPj.jpg", year: 2021, match: 87, genre: "Azione, Commedia", cast: "Dwayne Johnson, Ryan Reynolds" },
        { id: 24, title: "6 Underground", image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5Gt3d.jpg", year: 2019, match: 85, genre: "Azione, Avventura", cast: "Ryan Reynolds, Corey Hawkins" },
        { id: 25, title: "Army of the Dead", image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvMJvR.jpg", year: 2021, match: 88, genre: "Azione, Horror", cast: "Dave Bautista, Ella Purnell" },
        { id: 26, title: "Triple Frontier", image: "https://image.tmdb.org/t/p/w500/vO8Vuy4E8DvFtfH2rQPC4c2FPh.jpg", year: 2019, match: 86, genre: "Azione, Thriller", cast: "Ben Affleck, Oscar Isaac" },
        { id: 27, title: "Kate", image: "https://image.tmdb.org/t/p/w500/uJDfMmXar6Fw5aZU3J9X0Y8WPNQ.jpg", year: 2021, match: 84, genre: "Azione, Thriller", cast: "Mary Elizabeth Winstead" },
        { id: 28, title: "The Old Guard", image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrs.jpg", year: 2020, match: 90, genre: "Azione, Fantasy", cast: "Charlize Theron, Kiki Layne" },
        { id: 29, title: "Spenser Confidential", image: "https://image.tmdb.org/t/p/w500/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg", year: 2020, match: 83, genre: "Azione, Thriller", cast: "Mark Wahlberg, Winston Duke" },
        { id: 30, title: "Project Power", image: "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg", year: 2020, match: 85, genre: "Azione, Sci-Fi", cast: "Jamie Foxx, Joseph Gordon-Levitt" }
    ],
    comedy: [
        { id: 31, title: "Murder Mystery", image: "https://image.tmdb.org/t/p/w500/bj2i7dqSJ2E0EpKO0lJGnepwHji.jpg", year: 2023, match: 86, genre: "Commedia, Mistero", cast: "Adam Sandler, Jennifer Aniston" },
        { id: 32, title: "Don't Look Up", image: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAODO9uxZcMVv2r.jpg", year: 2021, match: 88, genre: "Commedia, Dramma", cast: "Leonardo DiCaprio, Jennifer Lawrence" },
        { id: 33, title: "Glass Onion", image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg", year: 2022, match: 93, genre: "Mistero, Commedia", cast: "Daniel Craig, Janelle Monáe" },
        { id: 34, title: "The Adam Project", image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg", year: 2022, match: 87, genre: "Commedia, Sci-Fi", cast: "Ryan Reynolds, Mark Ruffalo" },
        { id: 35, title: "Senior Year", image: "https://image.tmdb.org/t/p/w500/cPj0jJYbL6fRqLj9z1jLNMsYcn.jpg", year: 2022, match: 82, genre: "Commedia, Romantico", cast: "Rebel Wilson, Kathryn Hahn" },
        { id: 36, title: "Do Revenge", image: "https://image.tmdb.org/t/p/w500/gpXRp3gx8M5V3UYs2dHvfGcOlb.jpg", year: 2022, match: 85, genre: "Commedia, Dramma", cast: "Camila Mendes, Maya Hawke" },
        { id: 37, title: "The Lovebirds", image: "https://image.tmdb.org/t/p/w500/5jdLnvALCpK1NW.jpg", year: 2020, match: 84, genre: "Commedia, Romantico", cast: "Issa Rae, Kumail Nanjiani" },
        { id: 38, title: "Eurovision", image: "https://image.tmdb.org/t/p/w500/9zrbgYyFvwH8syGb29NJUOL5M.jpg", year: 2020, match: 89, genre: "Commedia, Musicale", cast: "Will Ferrell, Rachel McAdams" },
        { id: 39, title: "We Have a Ghost", image: "https://image.tmdb.org/t/p/w500/4Imsu37FTRfvt1bdfYbNjmwn.jpg", year: 2023, match: 81, genre: "Commedia, Fantastico", cast: "David Harbour, Jenna Ortega" },
        { id: 40, title: "You People", image: "https://image.tmdb.org/t/p/w500/yFP4z8KZxJP9QrHRZz0N.jpg", year: 2023, match: 83, genre: "Commedia, Romantico", cast: "Jonah Hill, Lauren London" }
    ],
    documentary: [
        { id: 41, title: "Our Planet", image: "https://image.tmdb.org/t/p/w500/kl4bHE3JLK6lsGPnHyaR9bxqB6l.jpg", year: 2019, match: 97, genre: "Documentario, Natura", cast: "David Attenborough" },
        { id: 42, title: "The Social Dilemma", image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", year: 2020, match: 95, genre: "Documentario, Tecnologia", cast: "Tristan Harris, Jaron Lanier" },
        { id: 43, title: "My Octopus Teacher", image: "https://image.tmdb.org/t/p/w500/uNjH9Sdfz0rh4G.jpg", year: 2020, match: 96, genre: "Documentario, Natura", cast: "Craig Foster" },
        { id: 44, title: "Formula 1: Drive to Survive", image: "https://image.tmdb.org/t/p/w500/5ZA91jkNKI2FaB5Gb.jpg", year: 2023, match: 94, genre: "Documentario, Sport", cast: "Vari piloti F1" },
        { id: 45, title: "The Tinder Swindler", image: "https://image.tmdb.org/t/p/w500/4kLw8vSJL.jpg", year: 2022, match: 91, genre: "Documentario, Crimine", cast: "Simon Leviev" },
        { id: 46, title: "14 Peaks", image: "https://image.tmdb.org/t/p/w500/8d2GJEy.jpg", year: 2021, match: 93, genre: "Documentario, Avventura", cast: "Nirmal Purja" },
        { id: 47, title: "Seaspiracy", image: "https://image.tmdb.org/t/p/w500/7Q3bYW.jpg", year: 2021, match: 88, genre: "Documentario, Ambiente", cast: "Ali Tabrizi" },
        { id: 48, title: "The Last Dance", image: "https://image.tmdb.org/t/p/w500/oVg.jpg", year: 2020, match: 98, genre: "Documentario, Sport", cast: "Michael Jordan, Phil Jackson" },
        { id: 49, title: "Inside Job", image: "https://image.tmdb.org/t/p/w500/abcde.jpg", year: 2021, match: 87, genre: "Documentario, Finanza", cast: "Vari esperti" },
        { id: 50, title: "American Murder", image: "https://image.tmdb.org/t/p/w500/12345.jpg", year: 2020, match: 89, genre: "Documentario, Crimine", cast: "Chris Watts" }
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
    setupSearch();
    setupThemeToggle();
}

// Funzione di ricerca
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const results = searchMovies(query);
        
        if (results.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = results.slice(0, 8).map(movie => `
                <div class="search-result-item" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}">
                    <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/40x60/333/666?text=${encodeURIComponent(movie.title)}'">
                    <div class="search-result-info">
                        <div class="search-result-title">${movie.title}</div>
                        <div class="search-result-year">${movie.year}</div>
                    </div>
                </div>
            `).join('');

            // Event listener per i risultati di ricerca
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    openModal(item.dataset);
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                    searchResults.innerHTML = '';
                });
            });
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<div class="search-result-item" style="cursor: default; pointer-events: none;">Nessun risultato trovato</div>';
        }
    });

    // Chiudi risultati quando clicchi fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            searchResults.classList.remove('active');
        }
    });
}

// Tema scuro/chiaro
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('netflix-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('netflix-theme', isLight ? 'light' : 'dark');
        themeToggle.innerHTML = `<i class="fas fa-${isLight ? 'sun' : 'moon'}"></i>`;
        Toast.show(`Tema ${isLight ? 'chiaro' : 'scuro'} attivato`, 'info', 2000);
    });
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
    const modalGenre = document.getElementById('modal-genre');
    const modalCast = document.getElementById('modal-cast');
    const modalMatch = document.getElementById('modal-match');
    const modalYear = document.getElementById('modal-year');

    modalHeader.style.backgroundImage = `linear-gradient(to top, #181818, transparent), url('${data.image}')`;
    modalDescription.textContent = descriptions[data.id] || descriptions.default;
    modalGenre.textContent = data.genre || 'Genere non disponibile';
    modalCast.textContent = data.cast || 'Cast non disponibile';
    
    // Aggiorna anche le info di match e anno se presenti nel data
    if (data.match) {
        modalMatch.textContent = `${data.match}% Match`;
    }
    if (data.year) {
        modalYear.textContent = data.year;
    }
    
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
    Toast.show('Aggiunto alla lista!', 'success');
}

// Gestione like (placeholder)
function likeMovie(movieId) {
    Toast.show('Mi piace salvato!', 'success');
}

// Riproduci film (placeholder)
function playMovie(movieId) {
    Toast.show('Avvio riproduzione...', 'info');
}

// Sistema di notifiche Toast
class Toast {
    static show(message, type = 'success', duration = 3000) {
        const container = Toast.getContainer();
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // Animazione di entrata
        setTimeout(() => toast.classList.add('show'), 10);

        // Rimozione automatica
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    static getContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }
}

// Console log per debug
console.log('🎬 Netflix Clone caricato con successo!');
console.log('📊 Film caricati:', Object.values(moviesData).flat().length);
