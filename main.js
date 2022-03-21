const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;


    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Index Page</title></head>');
        res.write('<body><form action="/create" method="POST"><label>create user</label><input tpye="text" name="user"><button>Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Page</title></head>');
        res.write('<body><h3>Users page</h3></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/create'){
        const body = [];
        req.on('date', chunk =>{
            body.push(chunk)
        });
        req.on('end', () =>{
        const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }


});

server.listen(3000)