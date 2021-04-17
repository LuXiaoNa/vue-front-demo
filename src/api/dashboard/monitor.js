import request from '@/utils/request'

//今日情况获取数据
export function getSituationData(data) {
    return request({
        url: '/monitor/situationData',
        method: 'get',
        params: data
    })
}