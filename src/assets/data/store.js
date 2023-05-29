
import { reactive } from 'vue'
import { compileTemplate } from 'vue/compiler-sfc'

export const store = reactive({
    apiUrl: '',
    apiSeriesUrl: '',
    films: [],
    series: [],
})

