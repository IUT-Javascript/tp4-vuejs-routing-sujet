<script setup>
const emit = defineEmits(['deleteArticle']);

const props = defineProps({
  idArticle : {
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
  console.log('Delete article:', props.idArticle);

  //Kamel case
  emit('deleteArticle', props.idArticle); // On émet un événement personnalisé 'deleteArticle' avec l'ID de l'article à supprimer
}

</script>

<template>
    <article>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <button @click="handleDeleteArticle">Delete</button>
    </article>
</template>