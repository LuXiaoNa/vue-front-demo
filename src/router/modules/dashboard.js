import Layout from '@/views/layout/index.vue'
const dashboardRouter = {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/Monitor',
    name: 'dashboard',
    meta: {
        title: '仪表盘',
    },
    children: [{
            path: 'Monitor',
            component: () =>
                import ('@/views/dashboard/Monitor'),
            name: 'Monitor',
            meta: {
                title: '监控页'
            }
        },
        {
            path: 'Analysis',
            component: () =>
                import ('@/views/dashboard/Analysis'),
            name: 'Analysis',
            meta: {
                title: '分析页'
            }
        },
        {
            path: 'SpecialEcharts',
            component: () =>
                import ('@/views/dashboard/SpecialEcharts'),
            name: 'SpecialEcharts',
            meta: {
                title: '特殊图'
            }
        },

    ]
}
export default dashboardRouter