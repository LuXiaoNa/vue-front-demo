import Layout from '@/views/layout/index.vue'
const flowRouter = {
    path: '/easyFlow',
    component: Layout,
    redirect: '/easyFlow/easyFlow',
    name: 'easyFlow',
    meta: {
        title: '视频',
    },
    children: [{
        path: 'easyFlow',
        component: () =>
            import ('@/views/easyFlow/easyFlow'),
        name: 'easyFlow',
        meta: {
            title: '流程图'
        }
    }]
}
export default flowRouter