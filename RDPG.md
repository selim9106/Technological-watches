# RGPD

## Défitions

### RGPD

**RGPD = Règlement Général sur la Protection des données [^1]**   
Adopté en 2016 [^2]   
Remplace la Directive sur la protection des données personnelles de 1995   
   
En anglais GDPR (General Data Protection Regulation)


[^1]: S'applique aux 27 états membres de l'UE
[^2]: Conseil du 27 avril 2016

### Donnée à caractère personnel

Toute information relative à une **personne physique** identifiée ou identifiable, telles que :   
- son nom ;
- sa date de naissance ;
- son adresse postale ;
- son e-mail ;
- un pseudo ;
- un achat ;
- toute information susceptible de permettre l'identification d'une personne physique.

Note: les coordonnées génériques d'entreprises ne sont pas assimilées à des données personnelles.

### Traitement de donnée

Toute opération effectuée sur des données personnelles (collecte, enregistrement, consultation, modification/mise à jour, communication/transmission,...)
ayant un objectif défini.

### Violation de données [^3]

Tout(e) incident/violation de sécurité entraînant des conséquences telles que:   
- l'altération/perte/destruction
- la divulgation ou l’accès non autorisé aux données.
et qui par extension comprommet la confidentialité et l'intégrité

[^3]:https://www.cnil.fr/sites/default/files/atoms/files/cybersecurite_-_chiffres_2021.pdf
  
## Les principes
  
### Principe de finalité

**A chaque opération doit être assigné un but précis, légal et légitime au regard de l'activité de l'entreprise.** 

La finalité définit la durée de conservation des données.

Exemples: gestion du recrutement, enquête de satisfaction

  
### Principe de minimisation

Seules les données utiles à la réalisation des objectifs de l'entreprises peuvent être récoltées
  
  
### Principe de consentement

- **Préalable** à la récolte     
- Démarche active de l'utilisateur (liberté)   
- Requis **à nouveau** en cas d'utilisation des données déjà récoltées à d'autres fins  

Exemple: case à cocher
  
  
### Transparence

Les individus doivent être informés:   
- avec précision des données récoltées
- des modalités de traitement de ces données
- des destinataires/identité du responsable de traitement
- du caractère obligatoire/facultatif des réponses
- de la durée de conservation (variable) [^4]
- de la manière dont ils peuvent intervenir sur ces données (consultation, rectification suppression,...)   

Remarque: il existe un droit d'opposition à l'utilisation des données pour motifs légitimes.
[^4]: https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees


### Sécurité  
"Le responsable du traitement est tenu de prendre toutes précautions utiles, au regard de la nature des données et des risques présentés par le traitement, pour préserver la sécurité des données et, notamment, empêcher qu'elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès."[^5]   

(chiffrement, 
[^5]:Article 121 de la loi Informatique et Libertés

## RDPG, Why ?

**Objectifs**   

Accroître:  
1. la protection des personnes concernées par un traitement de leurs données à caractère personnel  
2. la responsabilisation des acteurs de ce traitement  
   
**But also**
    
- Adaptation aux évolutions technologiques (commerce en ligne,...)   
- Transparence vis-à-vis de l'internaute/du consommateur et liberté de contrôle   
- Harmoniser les règles en UE   
- offrir un cadre juridique aux professionnels
   
## RGPD, pour qui?

Toute personne, entreprise, organisme qui traite des données personelles
- établis en UE
- dont l'activité est susceptible de concerner des citoyens ressortissants de l'UE
- publics ou privés
- ainsi que leurs sous-traitants


## Sanctions[^6]

**En cas de nom respect des règles du RGPD**   

Sanctions graduelles:  

- Avertissement/mise en demeure + rappel des règles;
- Injonction, ordre de cessation immédiate des violations constatées
- Limitation ou suspension temporaire des traitements ou des flux de données
- **Sanctions administratives** pour les entreprises qui n'ont pas respecté l'injonction.
   - essentiellement dissuasives
   - proportionnées
   - Jusqu'à 20 millions d'€ ou 4% du chiffre d'affaires  
 
- **Sanctions pénales**
   - selon l'état
   - En France, les sanctions pénales applicables peuvent atteindre jusqu'à 300 000€ d'amende et entrainer jusqu'à 5 ans d'emprisonnement.

Note: Le 31 décembre 2021, la CNIL a sanctionné la société FACEBOOK IRELAND LIMITED d’une amende d’un montant de 60 millions d’euros parce qu’il n’est pas permis aux utilisateurs du réseau social facebook.com résidant en France de refuser les cookies aussi facilement que de les accepter.[^7]

[^6]:https://www.cnil.fr/fr/cookies-sanction-de-60-millions-deuros-lencontre-de-facebook-ireland-limited

## What about Outside EU?

### Maximillian Shcrems

Activiste autricien qui milite pour la protection des données.  

Etudiant en droit, il demande à Facebook une copie de ses propres données et réalise après analyse que ses informations effacées sont toujours conservées par Facebook (sur des serveurs americains) et ne respectent pas le RGPD. 
Il s'oppose aux transfer des données des européens vers les USA et suggère comme solution leur délocalisation vers l'Europe ou leur chiffrement.   
Il obtient en 2015 l'invalidation du *Safe harbor*[^8] CJUE (Cour de justice de l'Union européenne).[^9].   
De nouvelles négociations entre les états membres de l'UE et les états-unis donne naissance au *EU-US Privacy Shield* mais sera invalidé à nouveau par la CJUE après une nouvelle plainte de Maximillian Schrems.


