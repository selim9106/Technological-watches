# Google Analytics

## [Google Marketing Plateform](https://marketingplatform.google.com/intl/fr/about/)

Des outils pour les PME et pour les entreprises

### Google Tools for SMB

- [Analytics](https://marketingplatform.google.com/intl/fr/about/analytics/)
- [Data Studio](https://marketingplatform.google.com/intl/fr/about/data-studio/)
- [Optimize](https://marketingplatform.google.com/intl/fr/about/optimize/)
- [Surveys](https://marketingplatform.google.com/intl/fr/about/surveys/)
- [Tag Manager](https://marketingplatform.google.com/intl/fr/about/tag-manager/) ([en savoir plus](https://semji.com/fr/guide/google-tag-manager-le-guide-complet/))

### Google Tools for Enterprises

- Analytics 360, Data Studio 360, Optimize 360, Surveys 360, Tag Manager 360
- [Campaign Manager 360](https://marketingplatform.google.com/intl/fr/about/campaign-manager-360/)
- [Display & Video 360](https://marketingplatform.google.com/intl/fr/about/display-video-360/)
- [Search Ads 360](https://marketingplatform.google.com/intl/fr/about/search-ads-360/)

## Google Analytics: histoire
- 1995: Urchin Software Corporation lance Urchin: outil d'analye statistique web
- 2005: Rachat d'Urchin Software qui devient Google Analytics Classic [^1]
- 2007: Google introduit un code de suivi "ga.js"
- 2010: le code de suivi devient asynchrone
- 2012: fin d'Urchin et sortie de Google Universal Analytics en 2013
- 2020: GA4 sort suite à plusieurs sanctions financières en raison de l'incompatibilité de l'outil avec le RGPD
- 2023: fin du traitement des nouvelles données d’Universal Analytics [^2]

## GA4
>*"Annoncé fin de l’année 2020, Google Analytics 4 ou GA4 (anciennement « Application + Web ») se veut la réponse apportée à Google quant à l’évolution du Web
et des comportements utilisateurs. Ne pensez plus page vue et session, **pensez événement**.
Ne pensez plus cookie, pensez plutôt machine learning. Ne pensez plus site, mais Application + Web.
Avec cette nouvelle version, GA4 se tourne vers l’avenir et effectue une nouvelle mue quant à la collecte et le traitement de ses données."* [^3]

Un évènement =
- une session
- un click
- une transaction
- l'envoi d'un formulaire
- le chargement d'une page

La personnalisation de la collecte des données sera réduite.   
Les adresses IP ne seront plus stockées.   
Pour en savoir plus: [Comparaison des modèles de données Universal Analytics et Google Analytics 4](https://support.google.com/analytics/answer/9964640#zippy=%2Cau-sommaire-de-cet-article)   
NB: Google annonce la fin de la collecte des cookies tiers pour 2023 [^4]




## Google Analytics: objectifs

- Analyser l'audience, ses caractéristiques, ses comportements
- Ajuster sa stratégie marketing
- Adapter sa communication/son contenu (cibler & personnaliser)
- Dans un but de conversion (consommation/achat) et de fidélisation des consommateurs



## Demonstration

### [Configuration](https://support.google.com/analytics/topic/9303319?hl=fr&ref_topic=9143232) [^5][^6]

<img src="GA_hierarchy.png" width="500" /> [^7] 

1. Créer un **compte** analytics  [Google Marketing Platform](https://marketingplatform.google.com/home?authuser=0)    
2. Enregistrer une **propriété** (= site web)   
3. Configurer des **Vues** paramétrées.[^8]   

GA va générer un tag à insérer dans la balise _<head>_ (sur chaque page)   

[^8]: N'existe pas dans GA4


   <!-- Google tag (gtag.js) -->   
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EDK41WWZK4"></script>   
    <script>   
      window.dataLayer = window.dataLayer || [];   
      function gtag(){dataLayer.push(arguments);}   
      gtag('js', new Date());   
   
      gtag('config', 'G-EDK41WWZK4');   
    </script>   


### [UA Demo Account](https://support.google.com/analytics/answer/6367342?hl=fr#access&zippy=%2Cau-sommaire-de-cet-article) [^9]
  
  

[^9]: Données basées sur le [Google Official Merchandise Store](https://shop.googlemerchandisestore.com/?utm_source=partners&utm_medium=affiliate&utm_campaign=data%20share%20article)




## Alternatives

+ [Mamoto](https://fr.matomo.org/)
+ [MixPanel](https://mixpanel.com/fr/)
+ [Piwic Pro](https://piwik.pro/)
+ [Amplitude](https://amplitude.com/)
+ [Heap](https://heap.io/)
+ [Foxmetrics](https://www.foxmetrics.com/)
+ [Clicky](https://clicky.com/)
+ [Chartbeat](https://chartbeat.com/)
+ [Hubspot](https://www.hubspot.com/products/marketing/analytics?hubs_post=blog.hubspot.com%2Fwebsite%2Fbest-google-analytics-alternatives&hubs_post-cta=HubSpot%20Marketing%20Analytics)








  [^1]: [Google s'offre Urchin Software, spécialiste de l'analyse statistique web](https://www.lemondeinformatique.fr/actualites/lire-google-s-offre-urchin-software-specialiste-de-l-analyse-statistique-web-1320.html)   
  [^2]: [Google Analytics: Universal Analytics s'arrêtera définitivement dès le 1er Juiller 2023](https://www.slapdigital.fr/blog/universal-analytics-sarretera-1er-juillet-2023/)   
  [^3]: [Google Analytics : passé, présent et futur](https://www.ads-com.fr/actualites/google-analytics-passe-present-et-futur#:~:text=A%20l'origine%2C%20Urchin%20est,aux%20vulgaires%20compteurs%20de%20visites.)   
 [^4]: [Google et la fin des cookiers tiers, retour sur une histoire compliquée](https://www.slapdigital.fr/blog/google-fin-des-cookies-tiers/)   
  [^5]: [Configurer Analytics pour un site Web (Universal Analytics)](https://support.google.com/analytics/answer/10269537?ref_topic=1009620)   
  [^6]: [GA4 Configurer Analytics pour un site Web et/ou une application](https://support.google.com/analytics/answer/9304153?hl=fr#zippy=%2Capplication-ios-ou-android%2Cajouter-la-balise-%C3%A0-un-outil-de-cr%C3%A9ation-de-sites-web-ou-%C3%A0-un-site-web-h%C3%A9berg%C3%A9-par-un-cms-par-exemple-wordpress-shopify-etc%2Cajouter-la-balise-google-directement-%C3%A0-vos-pages-web)
  [^7]: [Hiérarchie des entreprises, comptes, utilisateurs, propriétés et vues](https://support.google.com/analytics/answer/1009618?hl=fr&ref_topic=1102143#zippy=%2Ccet-article-aborde-les-points-suivants)   


## Bibliographie
+ [Google Analytics Demo Account](https://support.google.com/analytics/answer/6367342?hl=fr#zippy=%2Cau-sommaire-de-cet-article)
+ [Google Analytics : passé, présent et futur](https://www.ads-com.fr/actualites/google-analytics-passe-present-et-futur#:~:text=A%20l'origine%2C%20Urchin%20est,aux%20vulgaires%20compteurs%20de%20visites.)
+ [Google Analytics & RGPD: la CNIL donne le ton !](https://www.slapdigital.fr/blog/google-analytics-rgpd-cnil/)
+ [Top 8 des alternatives à l’outil Google Analytics](https://www.lafabriquedunet.fr/analytics/articles/alternatives-google-analytics/)
+ [22 Google Analytics Alternatives for 2022](https://www.leadfeeder.com/blog/google-analytics-alternatives/)
+ [Privacy Sandbox: l'alternative aux cookies tiers made in Google](https://www.slapdigital.fr/blog/google-privacy-sandbox-alternative-cookies-tiers/)
+ [Pourquoi migrer dès maintenant de universal Analytics vers Google Analytics 4](https://www.slapdigital.fr/blog/pourquoi-migrer-maintenant-universal-analytics-vers-google-analytics-4/)
+ [Pourquoi et comment passer à GA4 (nouveau Google Analytics)](https://www.webrankinfo.com/dossiers/google-analytics/passer-a-ga4)
+ [Google Analytics Cookie Usage on Websites](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=fr)   
+ [Youtube|Valentin Heinly : Google Analytics - Tutoriel débutant](https://www.youtube.com/watch?v=V-zkhZqcNp8&ab_channel=ValentinHeinly)
+ [Définir une session Web dans Universal Analytics](https://support.google.com/analytics/answer/2731565#zippy=%2Cau-sommaire-de-cet-article)
