//今日情况
const situationData = {
    browse: "40",
    buy: "10",
    ship: "100",
    order: "39",
    sales: "332"
};
//流控受影响情况
const flowControlData = [{
        flightNum: "MU3331",
        delayTime: "30min",
        id: "253345654325",
        restrictInfo: [{
            releaseUnit: "OMC",
            startTime: "2021-04-07 14:00",
            endTime: "2021-04-07 14:30",
            content: "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班",
        }, ],
    },
    {
        flightNum: "MU1111",
        delayTime: "30min",
        id: "253345232654325",
        restrictInfo: [{
            releaseUnit: "OMC",
            startTime: "2021-04-07 14:00",
            endTime: "2021-04-07 14:30",
            content: "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班",
        }, ],
    },
    {
        flightNum: "MU2221",
        delayTime: "30min",
        id: "253345654444325",
        restrictInfo: [{
            releaseUnit: "OMC",
            startTime: "2021-04-07 14:00",
            endTime: "2021-04-07 14:30",
            content: "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班",
        }, ],
    },
];
//专机要客
const VipGuestData = [{
        flightNum: "HU3691",
        status: "起飞",
        seat: "B329",
        route: "25231",
        typeCode: "B373",
        arrFlightNum: "HU3693",
        // depFlightNum: "HU3691",
        planArrTime: "10:30",
        expectArrTime: "10:26",
        realArrTime: "10:30",
        planDepTime: "10:30",
        expectDepTime: "10:26",
        realDepTime: "10:30",
    },
    {
        flightNum: "HU3691",
        status: "计划",
        seat: "B329",
        route: "25231",
        typeCode: "B373",
        arrFlightNum: "HU3691",
        // depFlightNum: "HU3693",
        planArrTime: "10:30",
        expectArrTime: "10:26",
        realArrTime: "10:30",
        planDepTime: "10:30",
        expectDepTime: "10:26",
        realDepTime: "10:30",
    },
];
//机场综合情况
const airportSituationData = {
    preDelayNum: "20",
    currDelayNum: "17",
    arrFlow: "31",
    depFlow: "40",
    capacity: "100",
    nearSeat: "20",
    usedNearSeat: "40",
    remoteSeat: "52",
    usedRemoteSeat: "20",
};
//当日放行情况
const releaseData = {
    nomalRate: 20,
    releaseRate: 46,
    avgRate: 30,
};
//机位监控
const processBarModel = [{
        id: "2543445543",
        seatType: "B",
        seatNum: 38,
        usedNum: 2,
        notUseNum: 16,
        freeNum: 20,
    },
    {
        id: "254433gfhv4dsd",
        seatType: "C",
        seatNum: 60,
        usedNum: 4,
        notUseNum: 26,
        freeNum: 30,
    },
    {
        id: "254422gfhv4dsd",
        seatType: "F",
        seatNum: 44,
        usedNum: 8,
        notUseNum: 16,
        freeNum: 20,
    },
    {
        id: "254422g2fhv4dsd",
        seatType: "E",
        seatNum: 36,
        usedNum: 20,
        notUseNum: 6,
        freeNum: 10,
    },
    {
        id: "254422g2fhv4ds2d",
        seatType: "D",
        seatNum: 26,
        usedNum: 23,
        notUseNum: 12,
        freeNum: 13,
    },
];
//气象概况
const weatherData = {
    area: "淮安",
    temperature: "20",
    visibility: "3000",
    cloudHeight: "210",
    direction: "110",
    speed: "3",
    runwayInfo: [{
            runway: "03号跑道",
            tdz: "2000",
            mid: "2000",
            end: "2000",
            direction: "180",
            speed: "5",
            dewTmp: "5",
            tmp: "21",
        },
        {
            runway: "04号跑道",
            tdz: "1000",
            mid: "1000",
            end: "2200",
            direction: "130",
            speed: "3",
            dewTmp: "6",
            tmp: "22",
        },
        {
            runway: "05号跑道",
            tdz: "1300",
            mid: "1200",
            end: "2500",
            direction: "110",
            speed: "5",
            dewTmp: "2",
            tmp: "26",
        },
    ]
};
//值班信息
const dutyData = [{
        type: "今日值班组长",
        name: "戴倩云",
        tel: "152121176633",
        id: "242476454532",
    },
    {
        type: "AOC值班组长",
        name: "朱丽茂",
        tel: "132121176633",
        id: "24247645435",
    },
    {
        type: "TOC值班组长",
        name: "谢华宇",
        tel: "142121176633",
        id: "242476454235",
    },
    {
        type: "TOC值班组长",
        name: "张雨涵",
        tel: "162121176633",
        id: "2424764545122",
    },
];
module.exports = [
    //今日情况
    {
        url: '/monitor/situationData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: situationData,
            }
        }
    },
    //流控受影响情况
    {
        url: '/monitor/flowControlData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: flowControlData,
            }
        }
    },
    //专机要客
    {
        url: '/monitor/VipGuestData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: VipGuestData,
            }
        }
    },
    //机场综合情况
    {
        url: '/monitor/airportSituationData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: airportSituationData,
            }
        }
    },
    //当日放行情况
    {
        url: '/monitor/releaseData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: releaseData,
            }
        }
    },
    //机位监控
    {
        url: '/monitor/seatControl',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: processBarModel,
            }
        }
    },
    //气象概况
    {
        url: '/monitor/weatherData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: weatherData,
            }
        }
    },
    //值班信息
    {
        url: '/monitor/dutyData',
        type: 'get',
        response: () => {
            return {
                code: 1,
                data: dutyData,
            }
        }
    },
]