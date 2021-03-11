import request from '@/utils/request'

//柱状图获取数据
export function getBarData(data) {
    return request({
        url: '/table/getBarData',
        method: 'post',
        data
    })
}
//获取门店销售额排名
export function getSellData(data) {
    return request({
        url: '/table/sellData',
        method: 'post',
        data
    })
}
//获取销售额占比
export function getPieChartData(data) {
    return request({
        url: '/table/pieChartData',
        method: 'post',
        data
    })
}
//折线堆叠图
export function getLineChartData(data) {
    return request({
        url: '/table/lineChartData',
        method: 'post',
        data
    })
}
//用户分布
export function getUserData(data) {
    return request({
        url: '/table/userData',
        method: 'post',
        data
    })
}