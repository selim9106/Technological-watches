# [MUI](https://mui.com/)

## Introduction
Material UI est une librairie de composants React qui implémente les composants *[Material Design](https://m3.material.io/)* de Google[^1][^2]. Ceux-ci sont donc conçus pour optimiser l'expérience utilisateur (UX) et constituent donc une référence fiable pour les designers et développeur.   


[^1]: Source: [Material UI Overview](https://mui.com/material-ui/getting-started/overview/)
[^2]: Pour l'heure, les composants de la librairie *Material Design* sont destinés à Android et disposés à être utilisés avec Flutter et Jetpack Compose. Un déploiement pour le web est en cours d'élaboration (Source: [Material Web](https://m3.material.io/develop/web))

Le principe des composants web repose sur l'encapsulement de fonctionnalités au sein d'un même élement qui peut ensuite être réutilisé sans crainte dans une interface/un projet.[^3]

[^3]: Source: [Web Components |MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Stying components

Il est possible de styliser des composants de différentes manières, chacune ayant leurs avantages et leurs inconvénients.

### Classical Method

Il est fréquent de créer une feuille de style css par composant. Généralement, celle-ci portera le même nom que le composant dans lequel elle est importée.

```css
/*component.css*/

.component-class{
    width:100%;
    margin: 0 auto;
    color: white;
}
.component-text {
    font-size:12px;
}
```
```jsx
//Component.jsx

import "./component.css";

const Component = () => {
    return (
        <div className="component-class">
            <p className="component-text">Some text for the example</p>
        </div>
    )
}

export default Component
```
Bien qu'il soit possible d'actualiser le style d'un composant de façon "classique", cette méthode ne permet pas l'encapsulement et par conséquent le style attribué est susceptible de toucher d'autres éléments du projet.

### CSS modules approach

De la même manière que les modules en Javascript, il est possible d'importer un fichier CSS en tant que *module*. 
## Other components libraries

## Links
- [Material Design | Github](https://github.com/material-components)
- ["Introductiong the M3 design kit for Figma" | Material Design Blog](https://material.io/blog/material-3-figma-design-kit)

