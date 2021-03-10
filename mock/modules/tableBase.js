const tableData = [{
        order: '1',
        name: 'lxj1号店',
        orderQuantity: 25,
        sellMoney: '2212'
    }, {
        order: '2',
        name: 'lxj2号店',
        orderQuantity: 21,
        sellMoney: '2200'
    }, {
        order: '3',
        name: 'lxj3号店',
        orderQuantity: 19,
        sellMoney: '1920'
    },
    // {
    //     order: '4',
    //     name: 'lxj4号店',
    //     sellMoney: '1890'
    // }, {
    //     order: '5',
    //     name: 'lxj5号店',
    //     sellMoney: '1782'
    // }
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
module.exports = [{
        url: '/table/getBarData',
        type: 'post',
        response: () => {
            return {
                code: 1,
                data: echartData,
                // msg:'表格数据加载成功'
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
    }
]