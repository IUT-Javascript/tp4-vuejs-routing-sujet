<script setup>
import { COLOR_ERROR } from "@/constants/colors";
import { reactive, ref } from "vue";

const error = ref('');
const emit = defineEmits(['addArticle']);

const form = reactive({
  title: '',
  description: ''
});

function handleSubmit() {
    console.log('Form submitted!', form);
    error.value = '';

    if(form.title.length < 3) {
        error.value = 'Title must be at least 3 characters long.';
        return;
    }
    
    if(form.description.length < 10) {
        error.value = 'Description must be at least 10 characters long.';
        return;
    }

    // On émet un événement personnalisé 'addArticle' avec les données du formulaire 
    const article = {
        title: form.title,
        description: form.description
    }
    emit('addArticle', article); 
    // (en utilisant la syntaxe de décomposition pour créer une nouvelle copie de l'objet form)
    //emit('addArticle', { ...form }); 
}
</script>

<template>
    <p v-if="error" :style="{ color: COLOR_ERROR }">{{ error }}</p>

    <form @submit.prevent="handleSubmit">
        <div>
            <label>Book title</label><br/>
            <input type="text" v-model="form.title"/>
        </div>

        <div>
            <label>Book description</label><br/>
            <textarea v-model="form.description"></textarea>
        </div>

        <input type="submit" value="Submit" />
    </form> 
</template>

<style scoped></style>
