const tableData = [{
        name: '小王',
        number: 221,
        time: "三年",
        department: '财务部'
    }, {
        name: '小娜',
        number: 201,
        time: "二年",
        department: '客服部'
    }, {
        name: '晓丹',
        number: 181,
        time: "二年",
        department: '工程部'
    },
    {
        name: '小红',
        number: 171,
        time: "一年",
        department: '人力资源部'
    }
];

module.exports = [{
    url: '/form/getTableData',
    type: 'post',
    response: () => {
        return {
            code: 1,
            data: tableData,
        }
    }
}]