import Layout from '@/views/layout/index.vue'
const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: '/table/tableBase',
    name: 'table',
    meta: {
        title: '表格',
    },
    children: [{
            path: 'tableBase',
            component: () =>
                import ('@/views/table/tableBase'),
            name: 'tableBase',
            meta: {
                title: '基础表格'
            }
        },
        {
            path: 'exportTable',
            component: () =>
                import ('@/views/table/exportTable'),
            name: 'exportTable',
            meta: {
                title: '导出表格'
            }
        },
        {
            path: 'sortTable',
            component: () =>
                import ('@/views/table/sortTable'),
            name: 'sortTable',
            meta: {
                title: '拖拽表格'
            }
        },
        {
            path: 'selectTable',
            component: () =>
                import ('@/views/table/selectTable'),
            name: 'selectTable',
            meta: {
                title: '回显勾选表格'
            }
        },
    ]
}
export default tableRouter