const fs = require('fs');
const path = require('path');

const entryFile = path.join(__dirname, '../dist/main.js');

if (!fs.existsSync(entryFile)) {
  console.error('❌ 致命错误：未生成dist/main.js');
  process.exit(1);
}

console.log('✅ 构建产物验证通过');