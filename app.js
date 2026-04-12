// Netflix Clone - JavaScript (clean rewrite)

const moviesData = {
    trending: [
        { id: 1, title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", year: 2022, match: 98, genre: "Thriller, Sci-Fi", cast: "Winona Ryder, David Harbour" },
        { id: 2, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", year: 2023, match: 95, genre: "Fantasy, Avventura", cast: "Henry Cavill, Anya Chalotra" },
        { id: 3, title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", year: 2021, match: 97, genre: "Dramma, Thriller", cast: "Lee Jung-jae, Park Hae-soo" },
        { id: 4, title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", year: 2021, match: 96, genre: "Thriller, Crimine", cast: "Álvaro Morte, Úrsula Corberó" },
        { id: 5, title: "Dark", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", year: 2020, match: 94, genre: "Mistero, Sci-Fi", cast: "Louis Hofmann, Karoline Eichhorn" },
        { id: 6, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", year: 2013, match: 99, genre: "Crimine, Dramma", cast: "Bryan Cranston, Aaron Paul" },
        { id: 7, title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", year: 2022, match: 93, genre: "Dramma, Crimine", cast: "Cillian Murphy, Paul Anderson" },
        { id: 8, title: "Narcos", image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg", year: 2017, match: 92, genre: "Crimine, Dramma", cast: "Wagner Moura, Pedro Pascal" },
        { id: 9, title: "The Crown", image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg", year: 2023, match: 91, genre: "Dramma, Storico", cast: "Imelda Staunton, Olivia Colman" },
        { id: 10, title: "Ozark", image: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fvw9EAprHPS1bOxPsL.jpg", year: 2022, match: 94, genre: "Crimine, Dramma", cast: "Jason Bateman, Laura Linney" }
    ],
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

// Metadata aggiuntivi (extra info mostrati nel modal)
const extraInfo = {
    1: { duration: "4 stagioni", director: "The Duffer Brothers", country: "USA", imdb: 8.7, ageRating: "16+", languages: "Italiano, Inglese", seasons: 4 },
    2: { duration: "3 stagioni", director: "Lauren Schmidt Hissrich", country: "Polonia/USA", imdb: 8.2, ageRating: "16+", languages: "Italiano, Inglese, Polacco", seasons: 3 },
    3: { duration: "2 stagioni", director: "Hwang Dong-hyuk", country: "Corea del Sud", imdb: 8.0, ageRating: "18+", languages: "Italiano, Coreano", seasons: 2 },
    4: { duration: "5 parti", director: "Álex Pina", country: "Spagna", imdb: 8.2, ageRating: "16+", languages: "Italiano, Spagnolo", seasons: 5 },
    5: { duration: "3 stagioni", director: "Baran bo Odar", country: "Germania", imdb: 8.7, ageRating: "16+", languages: "Italiano, Tedesco", seasons: 3 },
    6: { duration: "5 stagioni", director: "Vince Gilligan", country: "USA", imdb: 9.5, ageRating: "18+", languages: "Italiano, Inglese", seasons: 5 },
    7: { duration: "6 stagioni", director: "Steven Knight", country: "UK", imdb: 8.8, ageRating: "16+", languages: "Italiano, Inglese", seasons: 6 },
    8: { duration: "3 stagioni", director: "Chris Brancato", country: "USA/Colombia", imdb: 8.8, ageRating: "18+", languages: "Italiano, Inglese, Spagnolo", seasons: 3 },
    9: { duration: "6 stagioni", director: "Peter Morgan", country: "UK", imdb: 8.7, ageRating: "14+", languages: "Italiano, Inglese", seasons: 6 },
    10: { duration: "4 stagioni", director: "Bill Dubuque", country: "USA", imdb: 8.5, ageRating: "18+", languages: "Italiano, Inglese", seasons: 4 },
    11: { duration: "2 stagioni", director: "Tim Burton", country: "USA", imdb: 8.1, ageRating: "14+", languages: "Italiano, Inglese", seasons: 2 },
    33: { duration: "2h 19m", director: "Rian Johnson", country: "USA", imdb: 7.1, ageRating: "14+", languages: "Italiano, Inglese", seasons: null },
    41: { duration: "8 episodi", director: "Alastair Fothergill", country: "UK", imdb: 9.3, ageRating: "T", languages: "Italiano, Inglese", seasons: 1 }
};

function getExtras(id) {
    const e = extraInfo[id] || {};
    const numId = Number(id) || 0;
    const seed = numId * 7 % 30;
    return {
        duration: e.duration || `${1 + (seed % 2)}h ${25 + (seed % 35)}m`,
        director: e.director || "Vari registi",
        country: e.country || "Internazionale",
        imdb: e.imdb || (7 + ((seed % 20) / 10)).toFixed(1),
        ageRating: e.ageRating || (numId % 3 === 0 ? "18+" : numId % 2 === 0 ? "16+" : "14+"),
        languages: e.languages || "Italiano, Inglese",
        seasons: e.seasons !== undefined ? e.seasons : null
    };
}

const descriptions = {
    1: "Quando un ragazzino scompare, una piccola città scopre una storia che coinvolge esperimenti segreti, forze soprannaturali terrificanti e una strana bambina.",
    2: "Il cacciatore di mostri Geralt di Rivia lotta per trovare il suo posto in un mondo in cui le persone spesso si dimostrano più malvagie delle bestie.",
    3: "Centinaia di persone disperate accettano un misterioso invito a partecipare a un gioco per bambini. Una posta in gioco allettante li attende, ma la posta è mortale.",
    default: "Una storia avvincente che ti terrà incollato allo schermo dall'inizio alla fine. Non perdertela!"
};

// ===== State =====
let currentGenreFilter = 'all';
let currentMovieId = null;
let myListItems = JSON.parse(localStorage.getItem('netflix-mylist')) || [];
let continueWatching = JSON.parse(localStorage.getItem('netflix-continue')) || [];
let focusedRowIndex = 0;

const allMovies = () => Object.values(moviesData).flat();
const findMovie = (id) => allMovies().find(m => String(m.id) === String(id));
const isNew = (year) => Number(year) >= 2023;

// ===== Init =====
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    loadAllRows();
    setupScrollButtons();
    setupModal();
    setupHeaderScroll();
    setupSearch();
    setupThemeToggle();
    setupGenreFilters();
    setupMyList();
    setupSurprise();
    setupKeyboardNav();
    updateMyListCount();
    renderContinueWatching();
}

// ===== Rows =====
function loadAllRows() {
    renderRow('trending', filterByGenre(moviesData.trending));
    renderTop10('top10', filterByGenre(moviesData.top10));
    renderRow('action', filterByGenre(moviesData.action));
    renderRow('comedy', filterByGenre(moviesData.comedy));
    renderRow('documentary', filterByGenre(moviesData.documentary));
}

function filterByGenre(movies) {
    if (currentGenreFilter === 'all') return movies;
    return movies.filter(m => m.genre.includes(currentGenreFilter));
}

function cardHTML(movie, opts = {}) {
    const newBadge = isNew(movie.year) ? '<span class="new-badge">Nuovo</span>' : '';
    const progress = opts.progress ? `<div class="progress-bar"><div class="progress-bar-fill" style="width:${opts.progress}%"></div></div>` : '';
    return `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}" tabindex="0">
            ${newBadge}
            <img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x140/333/666?text=${encodeURIComponent(movie.title)}'">
            ${progress}
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
        </div>`;
}

function attachCardHandlers(container) {
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

function renderRow(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = movies.map(m => cardHTML(m)).join('');
    attachCardHandlers(container);
}

function renderTop10(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = movies.slice(0, 10).map((movie, index) => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}" tabindex="0">
            <span class="number">${index + 1}</span>
            <img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/130x180/333/666?text=${encodeURIComponent(movie.title)}'">
        </div>
    `).join('');
    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset));
    });
}

// ===== Continue Watching =====
function addToContinueWatching(movieId) {
    const movie = findMovie(movieId);
    if (!movie) return;
    continueWatching = continueWatching.filter(c => c.id !== movie.id);
    continueWatching.unshift({
        id: movie.id,
        title: movie.title,
        image: movie.image,
        genre: movie.genre,
        cast: movie.cast,
        year: movie.year,
        match: movie.match,
        progress: Math.floor(Math.random() * 70) + 10
    });
    continueWatching = continueWatching.slice(0, 10);
    localStorage.setItem('netflix-continue', JSON.stringify(continueWatching));
    renderContinueWatching();
}

function renderContinueWatching() {
    const section = document.getElementById('continue-section');
    const container = document.getElementById('continue-watching');
    if (!section || !container) return;
    if (continueWatching.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';
    container.innerHTML = continueWatching.map(m => cardHTML(m, { progress: m.progress })).join('');
    attachCardHandlers(container);
}

// ===== Search =====
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
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    openModal(item.dataset);
                    searchInput.value = '';
                    searchResults.classList.remove('active');
                });
            });
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<div class="search-result-item" style="cursor:default;pointer-events:none;">Nessun risultato trovato</div>';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) searchResults.classList.remove('active');
    });
}

function searchMovies(query) {
    const q = query.toLowerCase();
    return allMovies().filter(m => m.title.toLowerCase().includes(q) || m.cast.toLowerCase().includes(q));
}

// ===== Theme =====
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

// ===== Genre Filters =====
function setupGenreFilters() {
    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGenreFilter = btn.dataset.genre;
            loadAllRows();
        });
    });
}

// ===== Scroll Buttons =====
function setupScrollButtons() {
    document.querySelectorAll('.row-wrapper').forEach(wrapper => {
        const content = wrapper.querySelector('.row-content');
        wrapper.querySelector('.scroll-left')?.addEventListener('click', () => content.scrollBy({ left: -600, behavior: 'smooth' }));
        wrapper.querySelector('.scroll-right')?.addEventListener('click', () => content.scrollBy({ left: 600, behavior: 'smooth' }));
    });
}

// ===== Modal =====
function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    setupStarRating();
}

function setupStarRating() {
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.addEventListener('click', function() { updateStarRating(this.dataset.rating); });
    });
}

function updateStarRating(rating) {
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.classList.toggle('active', Number(star.dataset.rating) <= Number(rating));
    });
    const messages = { 1: '😞 Non mi è piaciuto', 2: '😐 Non male', 3: '😊 Buono', 4: '😃 Molto buono', 5: '🤩 Straordinario!' };
    document.getElementById('rating-text').textContent = messages[rating] || 'Valuta questo film';
    if (currentMovieId && rating) {
        const ratings = JSON.parse(localStorage.getItem('netflix-ratings')) || {};
        ratings[currentMovieId] = rating;
        localStorage.setItem('netflix-ratings', JSON.stringify(ratings));
    }
}

function openModal(data) {
    currentMovieId = data.id;
    const modal = document.getElementById('modal');
    modal.classList.remove('trailer-open');
    document.getElementById('modal-trailer').classList.remove('active');
    document.getElementById('modal-trailer').innerHTML = '';
    document.getElementById('modal-header').style.backgroundImage = `linear-gradient(to top, #181818, transparent), url('${data.image}')`;
    document.getElementById('modal-description').textContent = descriptions[data.id] || descriptions.default;
    document.getElementById('modal-genre').textContent = data.genre || 'Genere non disponibile';
    document.getElementById('modal-cast').textContent = data.cast || 'Cast non disponibile';
    if (data.match) document.getElementById('modal-match').textContent = `${data.match}% Match`;
    if (data.year) document.getElementById('modal-year').textContent = data.year;

    // Info extra
    const extras = getExtras(data.id);
    document.getElementById('modal-rating').textContent = extras.ageRating;
    document.getElementById('modal-duration').textContent = extras.duration;
    document.getElementById('modal-imdb').innerHTML = `<i class="fab fa-imdb"></i> ${extras.imdb}`;
    document.getElementById('modal-director').textContent = extras.director;
    document.getElementById('modal-country').textContent = extras.country;
    document.getElementById('modal-languages').textContent = extras.languages;
    const seasonsEl = document.getElementById('modal-seasons');
    if (extras.seasons) {
        seasonsEl.textContent = `${extras.seasons} stagion${extras.seasons === 1 ? 'e' : 'i'}`;
        seasonsEl.parentElement.style.display = '';
    } else {
        seasonsEl.parentElement.style.display = 'none';
    }

    renderSimilar(data);

    const ratings = JSON.parse(localStorage.getItem('netflix-ratings')) || {};
    updateStarRating(ratings[data.id] || 0);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    addToContinueWatching(data.id);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active', 'trailer-open');
    document.getElementById('modal-trailer').innerHTML = '';
    document.getElementById('modal-trailer').classList.remove('active');
    document.body.style.overflow = '';
    currentMovieId = null;
}

// ===== Similar Movies =====
function renderSimilar(data) {
    const grid = document.getElementById('similar-grid');
    if (!grid) return;
    const currentGenres = (data.genre || '').split(',').map(g => g.trim()).filter(Boolean);
    const similar = allMovies()
        .filter(m => String(m.id) !== String(data.id))
        .map(m => {
            const mGenres = m.genre.split(',').map(g => g.trim());
            const overlap = mGenres.filter(g => currentGenres.includes(g)).length;
            return { movie: m, score: overlap };
        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score || b.movie.match - a.movie.match)
        .slice(0, 6)
        .map(x => x.movie);

    if (similar.length === 0) {
        grid.parentElement.style.display = 'none';
        return;
    }
    grid.parentElement.style.display = '';
    grid.innerHTML = similar.map(m => {
        const ex = getExtras(m.id);
        return `
            <div class="similar-item" data-id="${m.id}" data-title="${m.title}" data-image="${m.image}" data-genre="${m.genre}" data-cast="${m.cast}" data-year="${m.year}" data-match="${m.match}">
                <img src="${m.image}" alt="${m.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x130/333/666?text=${encodeURIComponent(m.title)}'">
                <div class="similar-item-body">
                    <div class="similar-item-title">${m.title}</div>
                    <div class="similar-item-meta">
                        <span>${m.match}% Match</span>
                        <span>${m.year}</span>
                        <span>${ex.ageRating}</span>
                    </div>
                </div>
            </div>`;
    }).join('');
    grid.querySelectorAll('.similar-item').forEach(el => {
        el.addEventListener('click', () => openModal(el.dataset));
    });
}

// ===== Trailer (YouTube search embed) =====
function playTrailer() {
    if (!currentMovieId) return;
    const movie = findMovie(currentMovieId);
    if (!movie) return;
    const query = encodeURIComponent(`${movie.title} trailer`);
    const trailerBox = document.getElementById('modal-trailer');
    trailerBox.innerHTML = `<iframe src="https://www.youtube.com/embed?listType=search&list=${query}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
    trailerBox.classList.add('active');
    document.getElementById('modal').classList.add('trailer-open');
}

// ===== Header scroll =====
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== My List =====
function setupMyList() {
    const myListLink = document.getElementById('my-list-link');
    const myListSection = document.getElementById('my-list-section');
    const clearBtn = document.getElementById('clear-list-btn');

    myListLink.addEventListener('click', (e) => {
        e.preventDefault();
        const showing = myListSection.style.display !== 'none';
        myListSection.style.display = showing ? 'none' : 'block';
        if (!showing) {
            renderMyList();
            myListSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    clearBtn.addEventListener('click', () => {
        if (confirm('Sei sicuro di voler svuotare la lista?')) {
            myListItems = [];
            localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
            renderMyList();
            updateMyListCount();
            Toast.show('Lista svuotata', 'info');
        }
    });
}

function addMovieToList(movieData) {
    if (myListItems.find(item => String(item.id) === String(movieData.id))) {
        Toast.show('Film già nella tua lista', 'info');
        return;
    }
    myListItems.push({
        id: movieData.id, title: movieData.title, image: movieData.image,
        genre: movieData.genre, cast: movieData.cast, year: movieData.year, match: movieData.match
    });
    localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
    updateMyListCount();
    Toast.show(`${movieData.title} aggiunto a La mia lista!`, 'success');
}

function renderMyList() {
    const container = document.getElementById('my-list');
    if (myListItems.length === 0) {
        container.innerHTML = '<div class="empty-state">La tua lista è vuota. Aggiungi film cliccando il pulsante <i class="fas fa-plus"></i></div>';
        return;
    }
    container.innerHTML = myListItems.map(movie => `
        <div class="card" data-id="${movie.id}" data-title="${movie.title}" data-image="${movie.image}" data-genre="${movie.genre}" data-cast="${movie.cast}" data-year="${movie.year}" data-match="${movie.match}" tabindex="0">
            ${isNew(movie.year) ? '<span class="new-badge">Nuovo</span>' : ''}
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
        card.querySelector('.remove-from-list')?.addEventListener('click', (e) => {
            e.stopPropagation();
            myListItems = myListItems.filter(item => String(item.id) !== String(card.dataset.id));
            localStorage.setItem('netflix-mylist', JSON.stringify(myListItems));
            renderMyList();
            updateMyListCount();
            Toast.show('Film rimosso dalla lista', 'info');
        });
    });
}

function updateMyListCount() {
    const badge = document.getElementById('my-list-count');
    if (!badge) return;
    badge.textContent = myListItems.length;
    badge.classList.toggle('hidden', myListItems.length === 0);
}

// ===== Sorpresami =====
function setupSurprise() {
    const btn = document.getElementById('surprise-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const movies = allMovies();
        const random = movies[Math.floor(Math.random() * movies.length)];
        Toast.show(`🎲 Ti proponiamo: ${random.title}`, 'info', 2500);
        openModal({
            id: random.id, title: random.title, image: random.image,
            genre: random.genre, cast: random.cast, year: random.year, match: random.match
        });
    });
}

// ===== Keyboard Navigation =====
function setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;
        if (document.getElementById('modal').classList.contains('active')) return;

        const rows = Array.from(document.querySelectorAll('.content-row'))
            .filter(r => r.offsetParent !== null);
        if (rows.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusedRowIndex = Math.min(focusedRowIndex + 1, rows.length - 1);
            highlightRow(rows[focusedRowIndex]);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusedRowIndex = Math.max(focusedRowIndex - 1, 0);
            highlightRow(rows[focusedRowIndex]);
        } else if (e.key === 'ArrowRight') {
            const row = rows[focusedRowIndex];
            row?.querySelector('.row-content')?.scrollBy({ left: 300, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            const row = rows[focusedRowIndex];
            row?.querySelector('.row-content')?.scrollBy({ left: -300, behavior: 'smooth' });
        } else if (e.key === 'Enter') {
            const row = rows[focusedRowIndex];
            const firstVisibleCard = row?.querySelector('.card');
            if (firstVisibleCard) openModal(firstVisibleCard.dataset);
        }
    });
}

function highlightRow(row) {
    document.querySelectorAll('.row-wrapper.keyboard-focus').forEach(r => r.classList.remove('keyboard-focus'));
    const wrapper = row.querySelector('.row-wrapper');
    if (wrapper) {
        wrapper.classList.add('keyboard-focus');
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ===== Modal button placeholders =====
function addToList() {
    if (currentMovieId) {
        const movie = findMovie(currentMovieId);
        if (movie) addMovieToList(movie);
    }
}
function likeMovie() { Toast.show('Mi piace salvato!', 'success'); }
function playMovie() { Toast.show('Avvio riproduzione...', 'info'); }

// ===== Toast =====
class Toast {
    static show(message, type = 'success', duration = 3000) {
        const container = Toast.getContainer();
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
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

console.log('🎬 Netflix Clone caricato con successo!');
console.log('📊 Film caricati:', allMovies().length);
