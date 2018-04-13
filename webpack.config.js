const path = require('path')

module.exports = {
    entrys: path.join(__dirname, 'src/index.js'),
    output: {
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    }
}