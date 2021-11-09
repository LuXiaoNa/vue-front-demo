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
        }, {
            path: 'advancedForm',
            component: () =>
                import ('@/views/form/advancedForm'),
            name: 'advancedForm',
            meta: {
                title: '高级表单'
            }
        },
        {
            path: 'editor',
            component: () =>
                import ('@/views/form/editor'),
            name: 'editor',
            meta: {
                title: '富文本编辑器'
            }
        }
    ]
}
export default formRouter