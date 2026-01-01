// Movie Data (usando TMDb-style poster URLs)
const movies = {
    trending: [
        { id: 1, title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", year: 2024, rating: "16+" },
        { id: 2, title: "Wednesday", image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", year: 2023, rating: "12+" },
        { id: 3, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", year: 2023, rating: "18+" },
        { id: 4, title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", year: 2024, rating: "18+" },
        { id: 5, title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", year: 2021, rating: "16+" },
        { id: 6, title: "Dark", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", year: 2020, rating: "16+" },
        { id: 7, title: "Ozark", image: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6KENHmvpdrx3Bh8.jpg", year: 2022, rating: "18+" },
        { id: 8, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", year: 2013, rating: "18+" },
    ],
    top10: [
        { id: 9, title: "The Crown", image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg", year: 2023, rating: "12+" },
        { id: 10, title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", year: 2022, rating: "18+" },
        { id: 11, title: "Narcos", image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg", year: 2017, rating: "18+" },
        { id: 12, title: "You", image: "https://image.tmdb.org/t/p/w500/7bEI4GZ7BVK6x9f5gVPvauhYBKy.jpg", year: 2024, rating: "18+" },
        { id: 13, title: "Cobra Kai", image: "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg", year: 2024, rating: "12+" },
        { id: 14, title: "Lupin", image: "https://image.tmdb.org/t/p/w500/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg", year: 2023, rating: "12+" },
        { id: 15, title: "Bridgerton", image: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg", year: 2024, rating: "16+" },
        { id: 16, title: "The Umbrella Academy", image: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg", year: 2023, rating: "16+" },
        { id: 17, title: "Elite", image: "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg", year: 2024, rating: "18+" },
        { id: 18, title: "Lucifer", image: "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg", year: 2021, rating: "16+" },
    ],
    action: [
        { id: 19, title: "Extraction", image: "https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg", year: 2023, rating: "18+" },
        { id: 20, title: "The Gray Man", image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpW5Pgh.jpg", year: 2022, rating: "16+" },
        { id: 21, title: "Red Notice", image: "https://image.tmdb.org/t/p/w500/lAXONicR4aGPZeMsVPHSV0pQwWW.jpg", year: 2021, rating: "12+" },
        { id: 22, title: "Army of the Dead", image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg", year: 2021, rating: "18+" },
        { id: 23, title: "6 Underground", image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg", year: 2019, rating: "16+" },
        { id: 24, title: "The Old Guard", image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg", year: 2020, rating: "16+" },
        { id: 25, title: "Triple Frontier", image: "https://image.tmdb.org/t/p/w500/4gbkGVOtrRBNKwjPNrPvMp2Q5jF.jpg", year: 2019, rating: "18+" },
        { id: 26, title: "Spenser Confidential", image: "https://image.tmdb.org/t/p/w500/fePczipv6ZzDO2uoww4vTAu2Sq3.jpg", year: 2020, rating: "16+" },
    ],
    comedy: [
        { id: 27, title: "Don't Look Up", image: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60WxSn.jpg", year: 2021, rating: "16+" },
        { id: 28, title: "Glass Onion", image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg", year: 2022, rating: "12+" },
        { id: 29, title: "Murder Mystery", image: "https://image.tmdb.org/t/p/w500/bj2Sb9FnPfHBMoV7dF4MHdLdNzE.jpg", year: 2023, rating: "12+" },
        { id: 30, title: "The Adam Project", image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg", year: 2022, rating: "12+" },
        { id: 31, title: "Hubie Halloween", image: "https://image.tmdb.org/t/p/w500/dbhC6qRydXyRmpUdcl9VBMI2aB5.jpg", year: 2020, rating: "12+" },
        { id: 32, title: "The Wrong Missy", image: "https://image.tmdb.org/t/p/w500/953DV5EqZnS0rypHj4QWPxknSWE.jpg", year: 2020, rating: "16+" },
        { id: 33, title: "Eurovision", image: "https://image.tmdb.org/t/p/w500/9zrbgYyFvwH8sy5mv9eT25xsAzL.jpg", year: 2020, rating: "12+" },
        { id: 34, title: "Yes Day", image: "https://image.tmdb.org/t/p/w500/yTEmnpP0gDvs4cPWrKBgXZrtY9R.jpg", year: 2021, rating: "7+" },
    ],
    documentary: [
        { id: 35, title: "Our Planet", image: "https://image.tmdb.org/t/p/w500/1rVCOMu34dLpGf9wEKdBYgTfTpc.jpg", year: 2023, rating: "7+" },
        { id: 36, title: "The Social Dilemma", image: "https://image.tmdb.org/t/p/w500/ohNwebesP0S7kJJHqGKNMvmGUlC.jpg", year: 2020, rating: "12+" },
        { id: 37, title: "Tiger King", image: "https://image.tmdb.org/t/p/w500/3Mc7n4H1iMaJyJsyJGKXLAbXNmP.jpg", year: 2020, rating: "16+" },
        { id: 38, title: "The Tinder Swindler", image: "https://image.tmdb.org/t/p/w500/5Eis3WuL6EUjR3NwmPXZnqtqzwL.jpg", year: 2022, rating: "16+" },
        { id: 39, title: "Making a Murderer", image: "https://image.tmdb.org/t/p/w500/rCmfrqYpXxzRw65j0azDvPKNECi.jpg", year: 2018, rating: "16+" },
        { id: 40, title: "American Murder", image: "https://image.tmdb.org/t/p/w500/pISpHNFpBqR7J85YXWM6Xv7kaCq.jpg", year: 2020, rating: "16+" },
        { id: 41, title: "Seaspiracy", image: "https://image.tmdb.org/t/p/w500/f7OD7WKzlt0pJsVmj6oq69hHmgT.jpg", year: 2021, rating: "12+" },
        { id: 42, title: "The Last Dance", image: "https://image.tmdb.org/t/p/w500/2thgjNHsfCgxsqQT1F5TLFl7qx.jpg", year: 2020, rating: "12+" },
    ]
};

// Descriptions for modal
const descriptions = {
    1: "Quando un ragazzino scompare, una piccola città scopre una storia che coinvolge esperimenti segreti, forze soprannaturali terrificanti e una strana bambina.",
    2: "Mercoledì Addams indaga su una serie di omicidi mentre frequenta la Nevermore Academy, dove impara a padroneggiare i suoi poteri psichici.",
    3: "Geralt di Rivia, un mutante cacciatore di mostri, lotta per trovare il suo posto in un mondo dove le persone spesso si dimostrano più malvagie delle bestie.",
    4: "Centinaia di giocatori al verde accettano uno strano invito a competere in giochi per bambini. Un ricco premio li attende, con una posta in gioco mortale.",
    default: "Un'avvincente storia che ti terrà incollato allo schermo dall'inizio alla fine. Non perderti questa incredibile esperienza cinematografica."
};

// DOM Elements
const modal = document.getElementById('modal');
const modalHeader = document.getElementById('modal-header');
const modalDescription = document.getElementById('modal-description');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    setupScrollButtons();
    setupHeaderScroll();
    setupModal();
});

// Render movies in each row
function renderMovies() {
    // Trending
    const trendingContainer = document.getElementById('trending');
    trendingContainer.innerHTML = movies.trending.map(movie => createCard(movie)).join('');

    // Top 10
    const top10Container = document.getElementById('top10');
    top10Container.innerHTML = movies.top10.slice(0, 10).map((movie, index) => createTop10Card(movie, index + 1)).join('');

    // Action
    const actionContainer = document.getElementById('action');
    actionContainer.innerHTML = movies.action.map(movie => createCard(movie)).join('');

    // Comedy
    const comedyContainer = document.getElementById('comedy');
    comedyContainer.innerHTML = movies.comedy.map(movie => createCard(movie)).join('');

    // Documentary
    const documentaryContainer = document.getElementById('documentary');
    documentaryContainer.innerHTML = movies.documentary.map(movie => createCard(movie)).join('');
}

// Create a movie card
function createCard(movie) {
    return `
        <div class="card" data-id="${movie.id}" data-image="${movie.image}" data-title="${movie.title}">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <div class="card-info">
                <div class="card-buttons">
                    <button class="btn-round play"><i class="fas fa-play"></i></button>
                    <button class="btn-round"><i class="fas fa-plus"></i></button>
                    <button class="btn-round"><i class="fas fa-thumbs-up"></i></button>
                    <button class="btn-round" style="margin-left: auto;"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="card-meta">
                    <span class="match" style="color: #46d369;">98% Match</span>
                    <span>${movie.rating}</span>
                    <span>${movie.year}</span>
                </div>
            </div>
        </div>
    `;
}

// Create a Top 10 card
function createTop10Card(movie, rank) {
    return `
        <div class="card" data-id="${movie.id}" data-image="${movie.image}" data-title="${movie.title}">
            <span class="rank">${rank}</span>
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        </div>
    `;
}

// Setup scroll buttons
function setupScrollButtons() {
    document.querySelectorAll('.scroll-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = btn.parentElement.querySelector('.row-content');
            const scrollAmount = 800;
            
            if (btn.classList.contains('scroll-left')) {
                row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
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

// Modal functionality
function setupModal() {
    // Open modal on card click
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && !e.target.closest('.btn-round')) {
            const movieId = card.dataset.id;
            const movieImage = card.dataset.image;
            const movieTitle = card.dataset.title;
            
            modalHeader.style.backgroundImage = `linear-gradient(transparent 60%, #181818), url(${movieImage})`;
            modalDescription.textContent = descriptions[movieId] || descriptions.default;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add to My List functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-round') && e.target.closest('.fa-plus')) {
        const btn = e.target.closest('.btn-round');
        const icon = btn.querySelector('i');
        
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-check');
            showNotification('Aggiunto alla tua lista');
        } else {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-plus');
            showNotification('Rimosso dalla tua lista');
        }
    }
});

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 15px 30px;
        border-radius: 4px;
        z-index: 3000;
        animation: fadeIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
`;
document.head.appendChild(style);

console.log('🎬 Netflix Clone loaded successfully!');
