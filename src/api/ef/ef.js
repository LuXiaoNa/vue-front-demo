import request from '@/utils/request'

//获取数据
export function queryEasyFlow(data) {
    return request({
        url: '/ef/queryEasyFlowData',
        method: 'post',
        data
    })
}