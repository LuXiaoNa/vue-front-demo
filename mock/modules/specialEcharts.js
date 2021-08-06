const liqueData = [{
    "tableData": [{
            name: "节点1",
            finish: 2,
            sumCount: 22,
        },
        {
            name: "节点2",
            finish: 0,
            sumCount: 20,
        }
    ],
    "liqueImplement": {
        name: "位置1",
        finish: 2,
        sumCount: 44,
    }
}, {
    "tableData": [{
            name: "节点3",
            finish: 13,
            sumCount: 32,
        },
        {
            name: "节点4",
            finish: 5,
            sumCount: 44,
        },
        {
            name: "节点5",
            finish: 15,
            sumCount: 40,
        }
    ],
    "liqueImplement": {
        name: "位置2",
        finish: 33,
        sumCount: 116,
    }
}, {
    "tableData": [{
            name: "节点7",
            finish: 10,
            sumCount: 32,
        },
        {
            name: "节点8",
            finish: 5,
            sumCount: 40,
        },
        {
            name: "节点9",
            finish: 14,
            sumCount: 40,
        }
    ],
    "liqueImplement": {
        name: "位置3",
        finish: 29,
        sumCount: 112,
    }
}, {
    "tableData": [{
            name: "节点10",
            finish: 18,
            sumCount: 60,
        },
        {
            name: "节点11",
            finish: 5,
            sumCount: 44,
        },
        {
            name: "节点12",
            finish: 15,
            sumCount: 40,
        },
        {
            name: "节点13",
            finish: 12,
            sumCount: 40,
        }
    ],
    "liqueImplement": {
        name: "位置4",
        finish: 55,
        sumCount: 144,
    }
}]

module.exports = [
    //水球图和表格
    {
        url: '/specialEcharts/liqueData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: liqueData,
            }
        }
    },
]