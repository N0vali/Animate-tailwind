# Animate light

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) 

Un petit script pour implémenter des animations avec <span style="color:#0ea5e9;font-weight:bold">tailwind</span> ou du 
<span style="color:#264DE4;font-weight:bold">css</span> s'en inspirant.

## Démo
<a href="https://codepen.io/Kaleessia/pen/JjbOqKP" style="color:blue;font-weight:bold">-> ici <-</a>
 
 
## Pour commencer

Dans vos <span style="color:lightcoral;font-weight:bold">div</span> où vous souhaitez animer des éléments vous devez :
<ul>
<li>Mettre la classe <span style="color:lightseagreen;font-weight:bold">animated-parent</span> sur la 
<span style="color:lightcoral;font-weight:bold">div</span> autour de votre animation</li>
<li>Mettre un <span style="color:mediumpurple;font-weight:bold">data-delay</span> 
avec une valeur (un entier) de base qui sera incrémenter de 200 mais l'incrémentation sera personnalisable avec le 
<span style="color:mediumpurple;font-weight:bold">data-delayInc</span></li>
<li>Mettre la classe <span style="color: lightseagreen;font-weight: bold">animated-item</span> sur les enfants à animer</li>
<li>Mettre  <span style="color: mediumpurple;font-weight: bold">data-animate</span> sur les enfants à animer, la valeur 
attendu sera le nom de l'animation <span style="color: lightskyblue;font-weight: bold">(exemple: pour animate-pulse rentrer la valeur "pulse")
</span></li>
</ul>



### Pré-requis

<ul>
<li>Charger le fichier animate.js</li>
<li>Charger un fichier css comprenant vos animations commençant par "animate-"<br> Ou Charger <span style="color:#0ea5e9;font-weight:bold">tailwind</span></li>
</ul>

## Aides
Vous pouvez rajouter des animations facilement en vous aidant de <a href="https://www.theappguruz.com/tag-tools/web/CSSAnimations/">ce site</a>
## Fabriqué avec
 JS vanilla
## Versions
**Dernière version :** 0.1

## Auteurs
* **Alicia Pilar** _alias_ [@N0vali](https://github.com/N0vali?)
