const path = require('path');

module.exports = {
    entry: './src/index.js',  // 입력 파일
    output: {
        filename: 'main.js',  // 출력 파일
        path: path.resolve(__dirname, 'dist'),
    },
};
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

