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