const Mock = require('mockjs')
const { param2Obj } = require('@/utils/common.js')

const tableBase = require('./modules/tableBase')
const analysis = require('./modules/analysis')
const monitor = require('./modules/monitor')
const form = require('./modules/form')
const specialEcharts = require('./modules/specialEcharts')
const ef = require('./modules/ef')
const gante = require('./modules/gante')

const mocks = [
    ...analysis,
    ...monitor,
    ...specialEcharts,
    ...tableBase,
    ...form,
    ...ef,
    ...gante,
]

function mockXHR() {
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
    Mock.XHR.prototype.send = function() {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false

            if (this.responseType) {
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap(respond) {
        return function(options) {
            let result = null
            if (respond instanceof Function) {
                const { body, type, url } = options
                result = respond({
                    method: type,
                    body: JSON.parse(body),
                    query: param2Obj(url)
                })
            } else {
                result = respond
            }
            return Mock.mock(result)
        }
    }
    for (const i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
    }
}

module.exports = {
    mocks,
    mockXHR
}