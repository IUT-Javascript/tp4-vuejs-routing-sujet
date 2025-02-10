<script setup>
const emit = defineEmits(['add-article']);

const title = defineModel('title');
const description = defineModel('description');

function addArticle(){
    if(!title.value || !description.value){
        return;
    }

    const article = {
        title: title.value,
        description: description.value
    }

    console.log('ArticleForm.addArticle', article);
    emit('add-article', article);

    resetForm();
}

function resetForm(){
    title.value = '';
    description.value = ''; 
}
</script>

<template>
    <form @submit.prevent="addArticle">
        <div>
            <label>Title</label>
            <input type="text" v-model="title"/>
        </div>

        <div>
            <label>Description</label>
            <textarea v-model="description"></textarea>
        </div>

        <button type="submit">Add</button>
    </form>
</template>