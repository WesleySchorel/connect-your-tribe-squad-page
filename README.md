# Dynamische Squadpage
## 📚 Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De squadpage bestaat uit een overzicht van alle studenten en docenten van de opleiding Frontend Design & Development van het cohort 2022. Op deze pagina kunt u de gewenste squad selecteren. Binnen een squad kunt u navigeren naar een student of docent door via de zoekfunctie een naam in te vullen of door de lijst te browsen. Als u informatie van een student of docent wilt kunt u klikken op een profiel waarmee een lijst met gegevens in beeld verschijnt.

![ReadMe Overview Photo](https://user-images.githubusercontent.com/112857487/220894008-0c2f80cf-5706-43a6-8c2c-8a4028846fb8.png)

Link: https://gold-silly-binturong.cyclic.app/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

### HTML
De HTML structuur is opgemaakt met EJS. EJS is een simpele templatingtaal waarmee HTML-opmaak kunt genereren met JavaScript.

```js
<%- include('./partials/head') %>

<%- include('./partials/foot') %>
````

### CSS
CSS is te vinden in ``./public`` hierin heb ik de website een styling gegeven. De kleuren worden bijvoorbeeld opgehaald met custom propperties.
```css
:root {
    --c-nav: #007acc;
    --c-background: #141414;
    --c-id-card: #282828;
    --c-id-card-hover: #494949;
}
```

### Javascript
Javascript is te vinden in ``./public`` hierin heb ik de Dialog en de Searchbar interactie werkend gemaakt.
```js
const allTriggers = document.querySelectorAll('.id-card-trigger')

allTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const dataId = trigger.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            });
        })

    })
})
```

### Node
NodeJS zorgt voor de organisatie van Javascript op een server. NodeJs is gebruikt om gegevens uit de WHOis API op te halen.
```js
app.get('/', (request, response) => {
  console.log(request.query.squad)

  let slug = request.query.squad || 'squad-a-2022'
  let orderBy = request.query.orderBy || 'name'
  let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=ASC'

  fetchJson(squadUrl).then((data) => {
    response.render('index', data)
  })
})
```

### Express
Express is het framework dat de routing op mijn website regelt.
```js
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
```


## Installatie
<!-- Bij Installatie staat stap-voor-stap beschreven hoe je de development omgeving moet inrichten om aan de repository te kunnen werken. -->
Navigeer naar nodejs.org en installeer de Node ontwikkelomgeving. Voor dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces.

Open de terminal in Visual Studio Code en installeer Node doormiddel van het commando ``npm init``. Voer hierna ``npm install`` uit. Om de pagina te open start je een server op door middel van ``npm start``. Als de server weer gesloten moet worden kan je ``control + c / ^c`` gebruiken.

## Bronnen
Bronnen die ik heb gelezen tijdens het ontwerpen van deze website:
* Typografie - https://learn.bakermen.com/8-onmisbare-tips-voor-typografie-in-webdesign  
* Kleur - https://uxdesign.cc/fundamentals-of-color-in-interface-design-ui-8127149f13e6
* Consistentie - https://uxdesign.cc/design-principle-consistency-6b0cf7e7339f
* Consistentie - https://www.frankwatching.com/archive/2018/12/04/de-kracht-van-witruimte/
* Hierarchie - https://www.visia.media/visuele-hierarchie-in-webdesign/


[docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
