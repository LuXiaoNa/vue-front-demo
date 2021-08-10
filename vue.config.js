//项目的基础配置
const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                //target: "", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                ws: true,
                pathRewrite: {
                    '^/api': "/"
                }
            }
        }
    },
    configureWebpack: {
        name: 'FRONT-DEMO',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        devtool: 'source-map' //调试器就有机会将一个被压缩的文件中的代码对应回其源文件相应的位置
    }
}

function resolve(dir) {
    return path.join(__dirname, dir)
}