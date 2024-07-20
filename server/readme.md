### Comenzi:

- `npm start` &mdash; pornește serverul în modul production.
- `npm run start:dev` &mdash; pornește serverul în modul dezvoltare (development).
- `npm run lint` &mdash; rulează verificarea codului cu ESLint, este necesar să se ruleze înaintea fiecărui PR și să se corecteze toate erorile linterului.
- `npm lint:fix` &mdash; aceeași verificare a linterului, dar cu corecții automate pentru erorile simple.
- `npm create-env` &mdash; creaza fiserul: .env, in folderul: environment

### Important:

- `fiserul: .env` &mdash; dupa ce a fost generat cu comanda de mai sus, trebuie completat: cu valoarea uri-ului de la baza de date, cu o valoare pentru jwt secret key, si cu email si password pentru conectare la outlook.
