# Guida allo Sviluppo e Contributo (Standard Operativi)

Benvenuto in **StreamPulse**. Per mantenere un alto standard qualitativo e un controllo rigoroso sul codice, questo progetto segue le linee guida operative ispirate ai modelli Open Source di Netflix.

---

## 🛠 Workflow di Git (Branch Strategy)
Per mantenere il branch principale (`main`) sempre stabile, utilizziamo il seguente flusso di lavoro:

1. **main**: Contiene solo codice pronto per la produzione.
2. **develop**: Branch di integrazione per le nuove funzionalità.
3. **feature/[nome-feature]**: Branch temporanei per lo sviluppo di singole parti (es. `feature/auth-system`).

> **Regola:** Non eseguire mai commit diretti su `main`. Apri sempre una Pull Request verso `develop`.

---

## 📝 Standard dei Messaggi di Commit
Usiamo i **Conventional Commits** per garantire che la cronologia del progetto sia chiara e automatizzabile:

* `feat:` Una nuova funzionalità (es. `feat: aggiunta ricerca film`).
* `fix:` Correzione di un bug.
* `docs:` Modifiche alla documentazione (es. questo file).
* `style:` Modifiche alla formattazione o CSS (senza logica).
* `refactor:` Modifica al codice che non fixa bug né aggiunge funzioni.

**Esempio:** `feat(api): implementata connessione a MongoDB Atlas`

---

## 💻 Code Style & Qualità
Per mantenere il codice pulito e leggibile:
* **Naming:** Usa `camelCase` per variabili/funzioni e `PascalCase` per i componenti React.
* **Linter:** Assicurati che non ci siano errori segnalati da ESLint prima di inviare il codice.
* **Prettier:** Il codice deve essere formattato secondo le regole definite nel file `.prettierrc`.

---

## 🚦 Processo di Pull Request (PR)
Prima che il tuo codice venga unito al progetto:
1. Assicurati che il branch sia aggiornato con l'ultima versione di `develop`.
2. Descrivi chiaramente le modifiche apportate nella descrizione della PR.
3. Verifica che il progetto si avvii senza errori (`npm run dev`).

---

## 🛡️ Sicurezza e Segreti
* **MAI** includere file `.env`, chiavi API o password nei commit.
* Se introduci una nuova variabile d'ambiente, aggiungi un esempio nel file `.env.example`.

---
*Mantenere questi standard permette a StreamPulse di essere un progetto solido, professionale e pronto per la scalabilità.*