[^6]: https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es
[^8]: *Sphère de sécurité* qui encadrait jusque là le transfert des données des internautes européens vers les États-Unis
[^9]: https://www.silicon.fr/max-schrems-le-tombeur-du-safe-harbor-sattaque-a-la-localisation-des-donnees-133129.html


### RGPD VS CLOUD Act
La CLOUD act = Clarifying Lawful Overseas Use of Data Act est une noi extra-territoriale qui permet aux instances de justice américaine disposant d’un mandat et de l'autorisation d’un juge, d'accéder à des données, (telles que des communications electroniques) auxprès des fournisseurs de services établis sur le territoire des États-Unis, y compris les données hébergées dans des serveurs informatiques situés à l'étranger.   

Cette loi s'impose aux GAFAM (Google, Apple, Facebook, Amazon et Microsoft) et aux entreprises étrangères ayant une activité aux USA et ne nécessite pas pour les instances judiciaires d'avertir les personnes concernées, ni leur pays de résidence, ni le pays où est localisé le serveur qui contient ces données.   

L'argument invoqué est une mesure de protection (lutte contre le terrorisme,...).

Les autorités françaises cherchent à mettre au point un dispositif d'alerte pour les entreprises françaises qui hebergent des données sur des serveurs américains  dès lors que la justice américaine cherche à y accéder.

### Accord de principe

Un nouvel accord de principe conclu ce vendredi 25 mars 2022 devra être concrétisé pour faire l’objet d’une nouvelle décision d’adéquation.[^10]

[^10]: https://www.droit-technologie.org/actualites/un-nouvel-accord-pour-le-transfert-des-donnees-vers-les-etats-unis/

### La protection des données dans le monde

[Carte interactive](https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde)

Exemples:  

- [Vinted](https://www.vinted.be/privacy-policy)
- [Beyoncé shop](https://shop.beyonce.com/pages/privacy)

## Tools and Ressources

- [RGPD officiel](https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679&from=EN)
- Vérifiez la conformité de votre site avec [Cookiebot](https://www.cookiebot.com/fr/)
- idem avec [DASTRA](https://www.dastra.eu/fr?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY-gZDxeBGf2p4-C6umkisoZuPvxOS-avkP4vWFA-O2wKADYqH_YdrgaAl9JEALw_wcB)
- [guide de la sécurité des données personnelles (pour les entreprises)](https://www.cnil.fr/fr/principes-cles/guide-de-la-securite-des-donnees-personnelles)
- [Cybersécurité | CNIL](https://www.cnil.fr/fr/cybersecurite)
- [PIA: Privacy Impact Assessment tool](https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil)
- [Les droits pour maîtriser vos données personnelles](https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles)
- [Autorité de protection des données de Belgique](https://www.autoriteprotectiondonnees.be/citoyen)
- [Le MOOC de la CNIL/Atelier RGPD](https://www.cnil.fr/fr/le-mooc-de-la-cnil-est-de-retour-dans-une-nouvelle-version-enrichie)
- [Boîte à outils RGPD](https://www.ucm.be/produits/boite-outils-gdpr)
- [Porttic.be | plateforme d'échanges autour du RGPD] (https://www.porttic.be/)





### Bibliographie

- [RGPD en UE au 25/05/2018 | CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees)
- [RGPD: De quoi parle-t-on | CNIL](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on)
- [RGPD | Wikipedia](https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es)
- [Adopter les 6 bons réflexes | CNIL](https://www.cnil.fr/fr/adopter-les-six-bons-reflexes)
- [Respecter les droits des personnes | CNil](https://www.cnil.fr/fr/respecter-les-droits-des-personnes)
- [Garantir la sécurité des données | CNIL](https://www.cnil.fr/fr/garantir-la-securite-des-donnees)
- [La durée de conservation des données | CNIL](https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees)
- [Cybersécurité_chiffres_2021.pdf](https://www.cnil.fr/sites/default/files/atoms/files/cybersecurite_-_chiffres_2021.pdf)
- [Données personnelles : les USA et l’UE promettent un super accord, mais il risque encore de voler en éclats](https://www.numerama.com/tech/897691-donnees-personnelles-les-usa-et-lue-promettent-un-super-accord-mais-il-risque-encore-de-voler-en-eclat.html)
- [La justice européenne sabre le transfert de vos données vers les USA à cause de la surveillance de masse](https://www.numerama.com/tech/637073-la-justice-europeenne-sabre-le-transfert-de-vos-donnees-vers-les-usa-a-cause-de-la-surveillance-de-masse.html)
