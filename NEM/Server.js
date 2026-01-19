const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{'contemt-type' : 'text/html'})
        res.write("<h1> Home Page</h1>")
        res.end()
    }
    if(req.url== "/about")
    {
         res.writeHead(200,{'contemt-type' : 'text/html'})
          res.write("<h1> About Page</h1>")
          res.end()
    }
    else{
    res.write("Other page")
    res.end()
    }
    
})
server.listen(3300)