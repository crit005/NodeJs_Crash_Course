const http = require('http');
const path = require("path");
const fs = require('fs');

const server = http.createServer((req, res) => {
if(req.url ==='/'){

    fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(content);
    })
    // //* add content type
    // res.writeHead(200,{'Content-Type':'text/html'});
    // //* Response Content page
    // res.end('<h1>Home</h1>');
}
if(req.url ==='/api/user'){

    const user = [
        {name: 'Bob Smith', age: 40},
        {name: 'John Doe', age: 30}
    ];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(user));
    
}

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server start on Port: ${PORT}`));