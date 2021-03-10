// 表单验证
const formMassage = '';
export default {
    formMassage,
    submitForm(formDom, ruleFormList, tabsName,submitTabName) {
        var formValue = []
        var errorTab = []
        for (var i = 0; i < ruleFormList.length; i++) {
            var values = []
            //收集每个ruleForm
            for (var fromKey in ruleFormList[i]) {
                if (ruleFormList[i][fromKey] == '' || ruleFormList[i][fromKey] == undefined) {
                    values.push()
                } else {
                    values.push(ruleFormList[i][fromKey])
                }
            }
            formDom[i].clearValidate()
            formValue.push(values)
        }
        //循环判断每个表单并返回消息
        for (var j = 0; j < formValue.length; j++) {
            if (formValue[j].length > 0) {
                formDom[j].validate((valid) => {
                    if (!valid) {
                        this.formMassage = false;
                        errorTab.push(j)
                        console.log(this.formMassage)
                        return false;
                    } 
                    else {
                        this.formMassage = true;
                        errorTab.push(j)
                        return false;
                    }
                });
                return false;
            }
        }
        //自动跳转tab页
        //如果tabName没有传
        if(!tabsName){
            errorTab=''
        }
        if (errorTab.length > 0) {
            for (var a = 0; a < errorTab.length; a++) {
                this.tabName = tabsName[errorTab[errorTab.length-a-1]]
            }
        } 
        else {
            this.tabName = submitTabName
        }
    },
}
