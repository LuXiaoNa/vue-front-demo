import request from '@/utils/request'

//今日情况获取数据
export function getTodaySituationData(data) {
    return request({
        url: '/monitor/todaySituationData',
        method: 'get',
        params: data
    })
}
//流控受影响情况
export function getflowControlData(data) {
    return request({
        url: '/monitor/flowControlData',
        method: 'get',
        params: data
    })
}
//专机要客
export function getVipGuestData(data) {
    return request({
        url: '/monitor/VipGuestData',
        method: 'get',
        params: data
    })
}
//机场综合情况
export function getAirportSituationData(data) {
    return request({
        url: '/monitor/airportSituationData',
        method: 'get',
        params: data
    })
}
//当日放行情况
export function getReleaseData(data) {
    return request({
        url: '/monitor/releaseData',
        method: 'get',
        params: data
    })
}
//机位监控
export function seatControl(data) {
    return request({
        url: '/monitor/seatControl',
        method: 'get',
        params: data
    })
}
//气象概况
export function getWeatherData(data) {
    return request({
        url: '/monitor/weatherData',
        method: 'get',
        params: data
    })
}
//值班信息
export function getDutyData(data) {
    return request({
        url: '/monitor/dutyData',
        method: 'get',
        params: data
    })
}