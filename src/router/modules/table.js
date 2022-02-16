import Layout from '@/views/layout/index.vue'
const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: '/table/TableBase',
    name: 'table',
    meta: {
        title: '表格',
    },
    children: [{
            path: 'TableBase',
            component: () =>
                import ('@/views/table/TableBase'),
            name: 'TableBase',
            meta: {
                title: '基础表格'
            }
        },
        {
            path: 'ExportTable',
            component: () =>
                import ('@/views/table/ExportTable'),
            name: 'ExportTable',
            meta: {
                title: '导出表格'
            }
        },
        {
            path: 'ExportMoreSheetTable',
            component: () =>
                import ('@/views/table/ExportMoreSheetTable'),
            name: 'ExportMoreSheetTable',
            meta: {
                title: '导出多列表格'
            }
        },
        {
            path: 'SortTable',
            component: () =>
                import ('@/views/table/SortTable'),
            name: 'SortTable',
            meta: {
                title: '拖拽表格'
            }
        },
        {
            path: 'SelectTable',
            component: () =>
                import ('@/views/table/SelectTable'),
            name: 'SelectTable',
            meta: {
                title: '回显勾选表格'
            }
        },
    ]
}
export default tableRouter