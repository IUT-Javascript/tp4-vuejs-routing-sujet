<script setup>
import { defineProps } from 'vue';
import ArticleCard from './ArticleCard.vue';

defineProps({
    articles: Array
});
</script>

<template>
    <h3 v-if="articles.length">There are {{ articles.length }} articles</h3>

    <ArticleCard v-if="articles.length" v-for="article in articles" 
                    :key="article.title" 
                    :article="article"/>  
                    
    <h3 v-else>
        No articles
    </h3>
</template>