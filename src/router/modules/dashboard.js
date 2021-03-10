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
            path: 'analysis',
            component: () =>
                import ('@/views/dashboard/analysis'),
            name: 'analysis',
            meta: {
                title: '分析页'
            }
        },
        {
            path: 'workplace',
            component: () =>
                import ('@/views/dashboard/workplace'),
            name: 'workplace',
            meta: {
                title: '工作台'
            }
        },
    ]
}
export default dashboardRouter