import { ref } from 'vue';

const articles = ref([]);
const url = 'https://jsonplaceholder.typicode.com/posts';

export async function getArticles() {
    articles.value = []; // Réinitialiser la liste des articles avant de les charger à nouveau

    const response = await fetch(url)
    const articlesApi = await response.json();

    articlesApi.forEach(article => {
        articles.value.push({
            id: article.id,
            userId: article.userId,
            title: article.title,
            description: article.body
        });
    });

    return articles.value;
    
    // Méthode fetch pour récupérer les articles depuis une API fictive
    // Utilisation du then pour gérer la promesse retournée par fetch
    // Dans ce cas pas besoin de mettre la méthode en async/await
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => {
    //         console.error('Error fetching articles:', error);
    //         throw error;
    //     }); 
}

export function addArticle(article) {
    articles.value.unshift(article);
    addArticleToApi(article).fetch();
}

export async function deleteArticleFromApi(id) {
    const response = await fetch(url + '/' + id, {
        method: 'DELETE'
    });
    console.log('Article deleted from API:', await response.json());
    articles.value = articles.value.filter(a => a.id != id);
}

async function addArticleToApi(article) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    console.log('Article added to API:', await response.json());
}