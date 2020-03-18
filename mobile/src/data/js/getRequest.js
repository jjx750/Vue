import axios from 'axios';
export default {
  getRequest (name, id) {
    let suffix = "?id=";
    let url = "http://192.168.0.101:3000/";
    return new Promise((resolve, reject) => {
      let getData = ''
      axios.get(url + name + suffix + id).then(res => {
        getData = res.data
        resolve(getData[0])
      })
    }, (err) => {
      console.log("失败")
      reject("失败")
    })
  }
}