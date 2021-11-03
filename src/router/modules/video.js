import Layout from '@/views/layout/index.vue'
const videoRouter = {
    path: '/video',
    component: Layout,
    redirect: '/video/video',
    name: 'video',
    meta: {
        title: '视频',
    },
    children: [{
        path: 'video',
        component: () =>
            import ('@/views/video/video'),
        name: 'video',
        meta: {
            title: '萤虫视频'
        }
    }]
}
export default videoRouter