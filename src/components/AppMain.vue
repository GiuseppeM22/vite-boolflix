<script>

import { store } from '../assets/data/store'

export default {
    data() {
        return {
            store,
            stelle: 5,
        }
    },
    methods: {
        // changeLang(vote) {
        //     for (let i = 0; i < this.store.films.length; i++) {
        //         const langEle = this.store.films[i];
        //         let vote = Math.round(langEle.vote_average / 2)
        //         console.log(vote)

        //     }
        // }
    }

}

</script>
<template>
    <section class="bg_orange">
        <div class="whiteContainer">
            <!-- generazione in pagina dei film -->
            <h3 class="found" v-if="store.films.length > 0">FOUND {{ store.films.length }} FILMS</h3>
            <div class="cardsContainer">
                <div v-for="film in store.films" class="carde">
                    <img v-if="film.poster_path" class="poster" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`"
                        :alt="`${film.title}`">
                    <img v-else="" class="poster"
                        src="https://www.molecular-uk.com/wp-content/uploads/2021/11/image-coming-soon-placeholder.png"
                        alt="">
                    <div class="infoContainer ">
                        <h3 class="name">{{ film.title }}</h3>
                        <h4 class="type">{{ film.original_title }}</h4>
                        <p class="type">{{ film.original_language }}</p>
                        <img class="flag" :src="`https://flagcdn.com/${film.original_language}.svg`" alt="">
                        <div class="stars">
                            <span>Rated:</span>
                            <template v-for="i in 5">
                                <i v-if="i <= Math.round(film.vote_average / 2)" class="fa-solid fa-star star"></i>
                                <i v-else="" class="fa-regular fa-star star"></i>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <!-- generazione in pagina delle serie -->
            <h3 class="found" v-if="store.series.length > 0">FOUND {{ store.series.length }} SERIES</h3>
            <div class="cardsContainer">
                <div v-for="serie in store.series" class="carde">
                    <img v-if="serie.poster_path" class="poster"
                        :src="`https://image.tmdb.org/t/p/w500/${serie.poster_path}`" :alt="`${serie.name}`">
                    <img v-else="" class="poster"
                        src="https://www.molecular-uk.com/wp-content/uploads/2021/11/image-coming-soon-placeholder.png"
                        alt="">
                    <div class="infoContainer ">
                        <h3 class="name">{{ serie.name }}</h3>
                        <h4 class="type">{{ serie.original_language }}</h4>
                        <img class="flag" :src="`https://flagcdn.com/${serie.original_language}.svg`" alt="">
                        <div class="stars">
                            <span>Rated:</span>
                            <template v-for="i in 5">
                                <i v-if="i <= Math.round(serie.vote_average / 2)" class="fa-solid fa-star star"></i>
                                <i v-else="" class="fa-regular fa-star star"></i>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg_orange {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.whiteContainer {
    width: 80%;
    height: 80%;
    background-color: black;

}

.whiteContainer span {
    color: white;
    margin-right: 5px;
}

.found {
    padding: 20px;
}

h3 {
    background-color: black;
    color: white;
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

.stars {
    margin: 20px;
}

.star {
    color: yellow;
}
</style>