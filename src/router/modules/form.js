import Layout from '@/views/layout/index.vue'
const formRouter = {
    path: '/form',
    component: Layout,
    redirect: '/form/baseForm',
    name: 'form',
    meta: {
        title: '表单',
    },
    children: [{
        path: 'baseForm',
        component: () =>
            import ('@/views/form/baseForm'),
        name: 'baseForm',
        meta: {
            title: '基础表单'
        }
    }, ]
}
export default formRouter