define([
    'https://cdn.jsdelivr.net/npm/http-vue-loader@1.4.2/src/httpVueLoader.min.js'
], function (
    httpVueLoader
) {
    return [
        {
            path: '/',
            component: httpVueLoader('./views/Home/Index.vue')
        },
        {
            path: '/posts',
            component: httpVueLoader('./views/Post/Index.vue')
        }
    ]
})