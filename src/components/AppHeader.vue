<script>
import { store } from '../assets/data/store'
import axios from 'axios'


export default {
    data() {
        return {
            store,
            filmUtente: "",
            serieUtente: ""
        }
    },
    methods: {
        filmGen() {
            this.store.apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=5c25232faab1c5179701ebf291d09238&query=' + this.filmUtente
            axios.get(this.store.apiUrl).then((risp) => {
                const risposta = risp.data.results
                console.log(risposta)
                this.store.films = risposta
                console.log("mio film", this.store.films)

                // this.store.apiSeriesUrl = 'https://api.themoviedb.org/3/search/tv?api_key=5c25232faab1c5179701ebf291d09238&query=' + this.serieUtente
                // axios.get(this.store.apiSeriesUrl).then((risp) => {
                //     const risposta = risp.data.results
                //     console.log(risposta)
                //     this.store.series = risposta
                //     console.log("mio serie", this.store.series)
                // })
            })
        },
        seriesGen() {

        }

    },
    mounted() {
        console.log(this.prova);
    }
}

</script>
<template>
    <section>
        <div class="head">
            <h1>Boolflix</h1>
            <div class="inputContainer">
                <input @keyup="filmGen" v-model="filmUtente" type="text" placeholder="cerca il film">
                <button @click="filmGen()">Clicca per cercare i film</button>
            </div>
        </div>
    </section>
</template>
<style scoped>
.head {
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
}

.head img {
    max-width: 100px;
    margin-left: 20px;
    margin-right: 20px;
}

.head h1 {
    font-size: 30px;
}

.head button {
    background-color: crimson;
    color: black;
    margin-left: 20px;
    padding: 10px 35px;
    font-size: 18px;
    font-weight: 800;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.head input {
    margin-left: 20px;
    width: 200px;
    border: 2px solid crimson;
}

/* .select {
    margin-left: 20px;
    width: 100px;
} */
</style>