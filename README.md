# TP Vue.js - Mise en Place du Routage

##  Objectifs

Dans ce TP, vous allez implémenter un système de routage avec Vue Router pour créer une application multi-pages de gestion d'articles.

---

##  Fonctionnalités à implémenter

### 1 Mettre en place Vue Router
- **Installation** : Intégrer Vue Router au projet
- **Configuration** : Définir les routes et le mode routeur
- **Documentation** : [Vue Router Installation](https://router.vuejs.org/installation.html)

### 2 Créer une barre de navigation (NavBar)
- **Liens** : Ajouter deux liens de navigation
  - "Liste des articles"  Page d'affichage
  - "Ajouter un article"  Formulaire d'ajout
- **Placement** : Afficher la NavBar de manière persistante (en dehors du RouterView)

### 3 Implémenter la page "Ajouter un article"
- **Route** : /articles/add
- **Composant** : ArticleForm
- **Fonctionnalité** : Afficher le formulaire et gérer l'ajout d'un article à l'API
- **Redirection** : Retourner à la liste après submission

### 4 Implémenter la page "Liste des articles"
- **Route** : / (route par défaut)
- **Composant** : ArticleList
- **Fonctionnalité** : Afficher tous les articles récupérés de l'API

### 5 Ajouter les liens vers les détails
- **Modifier** : Composant ArticleItem
- **Action** : Ajouter un lien cliquable sur le titre de l'article
- **Navigation** : Rediriger vers /articles/:id

### 6 Créer la page de détail d'un article
- **Route** : /articles/:id
- **Composant** : ArticleDetail
- **Contenu** : Afficher l'article complet récupéré de l'API

### 7 Ajouter la suppression d'article
- **Redirection** : Retourner automatiquement à la liste après suppression

---

##  Ressources utiles

| Sujet | Lien |
|-------|------|
| **Vue Router** | [Vue Router - Getting Started](https://router.vuejs.org/introduction.html) |
| **Dynamic Route Matching** | [Vue Router - Dynamic Routes](https://router.vuejs.org/guide/essentials/dynamic-matching.html) |
| **Programmatic Navigation** | [Vue Router - Navigation](https://router.vuejs.org/guide/essentials/navigation.html) |
| **Vue.js Guide** | [Vue.js Documentation](https://vuejs.org/guide/introduction.html) |

---

##  Conseils

-  Organisez vos routes dans main.js avec un tableau de configuration clair
-  Utilisez 
outer.push() pour les redirections après les actions
-  Accédez aux paramètres de route avec 
oute.params ou les props de route
-  Vérifiez que l'API répond correctement avant de rediriger (surtout pour la suppression)
-  Testez chaque route individuellement dans la barre d'adresse du navigateur
