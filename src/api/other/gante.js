import request from '@/utils/request'

//柱状图获取数据
export function getGante(data) {
    return request({
        url: '/other/ganteData',
        method: 'get',
        params: data
    })
}