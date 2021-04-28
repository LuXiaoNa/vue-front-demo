import request from '@/utils/request'

//今日情况获取数据
export function getSituationData(data) {
    return request({
        url: '/monitor/todaySituationData',
        method: 'get',
        params: data
    })
}
//综合情况
export function situationData(data) {
    return request({
        url: '/monitor/situationData',
        method: 'get',
        params: data
    })
}
//基本信息
export function baseData(data) {
    return request({
        url: '/monitor/baseData',
        method: 'get',
        params: data
    })
}
//值班信息
export function dutyData(data) {
    return request({
        url: '/monitor/dutyData',
        method: 'get',
        params: data
    })
}