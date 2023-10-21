# Passerelle Ga -> Tally

## Introduction
Ce site a été conçu pour rediriger les utilisateurs vers un formulaire après avoir scanné un QR code. Le processus de redirection est enrichi avec le suivi de Google Analytics pour analyser le trafic et les interactions des utilisateurs. qr-code-passerelle-ga-tally.vercel.app

## Parcours Utilisateur
1. **Scan du QR Code** : 
   L'utilisateur commence par scanner un QR Code avec son appareil mobile.
   
2. **Redirection avec Suivi Google Analytics** :
   Le QR Code contient un lien intégrant un suivi Google Analytics. En scannant le QR Code, l'utilisateur est d'abord redirigé vers ce site, permettant ainsi d'enregistrer son action grâce à Google Analytics.
   
3. **Redirection vers le Formulaire** :
   Après la collecte des données analytiques, ce site redirige automatiquement l'utilisateur vers le site du formulaire où il peut entrer les informations demandées.

## Mécanique Détaillée
1. **Scan du QR Code** :
   - L'utilisateur utilise l'appareil photo de son smartphone ou une application de scan de QR code pour scanner le QR code.
   
2. **Redirection avec Suivi Google Analytics** :
   - Le lien contenu dans le QR Code est structuré pour enregistrer un événement ou une page vue dans Google Analytics.
   - L'utilisateur est redirigé vers ce site, et l'action est enregistrée dans Google Analytics pour une analyse future.

3. **Redirection vers le Formulaire** :
   - Une fois sur ce site, une redirection automatique est mise en place pour diriger l'utilisateur vers le site du formulaire.
   - Cette redirection est réalisée soit via une méta-balise HTML de rafraîchissement, soit via JavaScript/Angular selon la mise en œuvre technique du site.

## Configuration Google Analytics
Afin de suivre le parcours des utilisateurs, assurez-vous que Google Analytics est correctement configuré pour enregistrer les événements ou les pages vues lors de la redirection.

## Contribution
Si vous avez des suggestions ou des corrections à apporter, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence
[Insérer les informations sur la licence ici, si applicable]
