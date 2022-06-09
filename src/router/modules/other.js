import Layout from '@/views/layout/index.vue'
const otherRouter = {
    path: '/other',
    component: Layout,
    redirect: '/other/EasyFlow',
    name: 'other',
    meta: {
        title: '其他',
    },
    children: [{
        path: 'EasyFlow',
        component: () =>
            import ('@/views/other/EasyFlow'),
        name: 'EasyFlow',
        meta: {
            title: '流程图'
        }
    }, {
        path: 'EasyFlowPanel',
        component: () =>
            import ('@/views/other/EasyFlowPanel'),
        name: 'EasyFlowPanel',
        meta: {
            title: '封装流程图'
        }
    }, {
        path: 'TestEasyFlow',
        component: () =>
            import ('@/views/other/TestEasyFlow'),
        name: 'TestEasyFlow',
        meta: {
            title: '模拟跨域调用流程图'
        }
    }, {
        path: 'Video',
        component: () =>
            import ('@/views/other/Video'),
        name: 'Video',
        meta: {
            title: '萤虫视频'
        }
    }, {
        path: 'SimpleMap',
        component: () =>
            import ('@/views/other/SimpleMap'),
        name: 'SimpleMap',
        meta: {
            title: '简单地图'
        }
    }, {
        path: 'Enimation',
        component: () =>
            import ('@/views/other/Enimation'),
        name: 'Enimation',
        meta: {
            title: '动画效果'
        }
    }, {
        path: 'Gante',
        component: () =>
            import ('@/views/other/Gante'),
        name: 'Gante',
        meta: {
            title: '甘特图'
        }
    }]
}
export default otherRouter