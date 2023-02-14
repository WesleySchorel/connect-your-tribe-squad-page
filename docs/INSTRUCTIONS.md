
# Squad page
Ontwerp en maak met een team een squad page met Node en data uit de [whois.fdnd.nl](https://whois.fdnd.nl) API.

## Context
Deze leertaak hoort bij sprint 7 "Connect Your Tribe". Dit is een leertaakdie je in een team uitvoert.

In het S07W2-01-Squadpage wordt uitgelegd wat je gaat doen.


## Briefing
Elke frontender bij FDND staat in een database die te bereiken is via de API op [whois.fdnd.nl](https://whois.fdnd.nl). In een team ga je met deze data een squad page ontwerpen en maken zodat je met elkaar in contact kan blijven.

## Doel van deze opdracht
Je leert met een team een overzichtpagina te ontwerpen en bouwen op basis van een bestaande API.


## Werkwijze

Met je team bedenk en schets je verschillende ideeeën voor een squad page. 
Met de squad page wil je op een (interactieve) manier mede-studenten kunnen opzoeken, gegevens bekijken, een student pingen, een vraag kunnen stellen, of iets anders.
Vervolgens werken alle teamleden een ander idee uit met Node en JSON.
Jouw team kiest daarna het beste, mooiste of meest originele ontwerp en deze presenteren jullie aan de squad. 

Voor deze opdracht doorloop je alle fases van de DLC [analyseren](#analyseren), [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren) en [testen](#testen).


### Analyseren
In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen. 


#### Aanpak analysefase

1. Lees de instructies van deze leertaak zorgvuldig door.
2. Onderzoek wat je allemaal kan doen met de [WHOIS API](https://whois.fdnd.nl).
3. Bespreek met jouw team wat je aan werk verwacht, hoe jullie gaan samenwerken en plan de belangrijke momenten in. (je kan hiervoor een Github Projectboard gebruiken)


#### Materiaal analysefase

- [WHOIS API](https://whois.fdnd.nl)
- [Learn about projects on Github](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)


### Ontwerpen
In de ontwerpfase ga je met je team verschillende ideeeën voor een squad page bedenken en schetsen. 

#### Aanpak ontwerpfase

1. Ideegeneratie: Eerst bedenk je met je team verschillende ideeeën voor een squad page.
2. Maak een breakdown van de schets, bedenk welke data je uit de WHOIS API kan gebruiken voor je ontwerp. 
3. Werk je schets netjes uit in Figma, Illustrator of ga meteen los in de browser.



### Bouwen
In de bouwfase werken alle teamleden een ander idee uit met Node en JSON.

#### Aanpak bouwfase

 1. Fork deze leertaak en clone deze op jouw computer.
 2. Open deze leertaak in jouw editor (bijv. Visual Studio Code).
 3. Open de terminalen voer het commando npm install. Je gebruikt NPM om een express inclusief alle afhankelijkheden te installeren.
 4. Kopieer de files van je visitekaartje opdracht naar deze leertaak om met Node en JSON aan de slag te kunnen. (index.js, /views en /public
 5. ...

#### Materiaal bouwfase

- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [EJS - Embedded JavaScript templating](https://ejs.co)
- [Control Flow in JavaScript: Loops](https://dev.to/pszponder/control-flow-in-javascript-loops-26bd)




### Integreren
Als je online wil testen moet je je project publiceren op internet. Omdat we met Node werken kan dat niet met Github Pages omdat daar alleen statische pagina's kunnen worden gehost. Voor een Node project moet een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.

#### Aanpak integreerfase

1. Commit en Push jouw project naar GitHub
2. Login bij [cyclic.sh](https://www.cyclic.sh/)
3. Klik op Deploy om een nieuwe App aan te maken
4. Selecteer het tabblad _Link Your Own_ om jouw project te publiceren.
5. Zoek de juiste repository. Cyclic importeert jouw code en voert npm start uit.
6. Er wordt een unieke naam voor jouw project gegenereerd. Op jouw Cyclic pagina zie je alle apps die je hebt aangemaakt
7. Open je squad page in je browser, check of alles werkt en voeg de url van de App toe aan jouw repository op GitHub. 


#### Materiaal integreerfase

- [Cyclic Hosting](https://www.cyclic.sh/)




### Testen
In de testfase controleer je of jouw squad page voldoet aan standaarden. 
Jouw team kiest daarna het beste, mooiste of meest originele ontwerp en deze presenteren jullie aan de squad. 




## Criteria

Focus sprint 7 - De focus in deze sprint ligt op teambuilding, samenwerken en hoe je een dynamische website kan maken waar bezoekers ook iets achter kunnen laten.

Doel van deze opdracht:
* Je leert met een team een overzichtpagina te ontwerpen en bouwen met data uit een database.

Voor deze leertaak gelden de gedragscriteria: 
* M: Je kiest binnen projecten passende fases van de development-lifecycle
* M: Je combineert aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving
* S: Je werkt in teams, vraagt begeleiding waar nodig en geeft feedback aan teamleden
* S: Je daagt verantwoording voor eigen resultaten, verwerkt ontvangen feedback en wijst teamleden op hun verantwoording
* P: Je schetst om gedachten en processen te verkennen en abstracte begrippen over te brengen

Deze opdracht is done als:
- [ ] Je hebt een squad page ontworpen en gemaakt met Node en de WHOIS API
- [ ] Je squad page is online gepubliceerd
- [ ] Je hebt gewerkt volgens de verschillende fases van de development-lifecycle en je hebt je proces bijgehouden in de Wiki
- [ ] Je hebt comments in je Node-code waarmee de code is uitgelegd
- [ ] Je hebt comments in de EJS bestanden waarmee een _loop_ of andere _Control Flow_ is uitgelegd
- [ ] Je hebt in de Readme bij 'Kenmerken' uitgelegd wat Node is, wat Express is en wat EJS doet

