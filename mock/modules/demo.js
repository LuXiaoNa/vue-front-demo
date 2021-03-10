const tableData=[{
  appCode:'10001',
  appName:'应用一',
  appAuth:'*********',
  status:'0',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-10-10T18:22:00.000+0000',
  lastLoginTime:'2020-08-16',
  startUseTime:'2020-08-19',
  endUseTime:'2020-12-31'
}, {
  appCode:'10002',
  appName:'应用二',
  appAuth:'*********',
  status:'',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-05-13',
  lastLoginTime:'2020-06-15',
  startUseTime:'2020-07-19',
  endUseTime:'2020-12-31'
}, {
  appCode:'10003',
  appName:'应用三',
  appAuth:'*********',
  status:'1',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-01-31',
  lastLoginTime:'2020-04-06',
  startUseTime:'2020-08-09',
  endUseTime:'2020-12-31'
}, {
  appCode:'10004',
  appName:'应用四',
  appAuth:'*********',
  status:'0',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-06-05',
  lastLoginTime:'2020-08-09',
  startUseTime:'2020-09-10',
  endUseTime:'2020-12-31'
}, {
  appCode:'10005',
  appName:'应用五',
  appAuth:'*********',
  status:'1',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-03-01',
  lastLoginTime:'2020-05-06',
  startUseTime:'2020-08-01',
  endUseTime:'2020-12-31'
},
{
  appCode:'10006',
  appName:'应用六',
  appAuth:'*********',
  status:'1',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-06-01',
  lastLoginTime:'2020-07-08',
  startUseTime:'2020-09-01',
  endUseTime:'2020-12-31'
}, {
  appCode:'10007',
  appName:'应用七',
  appAuth:'*********',
  status:'0',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-01-05',
  lastLoginTime:'2020-05-06',
  startUseTime:'2020-10-05',
  endUseTime:'2020-12-31'
}, {
  appCode:'10008',
  appName:'应用八',
  appAuth:'*********',
  status:'1',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-06-07',
  lastLoginTime:'2020-06-09',
  startUseTime:'2020-09-10',
  endUseTime:'2020-12-31'
}, {
  appCode:'10009',
  appName:'应用九',
  appAuth:'*********',
  status:'0',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-05-09',
  lastLoginTime:'2020-06-01',
  startUseTime:'2020-07-01',
  endUseTime:'2020-12-31'
}, {
  appCode:'10010',
  appName:'应用十',
  appAuth:'*********',
  status:'0',
  appCheckebox1:true,
  appCheckebox2:false,
  appCheckebox3:true,
  appCheckebox4:false,
  currentColor:"#801B1B",
  defaultColor:"#801B1B",
  regTime:'2020-08-01',
  lastLoginTime:'2020-08-02',
  startUseTime:'2020-09-01',
  endUseTime:'2020-12-31'
}
]
const echartData=[5, 20, 36, 10, 10, 20] 
module.exports=[
    {
      url:'/demo/getEcharsData',
      type:'post',
      response: () => {
          return {
            code: 1,
            data: echartData,
            msg:'表格数据加载成功'
          }
        }
  },
  {
    url:'/demo/userData',
    type:'post',
    response: config => {
        return {
          code: 1,
          data: tableData,
          msg:'表格数据加载成功'
        }
      }
}
]