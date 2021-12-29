import Layout from '@/views/layout/index.vue'
const formRouter = {
    path: '/form',
    component: Layout,
    redirect: '/form/BaseForm',
    name: 'form',
    meta: {
        title: '表单',
    },
    children: [{
            path: 'baseForm',
            component: () =>
                import ('@/views/form/BaseForm'),
            name: 'BaseForm',
            meta: {
                title: '基础表单'
            }
        }, {
            path: 'AdvancedForm',
            component: () =>
                import ('@/views/form/AdvancedForm'),
            name: 'AdvancedForm',
            meta: {
                title: '高级表单'
            }
        },
        {
            path: 'Editor',
            component: () =>
                import ('@/views/form/Editor'),
            name: 'Editor',
            meta: {
                title: '富文本编辑器'
            }
        }
    ]
}
export default formRouter