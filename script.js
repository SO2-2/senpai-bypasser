// ==UserScript==
// @name         Remove Popups - Cloudflare Compatible - Auto Click Continue
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Bypasser de backlink senpai
// @author       SO2
// @match        *://senpai-stream.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Script Tampermonkey chargé.');

   
    const checkCloudflare = setInterval(() => {
        const cloudflareStatus = document.querySelector('#cf-spinner, .cf-browser-verification');
        if (!cloudflareStatus) {
            console.log('Cloudflare vérification terminée.');
            clearInterval(checkCloudflare);

            
            modifyElements();
            autoClickContinue(); 
        } else {
            console.log('En attente de la vérification Cloudflare...');
        }
    }, 1000);

    function modifyElements() {
        console.log('Modification des éléments en cours...');

        
        const button = document.querySelector('a[href="https://echonverforrinho.info/?pm3t3=1149595"]');
        if (button) {
            button.removeAttribute('href');
            button.removeAttribute('target');
            button.removeAttribute('wire:click');
            button.style.cursor = 'default'; 
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                console.log('Popup prévenue, clic bloqué.');
            });
            console.log('Le bouton a été modifié avec succès.');
        } else {
            console.log("Bouton non trouvé sur la page.");
        }

     
        const promoPopup = document.querySelector('.fixed.bottom-4.left-0.right-0.z-40');
        if (promoPopup) {
            promoPopup.style.display = 'none'; 
            console.log('Popup de promotion supprimé.');
        } else {
            console.log("Popup de promotion non trouvé sur la page.");
        }
    }

    function autoClickContinue() {
        let clickCount = 0;
        const maxClicks = 6;

        const clickInterval = setInterval(() => {
            
            const continueButton = document.querySelector('a[href="https://echonverforrinho.info/?pm3t3=1149595"]');

            if (continueButton) {
                
                if (continueButton.offsetParent !== null) {
                    continueButton.click();
                    clickCount++;
                    console.log(`Clicked 'Continuer' button ${clickCount} times.`);

                    if (clickCount >= maxClicks) {
                        clearInterval(clickInterval);
                        console.log('Auto-clicking completed.');
                    }
                } else {
                    console.log("Le bouton 'Continuer' n'est pas visible encore.");
                }
            } else {
                console.log("Bouton 'Continuer' non trouvé. En attente...");
            }
        }, 15); // Interval de click
    }
})();
