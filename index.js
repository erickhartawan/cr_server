const { default: axios } = require('axios')
const express = require('express')
const helmet = require('helmet')
const app = express()
const port = 3000

app.use(helmet())

const config = {
    headers: {
        origin: 'https://cr-server.onrender.com'
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/frostica', (req, res) => {
    const url = 'https://cors-proxy-cw4l.onrender.com/https://www.8thwall.com/temp-url-api/browse/3b078cd3-b125-4cdf-968c-7261f2f354bb';
    let res = ''
    axios.get(url, config).then(res => {
        const json = JSON.parse(res)
        const shortLink = json.shortLink;
        const finalLink = 'https://8th.io/' + shortLink
        window.location.href = finalLink;
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// const xmlHttp = new XMLHttpRequest();
// const url = 'https://cors-lumi.herokuapp.com/https://www.8thwall.com/temp-url-api/browse/3b078cd3-b125-4cdf-968c-7261f2f354bb';
// var res = ''
// xmlHttp.open('GET', url, false); // false for synchronous request
// xmlHttp.setRequestHeader('origin', 'https://www.magnetstatedpc.herokuapp.com')
// xmlHttp.onload = () => {
//   res = xmlHttp.responseText
//   const json = JSON.parse(res)
//   const shortLink = json.shortLink;
//   const finalLink = 'https://8th.io/' + shortLink
//   window.location.href = finalLink;
// }
// xmlHttp.send(null);