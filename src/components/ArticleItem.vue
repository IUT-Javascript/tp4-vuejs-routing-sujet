<script setup>
const emit = defineEmits(['deleteArticle']);

defineProps({
  id : {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

function handleDeleteArticle() {
  console.log('Delete article:', id);

  //Kamel case
  emit('deleteArticle', id); // On émet un événement personnalisé 'deleteArticle' avec l'ID de l'article à supprimer
}

</script>

<template>
    <article>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <button @click="handleDeleteArticle">Delete</button>
    </article>
</template>