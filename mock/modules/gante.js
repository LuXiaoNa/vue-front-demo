const ganteData = [{
    name: "小红",
    id: "108keu48jwwsiddiu93023",
    taskList: [{
        startTime: "2022-06-07T08:57:19.000+0800",
        endTime: "2022-06-07T09:20:19.000+0800",
        taskName: "订货完成",
        status: "A"
    }]
}, {
    name: "小美",
    id: "ss108keu48jiddiu93023",
    taskList: [{
        startTime: "2022-06-07T10:50:19.000+0800",
        endTime: "2022-06-07T11:20:19.000+0800",
        taskName: "接收任务",
        status: "T"
    }]
}, {
    name: "小蓝",
    id: "108keu48jiddiu93023",
    taskList: [{
        startTime: "2022-06-07T11:50:19.000+0800",
        endTime: "2022-06-07T12:20:19.000+0800",
        taskName: "执行任务",
        status: "S"
    }]
}];


module.exports = [{
    url: '/other/ganteData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: ganteData,
        }
    }
}]