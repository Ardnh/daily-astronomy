import { defineStore } from "pinia";
import axios from "axios";

export const useHomeStore = defineStore('homeStore',{
    state: () => ({
        base_url: 'https://api.nasa.gov',
        api_key: 'j8788roS1kq6VUnNmqn6dicfx9Mkn0QFOaodaIuU',
        latestApod: {},
        multipleApod: []
    }),
    getters: {
        getLatestApod: (state) => state.latestApod,
        getMultipleApod: (state) => state.multipleApod
    },
    actions: {
        async fetchLatestApod(){
            this.latestApod = {}
            const url = `${ this.base_url }/planetary/apod?api_key=${ this.api_key }`
            try {
                await axios.get(url)
                    .then(res => {
                        this.latestApod = res.data
                    })
                    .catch(err =>  console.log(err))
            } catch (err) {
                console.log(err)
            }

        },
        multipleApod(){
            console.log("hehe")
        }
    }
})