# 12 Degrés Kigali — Site vitrine

Site vitrine responsive bilingue français/anglais. Ouvrir `index.html` dans un navigateur, ou déployer le dossier sur Cloudflare Pages, Netlify ou un hébergement statique.

## Langues
- `index.html` : français par défaut ; `en.html` : anglais.
- Le sélecteur FR/EN reste visible sur mobile et fonctionne sans JavaScript.
- `language.js` mémorise le choix et conserve la section consultée. `index.html?lang=fr` revient explicitement au français.
- Déployer les deux pages et `language.js` ensemble. Mettre à jour les deux pages lors des modifications de contenu.

## Sections
- Accueil / signature de marque
- La maison
- Expériences : cave, gastronomie, rencontres
- Vins
- Événements (formats, sans dates inventées)
- Contact, réservation par lien WhatsApp et carte

## À valider avant publication
1. **Adresse** : les sources ne concordent pas. FindGlocal affiche « 24 KG 566 Street » tandis qu'une annonce d'événement de juillet 2026 mentionne « 18 KG 8 Avenue » et Bing Maps pointe vers -1.956113, 30.105579. La carte affiche le point transmis par l'utilisateur. Confirmer le lieu exact avant de publier.
2. **Téléphone** : FindGlocal donne +250 791 938 642. Les publications d'événements utilisent +250 790 666 687 pour les inscriptions, ce qui est utilisé pour le CTA WhatsApp. Valider que ce numéro reçoit bien les réservations ordinaires.
3. **Horaires** : non publiés ici car susceptibles d'être périmés.
4. **Photos** : images d'ambiance génériques issues d'Unsplash, non représentatives du lieu réel. Remplacer par les photographies autorisées de 12 Degrés avant mise en ligne officielle.
5. **Réservation** : clic WhatsApp seulement, aucune intégration de disponibilité ou de confirmation automatique.

## Sources de rédaction
- https://www.findglocal.com/RW/Kigali/104433852472149/12-Degr%C3%A9s-Kigali
- https://www.linkedin.com/company/12-degres
- https://eventsbash.rw/event-details/special-french-apero-5y47ia
- https://www.instagram.com/12degreskgl/

## Déploiement Cloudflare Pages
Créer un projet **Pages** et téléverser les fichiers du dossier à l'aide du mode « Direct Upload ». Aucune étape de compilation n'est requise.
