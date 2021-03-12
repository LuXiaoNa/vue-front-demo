import request from '@/utils/request'

//获取数据
export function getTableData(data) {
    return request({
        url: '/form/getTableData',
        method: 'post',
        data
    })
}