// ==UserScript==
// @name         Remove Href and Prevent Popups - Cloudflare Compatible
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sempai-bypasser
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

            
            modifyButton();
        } else {
            console.log('En attente de la vérification Cloudflare...');
        }
    }, 1000);

    function modifyButton() {
        console.log('Modification du bouton en cours...');

        
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
    }
})();
