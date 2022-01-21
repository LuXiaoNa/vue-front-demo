const efData = [
    { "nodeId": "a_atot", "nodeName": "数据1", "estartTime": "2022-01-21T09:55:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09" },
    { "nodeId": "a_aldt", "nodeName": "数据2", "estartTime": "2022-01-21T11:52:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09" },
    { "nodeId": "0ae9be99329345749562801951b63a7d", "nodeName": "数据5", "estartTime": "2022-01-21T11:37:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "7d3eae5ab5aa492ba6aac12e297134ba", "nodeName": "数据6", "estartTime": "2022-01-21T11:37:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "ce32c60975674ea79f0819c72963dc4f", "nodeName": "数据7", "estartTime": "2022-01-21T11:37:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "d2467656c6b24e59897d03c45107428d", "nodeName": "数据8", "estartTime": "2022-01-21T11:37:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "45cf0821acde411c85dce5a001ec7e56", "nodeName": "数据4", "estartTime": "2022-01-21T12:02:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "3c7de185617040ad90602d7fa8265f03", "nodeName": "数据9", "estartTime": "2022-01-21T11:30:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "a_block", "nodeName": "数据10", "estartTime": "2022-01-21T11:35:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "7c23711de7cd4f02b94f4a33dba58d7a", "nodeName": "数据21", "estartTime": "2022-01-21T12:07:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "b0e6062392f24de691fa3684d4afb488", "nodeName": "数据22", "estartTime": "2022-01-21T11:36:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "e19b7b8acaee4c70bc04a991f92900bc", "nodeName": "数据11", "estartTime": "2022-01-21T11:36:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "7d7ed596aff54fd4929f4730e795b2f6", "nodeName": "数据12", "estartTime": "2022-01-21T12:22:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "4a23b2e755744d0ab867464bc578b2cc", "nodeName": "数据13", "estartTime": "2022-01-21T12:42:00.000+0800", "astartTime": null, "planId": "443d2ae64b2b4412a4a290743e82cd09", },
    { "nodeId": "0aa6a8d4521a4d6694a51794b3fbdb8a", "nodeName": "数据14", "estartTime": "2022-01-21T11:40:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "8bdae1798dde4a94ad3b46d4be883414", "nodeName": "数据15", "estartTime": "2022-01-21T12:30:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "6cf277f02ce34fd5bed169c65c2911d0", "nodeName": "数据16", "estartTime": "2022-01-21T11:40:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "86ca8bb9db754f9f881b24f78de2fd20", "nodeName": "数据17", "estartTime": "2022-01-21T12:30:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "e513a996ad6e4161bd56abbb1c91fc54", "nodeName": "数据18", "estartTime": "2022-01-21T11:40:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "b0480e8a30d34ea297843df9a2a02942", "nodeName": "数据19", "estartTime": "2022-01-21T12:50:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "74402dae4b0b4c33b8c9ec503a6f72ee", "nodeName": "数据20", "estartTime": "2022-01-21T13:00:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "c0ba8205568c42fca0725546f39530fc", "nodeName": "数据23", "estartTime": "2022-01-21T12:52:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "0d78d46540a14c0eaa4a4de4c3dc0103", "nodeName": "数据24", "estartTime": "2022-01-21T13:02:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "09e81d69049e4ce4a42afad77145ff29", "nodeName": "数据25", "estartTime": "2022-01-21T13:03:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "9af167c0aa254403bace00d53c0b1c5e", "nodeName": "数据26", "estartTime": "2022-01-21T13:04:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "d_startDeic", "nodeName": "数据27", "estartTime": null, "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "d_endDeic", "nodeName": "数据28", "estartTime": null, "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "0bb6e380e4f7471fbeb463377269f0db", "nodeName": "数据29", "estartTime": "2022-01-21T13:00:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "fd8d056486624441ab8d7e817b435b98", "nodeName": "数据30", "estartTime": "2022-01-21T13:00:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "b1e2ded429f94165a154aa7e5ea8dc5a", "nodeName": "数据31", "estartTime": "2022-01-21T13:05:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "5be0a049799a4708952cff2f014ef41f", "nodeName": "数据32", "estartTime": "2022-01-21T12:55:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "dd811e24b9494d73a733f7590bc6740e", "nodeName": "数据33", "estartTime": "2022-01-21T12:58:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "d_remove_block", "nodeName": "数据34", "estartTime": "2022-01-21T13:05:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", },
    { "nodeId": "9a67e6c8096a44f48df93d485482d267", "nodeName": "数据35", "estartTime": "2022-01-21T13:06:00.000+0800", "astartTime": null, "planId": "583c801b51384de28b60c03749b14d60", }
];
module.exports = [{
    url: '/ef/queryEasyFlowData',
    type: 'post',
    response: () => {
        return {
            code: 1,
            data: efData,
        }
    }
}]