requirejs([
    'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.5.1/dist/vue-router.min.js',
    'config/routes'
], function (
    Vue,
    VueRouter,
    routes
) {
    const router = new VueRouter({
        routes,
        mode: 'history'
    })

    Vue.use(VueRouter)

    new Vue({
        router,
        render: function (h) {
            return h('router-view')
        }
    })
        .$mount('#app')
})