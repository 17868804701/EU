const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/InformationGathering',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/InformationGathering/InformationGathering.vue'], resolve)
    },
    {
        path: '/ReleaseInformation',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/InformationGathering/ReleaseInformation.vue'], resolve)
    },
    {
        path: '/ReleaseInformation_info',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/InformationGathering/ReleaseInformation_info.vue'], resolve)
    },
    {
        path: '/ReleaseInformation_setp2',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/InformationGathering/ReleaseInformation_setp2.vue'], resolve)
    }
];
export default routers;