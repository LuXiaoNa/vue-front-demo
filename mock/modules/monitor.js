//今日情况
const todaySituationData = {
    browse: "40",
    buy: "10",
    ship: "100",
    order: "39",
    sales: "332"
};
//综合情况
const situationData = {
    visiter: "20",
    purchaseNum: "17",
    purchase: "40",
    outflow: "80",
    last: "20",
    ship:"25",
    buy: "52",
    usedRemoteSeat: "20"
  };
  //基本信息
  const  baseData=[
    {
      publishTime: "2021-4-13 21:12:10",
      publishUnit: "售后部门",
      contentData: [
        {
          startTime: "2021-4-7 14:00",
          endTime: "2021-4-7 16:00",
          content:
            "今日起，售后流程一切以公司规定办事", 
        }
      ]
    },
    {
      publishTime: "2021-4-13 21:12:10",
      publishUnit: "客服部门",
      contentData: [
        {
          startTime: "2021-4-7 14:00",
          endTime: "2021-4-7 16:00",
          content: "客服态度必须好啊，好啊好啊好啊",

        }
      ]
    },
    {
      publishTime: "2021-4-13 21:12:10",
      publishUnit: "数据部门",
      contentData: [
        {
          startTime: "2021-4-7 14:00",
          endTime: "2021-4-7 16:00",
          content:
            "数据给力啊给力啊给力啊",
        }
      ]
    }
  ];
//值班情况
const dutyData = [
    {
      type: "今日值班组长",
      name: "戴倩云",
      tel: "152121176633",
      id: "242476454532"
    },
    {
      type: "售后值班组长",
      name: "朱丽茂",
      tel: "132121176633",
      id: "24247645435"
    },
    {
      type: "客服值班组长",
      name: "谢华宇",
      tel: "142121176633",
      id: "242476454235"
    },
    {
      type: "数据值班组长",
      name: "张雨涵",
      tel: "162121176633",
      id: "2424764545122"
    },
    {
      type: "哈哈哈值班组长",
      name: "谢华宇",
      tel: "142121176633",
      id: "2424764542355"
    },
    {
      type: "嘿嘿嘿值班组长",
      name: "张雨涵",
      tel: "162121176633",
      id: "242476454512"
    }
  ];
module.exports = [{
    url: '/monitor/todaySituationData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: todaySituationData,
        }
    }
},{
    url: '/monitor/situationData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: situationData,
        }
    }
},{
    url: '/monitor/baseData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: baseData,
        }
    }
},{
    url: '/monitor/dutyData',
    type: 'get',
    response: () => {
        return {
            code: 1,
            data: dutyData,
        }
    }
}, ]