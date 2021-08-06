import request from '@/utils/request'

//柱状图获取数据
export function getLiqueData(data) {
    return request({
        url: '/specialEcharts/liqueData',
        method: 'get',
        params: data
    })
}