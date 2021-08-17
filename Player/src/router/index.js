/*
 * @Author: your name
 * @Date: 2021-08-17 14:12:16
 * @LastEditTime: 2021-08-17 14:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \player\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Found from "../views/Found.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Found",
        component: Found,
    },
    {
        path: "/podcast",
        name: "Podcast",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Podcast.vue"),
    },
    {
        path: "/mine",
        name: "Mine",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Mine.vue"),
    },
    {
        path: "/songRoom",
        name: "SongRoom",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/SongRoom.vue"),
    },
    {
        path: "/cloudVillage",
        name: "CloudVillage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/CloudVillage.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;