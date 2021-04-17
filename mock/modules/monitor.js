//今日情况
const situationData = {
    browse: "40",
    buy: "10",
    ship: "100",
    order: "39",
    sales: "332"
};

module.exports = [{
    url: '/monitor/situationData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: situationData,
        }
    }
}, ]