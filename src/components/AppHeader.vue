<script>
import { store } from '../assets/data/store'
import axios from 'axios'


export default {
    data() {
        return {
            store,
            filmUtente: ""
        }
    },
    methods: {
        filmGen() {
            this.store.apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=5c25232faab1c5179701ebf291d09238&query=' + this.filmUtente
            axios.get(this.store.apiUrl).then((risp) => {
                const risposta = risp.data.results
                console.log(risposta)
                this.store.films = risposta
                console.log("mio", this.store.films)




            })
        }

    }
}

</script>
<template>
    <section>
        <div class="head">
            <img src="" alt="">
            <h1>Boolflix</h1>
            <!-- prendo il valore della select attraverso il v-model per poterlo inserire nell'archetipoSelezionato dichiarato nel data sopra -->
            <select class="select">
                <!-- ciclo sul mio array precedentemente popolato e popolo le option con tutti i nomi degli archetipi presenti in quell'array -->
                <option>Tutti</option>
            </select>
            <input v-model="filmUtente" type="text" placeholder="cerca il film">
            <button @click="filmGen()">Clicca per generare i film</button>
        </div>
    </section>
</template>
<style scoped>
.head {
    display: flex;
    padding: 20px;
    align-items: center;
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

.select {
    margin-left: 20px;
    width: 100px;
}
</style>