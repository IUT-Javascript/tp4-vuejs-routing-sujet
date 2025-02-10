<script setup>
import { defineProps } from 'vue';

defineProps(['article']);
</script>

<template>
    <article class="border-black card p-1 m-1">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
    </article>
</template>