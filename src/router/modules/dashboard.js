import Layout from '@/views/layout/index.vue'
const dashboardRouter = {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'dashboard',
    meta: {
        title: '仪表盘',
    },
    children: [{
            path: 'monitor',
            component: () =>
                import ('@/views/dashboard/monitor'),
            name: 'monitor',
            meta: {
                title: '监控页'
            }
        },
        {
            path: 'analysis',
            component: () =>
                import ('@/views/dashboard/analysis'),
            name: 'analysis',
            meta: {
                title: '分析页'
            }
        },

    ]
}
export default dashboardRouter