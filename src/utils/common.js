import moment from 'moment'
/***
 * 地址栏参数转对象
 */
export function param2Obj(url) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
        return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
        const index = v.indexOf('=')
        if (index !== -1) {
            const name = v.substring(0, index)
            const val = v.substring(index + 1, v.length)
            obj[name] = val
        }
    })
    return obj
}
//格式化时间
export function date2Str(d, format) {
    if (d)
        return moment(d).format(format)
    else return ''
}

export function parseTime(d, format) {
    let d_format = "";
    if (d) {
        d = new Date(d)
        let d_year = d.getFullYear();
        let d_month = d.getMonth() + 1;
        let d_day = d.getDate();
        let d_hour = d.getHours();
        let d_minutes = d.getMinutes();
        let d_seconds = d.getSeconds();

        if (d_month < 10) {
            d_month = "0" + d_month;
        }

        if (d_day < 10) {
            d_day = "0" + d_day;
        }

        if (d_hour < 10) {
            d_hour = "0" + d_hour;
        }

        if (d_minutes < 10) {
            d_minutes = "0" + d_minutes;
        }

        if (d_seconds < 10) {
            d_seconds = "0" + d_seconds;
        }

        switch (format) {
            case "YYYY-MM-DD HH:mm:ss":
                d_format = d_year + "-" + d_month + "-" + d_day + " " + d_hour + ":" + d_minutes + ":" + d_seconds;
                break;
            case "YYYY-MM-DD HH:mm":
                d_format = d_year + "-" + d_month + "-" + d_day + " " + d_hour + ":" + d_minutes;
                break;
            case "YYYY-MM-DD HH":
                d_format = d_year + "-" + d_month + "-" + d_day + " " + d_hour;
                break;
            case "YYYY-MM-DD":
                d_format = d_year + "-" + d_month + "-" + d_day;
                break;
            case "YYYY-MM":
                d_format = d_year + "-" + d_month;
                break;
            case "HH:mm:ss":
                d_format = d_hour + ":" + d_minutes + ":" + d_seconds;
                break;
            case "HH:mm":
                d_format = d_hour + ":" + d_minutes;
                break;
            case "mm:ss":
                d_format = d_minutes + ":" + d_seconds;
                break;
            case "MM-DD HH:mm:ss":
                d_format = d_month + "-" + d_day + " " + d_hour + ":" + d_minutes + ":" + d_seconds;
                break;
            case "MM-DD HH:mm":
                d_format = d_month + "-" + d_day + " " + d_hour + ":" + d_minutes;
                break;
            case "MM-DD HH":
                d_format = d_month + "-" + d_day + " " + d_hour;
                break;
        }
        return d_format;
    } else {
        return '';
    }
}