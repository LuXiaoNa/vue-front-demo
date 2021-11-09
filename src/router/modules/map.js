import Layout from '@/views/layout/index.vue'
const mapRouter = {
    path: '/map',
    component: Layout,
    redirect: '/map/simpleMap',
    name: 'map',
    meta: {
        title: '地图',
    },
    children: [{
        path: 'simpleMap',
        component: () =>
            import ('@/views/map/simpleMap'),
        name: 'simpleMap',
        meta: {
            title: '简单地图'
        }
    }]
}
export default mapRouter