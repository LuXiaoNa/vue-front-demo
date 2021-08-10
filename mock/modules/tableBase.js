const tableData = [{
        order: '1',
        check: true,
        name: 'lxj1号店',
        visiter: 221,
        orderQuantity: 25,
        sellMoney: '2212'
    }, {
        order: '2',
        check: false,
        name: 'lxj2号店',
        visiter: 201,
        orderQuantity: 21,
        sellMoney: '2200'
    }, {
        order: '3',
        check: false,
        name: 'lxj3号店',
        visiter: 181,
        orderQuantity: 19,
        sellMoney: '1920'
    },
    {
        order: '4',
        check: true,
        name: 'lxj4号店',
        visiter: 171,
        orderQuantity: 21,
        sellMoney: '1890'
    }, {
        order: '5',
        check: true,
        name: 'lxj5号店',
        visiter: 121,
        orderQuantity: 16,
        sellMoney: '1782'
    }
];
const echartData = {
    x: ["一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
    ],
    y: [120, 200, 150, 80, 70, 110, 131, 232, 112, 331, 441, 333]
};
const pieEchartData = [
    { value: 1048, name: "家用电器", itemStyle: { color: "#FF00FF" } },
    { value: 735, name: "个护健康", itemStyle: { color: "#DDA0DD" } },
    { value: 580, name: "服饰箱包", itemStyle: { color: "#BA55D3" } },
    { value: 484, name: "母婴产品", itemStyle: { color: "#8A2BE2" } },
    { value: 300, name: "其他", itemStyle: { color: "#FF8C69" } },
];
const lineEchartData = [{
        name: '家用电器',
        type: 'line',
        stack: '总量',
        color: '#FF00FF',
        data: [320, 232, 301, 434, 490, 530, 510]
    },
    {
        name: '个护健康',
        type: 'line',
        stack: '总量',
        color: '#DDA0DD',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '服饰箱包',
        type: 'line',
        stack: '总量',
        color: '#BA55D3',
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '母婴产品',
        type: 'line',
        stack: '总量',
        color: '#8A2BE2',
        data: [220, 332, 301, 334, 390, 330, 320]
    },
    {
        name: '其他',
        type: 'line',
        stack: '总量',
        color: '#FF8C69',
        data: [220, 432, 301, 334, 290, 330, 220]
    }
];
const userData = {
    x: ["北京",
        "天津",
        "上海",
        "江苏",
        "山东",
        "河南",
        "河北",
        "湖南",
        "湖北",
        "浙江",
        "广州",
        "四川",
        "西藏",
        "新疆",
        "黑龙江",
        "吉林",
        "广西",
        "江西",
        "辽宁",
        "香港",
        "澳门",
        "台湾",
        "宁夏回族自治区"
    ],
    y: [11, 12, 19, 23, 18, 14, 21, 30, 21, 10, 22, 12, 9, 20, 33, 41, 23, 25, 27, 13, 44, 13, 15]
};
module.exports = [{
        url: '/table/getBarData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: echartData,
            }
        }
    },
    {
        url: '/table/sellData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: tableData,
                msg: '表格数据加载成功'
            }
        }
    },
    {
        url: '/table/pieChartData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: pieEchartData,
            }
        }
    },
    {
        url: '/table/lineChartData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: lineEchartData,
            }
        }
    },
    {
        url: '/table/userData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: userData,
            }
        }
    }
]