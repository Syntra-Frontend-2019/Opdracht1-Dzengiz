# Eindopdracht Javascript
### Beschrijving opdracht
Maak een formulier met een invoerveld om een **naam** op te geven,
invoer om een **geboortedatum** te kiezen, opgedeeld in 3 aparte select
lists voor *dag*, *maand* en *jaar*, een **radio group** voor geslacht
te kiezen en een knop om een persoon toe te voegen.
### functionaliteit
Bij een druk op de knop zou er een list item moeten verschijnen naast
het form. Afhankelijk van het gekozen geslacht moet het list-item ofwel
blauw, roze of grijs zijn bij een respectieve keuze van man, vrouw of
transgender. 
### Aandachtspunten
HTML en JS moeten strikt van elkaar gescheiden zijn. Er mag dus geen
HTML (tags e.d.) in de Javascript code aanwezig zijn. Ook mogen er geen
Javascript-calls in de HTML tags te vinden zijn zoals 

```html
<button onclick=foo(bar)> Klik mij </button>
```

# Beschrijving oplossing
### Motieven
Aangezien doorheen het verdere lesjaar wordt verder gebouwd op deze
oefening zijn er reeds **helper-functions** toegevoegd met generic
functionaliteit... enkele vindt u hier onder

###### Meerdere attributen in één keer toevoegen 
In dit project dienen meerdere attributen in één keer aan een HTML
element te worden toegevoegd. Daar er geen methode bestaat om in één
keer meerdere attributen toe te voegen heb ik deze voor deze oefening
aangemaakt. deze kan nu ook worden gebruikt in de toekomst wanneer op
deze oefening wordt verder gebouwd
````javascript
// Logic to set multiple Attributes at once
const setAttributes = (htmlElement, attributes) => {
    Object.keys(attributes).forEach(key => {
        htmlElement.setAttribute(key, attributes[key])
    });
};
````

###### Meerdere children in één keer aan een element toevoegen
Daar het list-item dat wordt aangemaakt per druk op de knop
verschillende onderdelen bevat, heb ik een helper-functie gemaakt
waardoor in één regel meerdere children kunnen toegevoegd worden aan een
parent element.
````javascript
// Logic to append multiple children at once
const appendChildren = (htmlElement, children) => {
    children.forEach(child => {
        htmlElement.appendChild(child)
    })
};
````
### Toelichting Robohash API
Robohash is een API die het toelaat om een random image te verkrijgen
wanneer u naar een bepaalde url surft en die url aanvult met tekst. vb
[https://robohash.org/dzengiz](https://robohash.org/dzengiz). De tekst
"Dzengiz" zorgt dat er via de api een random (maar altijd dezelfde*)
image verschijnt die als placeholder kan dienen om afbeeldingen te
gebruiken in de webpagina.

*de link [https://robohash.org/dzengiz](https://robohash.org/dzengiz)
geeft ALTIJD dezelfde image terug, maar wanneer 1 letter verandert,
verandert bijna de hele image:
[https://robohash.org/dzengis](https://robohash.org/dzengis) de laatste
"z" is hier veranderd in een "s"

Voor andere parameters & mogelijkheden verwijs ik graag naar de
[Robohash homepage](https://robohash.org)






