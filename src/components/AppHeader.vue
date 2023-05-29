<script>
import { store } from '../assets/data/store'
import axios from 'axios'


export default {
    data() {
        return {
            store,
            Utente: "",
        }
    },
    methods: {
        startSearch() {
            this.filmGen()
            this.seriesGen()
        },
        filmGen() {
            this.store.apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=5c25232faab1c5179701ebf291d09238&query=' + this.Utente
            axios.get(this.store.apiUrl).then((risp) => {
                const risposta = risp.data.results
                this.store.films = risposta


            })
        },
        seriesGen() {
            this.store.apiSeriesUrl = 'https://api.themoviedb.org/3/search/tv?api_key=5c25232faab1c5179701ebf291d09238&query=' + this.Utente
            axios.get(this.store.apiSeriesUrl).then((risp) => {
                const risposta = risp.data.results
                this.store.series = risposta
            })
        }

    },

}

</script>
<template>
    <section>
        <div :class="(this.store.films <= 0) ? 'center' : 'head'">
            <h1>Boolflix</h1>
            <div class=" inputContainer">
                <input @keyup="startSearch" v-model="Utente" type="text" placeholder="cosa vuoi guardare">
            </div>
        </div>
    </section>
</template>
<style scoped>
.head {
    display: flex;
    padding: 20px;
    align-items: center;
    background-color: black;
}

.center {
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.head img {
    max-width: 100px;
    margin-left: 20px;
    margin-right: 20px;
}

.head h1 {
    font-size: 30px;
    color: red;
    margin-left: 150px;
}

.center h1 {
    font-size: 30px;
    color: red;
    margin-left: 150px;
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
    width: 266px;
    border: 2px solid red;
    height: 30px;
    border-radius: 10px;
    padding: 10px;

}

.center button {
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

.center input {
    margin-left: 20px;
    width: 266px;
    border: 2px solid red;
    height: 30px;
    border-radius: 10px;
    padding: 10px;

}

/* .select {
    margin-left: 20px;
    width: 100px;
} */
</style>