# mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 数据格式跟数据都在json-server里面
```
npm install -g json-server
```

### 设置好后可以在手机上测试
```
找到 src\data\js\getRequest.js 里的 
let url = "http://IPv4:3000/"; 
IPv4修改成自己的IPv4地址，例如:  let url = "http://192.168.9.999:3000/";
```

### 安装后使用
```
json-server --watch -H 这里写你的IPv4地址 db.json
例如:json-server --watch -H 192.168.9.999 db.json
```
