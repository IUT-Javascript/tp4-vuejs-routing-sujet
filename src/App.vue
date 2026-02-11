<script setup>
import ArticleForm from './components/ArticleForm.vue';
import ArticleList from './components/ArticleList.vue';
import { addArticle } from './services/articleServices';

function handleAddArticle(article) {
  console.log('New article added:', article);

  addArticle(article);
} 
</script>

<template>
  <h1>My librarie</h1>
  
  <ArticleForm @addArticle="handleAddArticle"/>

  <ArticleList />
</template>

<style scoped></style>
