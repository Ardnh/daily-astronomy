import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore('homeStore',{
    state: () => ({
        base_url: 'https://api.nasa.gov',
        api_key: 'j8788roS1kq6VUnNmqn6dicfx9Mkn0QFOaodaIuU',
        latestApod: {},
        randomNews: [],
        searchList: [],
        detailNews: {}
    }),
    getters: {
        getLatestApod: (state) => state.latestApod,
        getRandomNews: (state) => state.randomNews,
        getDetailNews: (state) => state.detailNews
    },
    actions: {
        goToDetail(i){
            if (typeof(i) !== 'number'){
                this.detailNews = this.latestApod
            } else {
                this.detailNews = this.randomNews[i]
            }
            console.log(i)
        },
        async refreshRandomNews(){

        },
        async fetchLatestApod(){
            this.latestApod = {}
            const url = `${ this.base_url }/planetary/apod?api_key=${ this.api_key }`
            if( localStorage.getItem('latestData') === null ) {
                console.log("fetch Latest run")
                await axios.get(url)
                    .then(res => {
                        let latestData = JSON.stringify(res.data)
                        this.latestApod = res.data
                        localStorage.setItem('latestData', latestData)
                    })
                    .catch(err =>  console.log(err))
            } else {
                this.latestApod = JSON.parse(localStorage.getItem('latestData'))
            }
        },
        async fetchRandomNews(){
            this.randomNews = []
            const url = `${ this.base_url }/planetary/apod?api_key=${ this.api_key }&count=5`
            if( localStorage.getItem('randomNews') === null ){
                console.log("fetch random run")
                await axios.get(url)
                    .then( res => {
                        let randomNewsData = JSON.stringify(res.data)
                        this.randomNews = res.data
                        localStorage.setItem('randomNews', randomNewsData)
                    })
                    .catch(err => console.log(err))
            } else {
                this.randomNews = JSON.parse(localStorage.getItem('randomNews'))
                console.log(state.randomNews)
            }
        },
        async searchSpace(){
            this.searchList = []
            const url = `${ this.base_url }/planetary/apod?api_key=${ this.api_key }&count=5`
            try {
                await axios.post(url)
                        .then( res => {
                            this.searchList = red.data
                        })
                        .catch( err => console.log(err))
            } catch (error) {
                console.log(error)
            }
        },
        async roverCamera(){
            const url = `${ this.base_url }/planetary/apod?api_key=${ this.api_key }&count=5`
            try {
                await axios.post(url)
                            .then( res => {
                                // pindah halaman ke discovery
                            })
                            .catch(err => console.log(err))
            } catch (error) {
                console.log(err)
            }
        }
    }
})