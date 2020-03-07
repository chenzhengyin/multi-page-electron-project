const glob = require("glob");
const PAGE_PATH = './src/modules';  // 注意是./ 而不是../ 这可能和commen.js的加载有关系


module.exports = {
    /**
     * 获取需要编译的模块配置信息
     * @param moduleNames 数组，需要编译的模块名称（包名）如['index','module1']
     */
    getPages: (moduleNames) => {
        //  首先得到包含pages文件夹里面符合条件的路径数组
        let entryHtml = glob.sync(PAGE_PATH + '/*/*.html');

        //  pages就是vue.config.js里面pages选项的值，是一个对象
        let pages = {};

        //  遍历得到的路径数组，从字符串中分割出需要的页面名字
        entryHtml.forEach((filePath) => {
            let fileName = filePath.substring(filePath.indexOf('/',6) + 1, filePath.lastIndexOf('.')-6);
            //  组建pages需要的值
            if(moduleNames){
                if(moduleNames.includes(fileName)){
                    pages[fileName] = {
                        entry: `src/modules/${fileName}/main.js`,
                        template: `src/modules/${fileName}/index.html`,
                        filename: `${moduleNames.length == 1?"index":fileName}.html`     //如果只有一个模块编译，则需指定名称为index
                    }
                }
            }else {
                pages[fileName] = {
                    entry: `src/modules/${fileName}/main.js`,
                    template: `src/modules/${fileName}/index.html`,
                    filename: `${fileName}.html`
                }
            }

        });
        return pages;
    }
};
