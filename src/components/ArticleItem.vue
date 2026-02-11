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

function deleteArticle() {
  console.log('Delete article:', id);

  emit('deleteArticle', id); // On émet un événement personnalisé 'deleteArticle' avec l'ID de l'article à supprimer
}

</script>

<template>
    <article>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <button @click="deleteArticle">Delete</button>
    </article>
</template>