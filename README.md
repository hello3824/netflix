# StreamPulse: Full-Stack Video Streaming Architecture (WIP)

[![Project Status: Initial Development](https://img.shields.io/badge/Status-Initial%20Development-yellow.svg)]()
[![Progress: 15%](https://img.shields.io/badge/Progress-15%25-orange.svg)]()
[![Stack: MERN](https://img.shields.io/badge/Stack-MERN-blue.svg)]()

> **Nota:** Questo progetto è attualmente in fase di sviluppo attivo. L'obiettivo è costruire un ecosistema di streaming completo ispirato a Netflix per dimostrare le competenze di **Mirai** nell'architettura MERN (MongoDB, Express, React, Node).

---

## 🎯 Visione del Progetto
**StreamPulse** nasce per esplorare le sfide tecniche dello sviluppo full-stack moderno: gestione di interfacce ad alto impatto visivo, logica di autenticazione sicura e integrazione di dati multimediali in tempo reale.

### Funzionalità in fase di sviluppo:
* 🔐 **Autenticazione:** Registrazione e login sicuro tramite JSON Web Tokens (JWT).
* 🎬 **Content Streaming:** Integrazione con TMDB API per il recupero di metadati e trailer.
* 📋 **Watchlist Personale:** Database per salvare e gestire i contenuti preferiti.
* 📱 **Design Responsivo:** UI ottimizzata per ogni tipo di dispositivo.

---

## 🛠 Tech Stack (Pianificato)

| Livello | Tecnologie |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Redux Toolkit |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Autenticazione** | JWT & Bcrypt |
| **Media Data** | The Movie Database (TMDB) API |

---

## 🗺️ Roadmap di Sviluppo

### Fase 1: Setup & Backend Core 🏗️
- [x] Inizializzazione repository GitHub e documentazione.
- [ ] Configurazione ambiente Node/Express.
- [ ] Connessione al database MongoDB.
- [ ] Definizione degli schemi utente e film.

### Fase 2: Autenticazione & Sicurezza 🔑
- [ ] Implementazione API per registrazione e login.
- [ ] Hashing delle password.
- [ ] Middleware di protezione per le rotte private.

### Fase 3: Frontend & UI 🎨
- [ ] Setup React con Tailwind CSS.
- [ ] Sviluppo Navbar e Hero Section dinamica.
- [ ] Integrazione chiamate API esterne (TMDB).

---

## ⚙️ Setup Locale

```bash
# 1. Clona il repository
git clone [https://github.com/tuo-username/streampulse.git](https://github.com/tuo-username/streampulse.git)

# 2. Installa le dipendenze
# (Eseguire nelle rispettive cartelle una volta create)
cd server && npm install
cd ../client && npm install
⚖️ Note Legali & Disclaimer
Questo progetto è sviluppato da Mirai esclusivamente per scopi formativi e di portfolio.

Non ospita alcun contenuto video protetto da copyright.

Tutti i dati relativi ai film sono forniti tramite l'API di TMDB.

Il progetto non è affiliato, sponsorizzato o approvato da Netflix, Inc.

L'uso del design è ispirato a scopi di studio della UX/UI.

Sviluppatore: Mirai

Stato Attuale: Configurazione dell'architettura iniziale.
