import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue"
import Discovery from "../views/DiscoveryView.vue"
import Gallery from "../views/GalleryView.vue"
import About from "../views/AboutView.vue"
import Detail from "../views/DetailView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/discovery',
        name: 'discovery',
        component: Discovery
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/detail/:slug',
        name: 'detail',
        component: Detail
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router