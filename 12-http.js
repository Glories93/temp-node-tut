const http = require('http')


// req = request
// res = response
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
    res.end('Welcome to our home page')
    return
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
        return
    }
    res.setHeader('Content-type','text/html')
    res.end(`
    <h1> Oops! </h1>
    <p> We cant't seem to find the page you are looking for</p>
    <a href="/"> Back home</a>
    `)
})

server.listen(5500)