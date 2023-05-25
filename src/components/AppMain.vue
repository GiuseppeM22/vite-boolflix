<script>

import { store } from '../assets/data/store'

export default {
    data() {
        return {
            store,
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
                    <img src="" alt="">
                    <p class="name">{{ film.title }}</p>
                    <p class="type">{{ film.original_title }}</p>
                    <p class="type">{{ film.original_language + "svg" }}</p>
                    <p class="type">{{ film.vote_average }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg_orange {
    background-color: crimson;
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
}

.carde {
    width: calc(100% / 5 - 20px);
    background-color: crimson;
    margin-bottom: 20px;
    margin: 10px;
}

.carde img {
    max-width: 100%;
}

.name {
    text-align: center;
    color: white;
    margin-top: 10px;
}

.type {
    color: black;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}
</style>