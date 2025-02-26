# Tampermonkey Script - No Popup Please!

## Description

Ce script Tampermonkey est conçu pour bloquer les popups indésirables sur le site [senpai-stream.org](https://senpai-stream.org). Il retire automatiquement l'attribut `href` et d'autres attributs déclencheurs de popups d'un bouton spécifique, assurant une navigation plus propre et sans interruptions. Il gère aussi la vérification Cloudflare en attendant que celle-ci soit terminée avant de procéder aux modifications.

## Prérequis

1.  **Navigateur Web:** Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge.

2.  **Extension Tampermonkey:** Installez l'extension Tampermonkey depuis la boutique d'extensions de votre navigateur:

    *   [Tampermonkey pour Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    *   [Tampermonkey pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    *   [Tampermonkey pour Safari](https://safari-extensions.apple.com/details/?id=com.tapermonkey.tampermonkey-safari)
    *   [Tampermonkey pour Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

3.  **Mode Développeur :** Assurez-vous que le mode développeur est activé dans votre navigateur.
    * [How to do it](https://www.tampermonkey.net/faq.php#Q209)

## Installation

1.  **Créer un nouveau script:** Dans Tampermonkey, cliquez sur l'icône Tampermonkey dans la barre d'outils de votre navigateur, puis sélectionnez "Créer un nouveau script...".

2.  **Copier le code du script :** Une fois le script configuré, collez le code de votre script Tampermonkey dans l'éditeur.

3.  **Sauvegarder le script :** Enregistrez les modifications.

## Utilisation

1.  **Accédez au site :** Visitez [senpai-stream.org](https://senpai-stream.org) ou une page où le bouton problématique apparaît.

2.  **Vérification Cloudflare :** Si Cloudflare est actif, le script attendra que la vérification soit terminée. Vous pouvez suivre le processus dans la console du navigateur.

3.  **Modification automatique :** Une fois Cloudflare passé, le script modifiera automatiquement le bouton pour empêcher les popups.

## Débogage

1.  **Ouvrir la console :** Ouvrez la console de votre navigateur (F12 ou Cmd+Option+J sur macOS).

2.  **Vérifier les logs :** Les messages `console.log` dans le script vous informeront de l'état de l'exécution (attente de Cloudflare, modification du bouton, etc.).

3.  **Signaler les problèmes :** Si vous rencontrez des problèmes, vérifiez la console pour les erreurs et signalez-les.

## Support

