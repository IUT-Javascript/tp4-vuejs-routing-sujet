<script setup>
import { getArticles, deleteArticleFromApi } from '@/services/articleServices';
import { ref, onMounted } from 'vue';
import ArticleItem from './ArticleItem.vue';

const articleList = ref([]);

// onMount est un élément du cycle de vie d'un composant Vue qui s'exécute une fois que le composant est monté dans le DOM.
// C'est le moment pour effectuer des opérations asynchrones comme la récupération de données depuis une API.
onMounted(async () => {
    articleList.value = await getArticles(); // On met à jour la valeur de articleList avec les articles reçus (bien penser au .value pour les refs)
})

function handleDeleteArticle(id) {
    console.log('Delete article with ID:', id);

    deleteArticleFromApi(id); // On appelle la fonction deleteArticleFromApi pour supprimer l'article de l'API 
}  
</script>

<template>
    <h2>Article List</h2>
    
    <!-- On boucle sur articleList via v-for -->
    <ArticleItem 
        v-for="(article, index) in articleList" 
        :key="index" 
        :idArticle="article.id"
        :title="article.title" 
        :description="article.description"
        @delete-article="handleDeleteArticle" />
</template>