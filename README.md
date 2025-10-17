# Ass1
Assigment 1 for data anal.
# Chinese Fortune Cookie Generator

Att skapa en hemsida som genererar "cookie fortunes", likt de där kakorna man kan köpa. Målet är att kakorna ska vara på kinesiska, med dåliga översättningar. Det är en fast lista med "fortunes", men de plockas slumpmässigt efter att användaren har skrivit sitt namn. I början ville jag ha någon form av matematisk ekvation som alltid gav samma fortune till en person med samma attribut (t.ex. Lucas, 22, Stockholm gav alltid fortune 3), men sedan fick jag nedgradera till att bara fråga dem på låtsas. Jag insåg sedan att det gjorde hemsidan för komplicerad, så jag körde bara med namn.


## Hur lagren hänger ihop

## HTML -> CSS

HTML-filen länkar till CSS-filen i sidhuvudet, vilket gör att stilmallar och färger appliceras på alla element. All visuell formgivning - färger, typsnitt och layout - styrs från `style.css`. Där finns även de färgvariabler som används för att skapa ett enhetligt tema med guld och rött som basfärger.

## HTML -> JavaScript

I slutet av HTML-filen länkas JavaScript-filen. Den placeras längst ner för att säkerställa att hela sidan har laddats innan koden körs. På så sätt undviks fel där element inte hittas. `<noscript>`-elementet finns som en påminnelse till användare som har JavaScript avstängt… Någonting som jag inte visste va en grej… 3 dagar av 0 progress för Lucas för att han hade js blockers på, och fick inga meddelande om det.

## JavaScript-funktion

JavaScript-filen väntar tills allt innehåll har laddats, hämtar formuläret och resultatytan via deras ID:n, och kopplar ett event som reagerar på formulärets skickning. När användaren trycker på knappen för att få sin fortune stoppas sidans omladdning, en slumpmässig fortune väljs ur listan och visas på sidan. Formuläret döljs samtidigt för att framhäva resultatet.

## Design (CSS)

Färgpaletten använder “traditionella kinesiska färger” (Chatgpt prompt: give me chinese hex pls): guld (#FFD368), rött (#D7261E) och grönt (#2E8B57). Typsnittet *Noto Serif* ger en klassisk och tryckt känsla, som dessutom är kompatibel med Kinesiska bokstäver, och sidan centreras vertikalt med flexbox. Formuläret och knapparna har rundade hörn och ändrar färg vid hovring.

## Problem och lärdomar

- Felet “Uncaught TypeError: fortuneBtn is null” berodde på att JavaScript kördes innan elementen hade laddats. Genom att använda `DOMContentLoaded` löstes problemet.
- Vikten av att använda korrekta ID:n mellan HTML och JavaScript.
- Två `<h1>`rubriker finns i sidan - en test för att se hur webbläsaren prioriterar struktur.
- OG-taggarna i HTML används endast som exempel.
- Det är olagligt att samla information som specifikt riktar sig till en individ… Man kan bli bannad från GoogAnal och GA4 om man inte skärper sig.

## Vad jag lärt mig

- Hur `<link>` och `<script>` kopplar samman kodlager i en webbplats.
- Varför ordningen på skriptladdning påverkar funktionalitet.
- Hur DOM-manipulation kan uppdatera innehåll utan att sidan laddas om.
- Hur färger, typografi och layout skapar konsekvent design.
- Att det är enklare att skriva kod än att fixa kod.
