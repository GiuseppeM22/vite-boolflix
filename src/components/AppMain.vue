<script>

import { store } from '../assets/data/store'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        changeLang() {
            for (let i = 0; i < this.store.films.length; i++) {
                const langEle = this.store.films[i];
                let vote = Math.ceil(langEle.vote_average).toFixed()
                console.log(vote)

            }
        }
    }

}

</script>
<template>
    <section class="bg_orange">
        <div class="whiteContainer">
            <h3>Found {{ store.films.length }} film</h3>
            <div class="cardsContainer">
                <div v-for="film in store.films" class="carde">
                    <img class="poster" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" :alt="`${film.title}`">
                    <div class="infoContainer ">
                        <p class="name">{{ film.title }}</p>
                        <p class="type">{{ film.original_title }}</p>
                        <p class="type">{{ film.original_language }}</p>
                        <img class="flag" :src="`https://flagcdn.com/${film.original_language}.svg`" alt="">
                        <p class="type">{{ film.vote_average.toFixed() }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg_orange {
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.whiteContainer {
    width: 80%;
    height: 80%;
    background-color: white;

}

h3 {
    background-color: black;
    color: white;
    padding: 20px;
}

.cardsContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cardsContainer img {
    width: 30px;

}

.carde {
    width: calc(100% / 5 - 20px);
    margin-bottom: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.carde .poster {
    width: 100%;
    height: 100%;
}

.name {
    text-align: center;
    color: white;
    margin-top: 10px;
}

.type {
    color: white;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}

.infoContainer {
    position: absolute;
    transform: translate(-50% -50%);
    width: 100%;
    height: 100%;
    visibility: hidden;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.infoContainer:hover {
    background-color: black;
    opacity: 0.8;
}

.carde:hover .infoContainer {
    visibility: visible;
    cursor: pointer;

}
</style>