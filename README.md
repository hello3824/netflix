# StreamPulse: Full-Stack Streaming Architecture (WIP)

[![Status: Initial Development](https://img.shields.io/badge/Status-Initial%20Development-yellow.svg)]()
[![Progress: 15%](https://img.shields.io/badge/Progress-15%25-orange.svg)]()
[![Stack: MERN](https://img.shields.io/badge/Stack-MERN-blue.svg)]()

> **Nota:** Questo progetto è attualmente in fase di sviluppo attivo. L'obiettivo è costruire un clone di Netflix completo per dimostrare competenze nell'architettura MERN (MongoDB, Express, React, Node).

---

## 🎯 Visione del Progetto
**StreamPulse** nasce per esplorare la gestione di interfacce ad alto impatto visivo e la logica di backend necessaria per gestire contenuti multimediali, sessioni utente e integrazioni API esterne (TMDB).

### Funzionalità Previste:
* 🔐 **Autenticazione:** Sistema di login e registrazione sicuro tramite JWT.
* 🎬 **Content Streaming:** Integrazione con TMDB API per metadati e trailer.
* 📋 **Watchlist:** Database persistente per i film salvati dall'utente.
* 📱 **Responsive Design:** Esperienza fluida su mobile e desktop.

---

## 🛠 Tech Stack (Pianificato)

| Livello | Tecnologie |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Redux Toolkit |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Autenticazione** | JSON Web Tokens (JWT) |

---

## 🗺️ Roadmap di Sviluppo

### Fase 1: Setup & Backend Core 🏗️
- [x] Inizializzazione repository GitHub.
- [ ] Configurazione Server Node/Express.
- [ ] Connessione al database MongoDB.
- [ ] Definizione modelli User e Movie.

### Fase 2: Autenticazione & Sicurezza 🔑
- [ ] Creazione API per registrazione e login.
- [ ] Implementazione Hashing password (Bcrypt).
- [ ] Middleware di protezione rotte.

### Fase 3: Frontend & UI 🎨
- [ ] Setup React con Tailwind CSS.
- [ ] Creazione Navbar e Hero Section.
- [ ] Integrazione API TMDB per fetch dati.

### Fase 4: Finalizzazione 🚀
- [ ] Gestione Watchlist (Add/Remove).
- [ ] Deploy su Vercel/Render.

---

## ⚙️ Setup Locale (Iniziale)

```bash
# 1. Clona il repository
git clone [https://github.com/tuo-username/tuo-repo-name.git](https://github.com/tuo-username/tuo-repo-name.git)

# 2. Installa le dipendenze (da fare quando le cartelle saranno create)
cd server && npm install
cd ../client && npm install
