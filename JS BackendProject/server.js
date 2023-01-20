const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.write('welcome to my server');
    }if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.write('This is a list of music genres');
        res.end();
    }
});
/*Tools: code editor, browser, command line utility, 
application and server utility, API platform
*/
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello! Welcome to my music app');
});
const genres = [
    { id: 1, name: "Pop" },
    { id: 2, name: "Rock" },
    { id: 3, name: "Classical" },
    { id: 4, name: "R&B" },
];
//=========== ROUTES FOR HTTP GET REQUESTS ==========
app.get('/api/genres', (req, res) => {
    res.send(courses);
});
app.get('api/genres/:id', (req, res) => {
    const course = genres.find( c=> c.id === parseInt(req, params, id));
    if(!genre){
        res.status(404).send("The genre with the given iD was not found");
        return
    }
    res.send(genres);
});

//=========== ROUTES FOR HTTP POST REQUESTS ==========
app.post('/api/genres' (req, res))


//=========== ROUTES FOR HTTP PUT REQUESTS ==========




//=========== ROUTES FOR HTTP DELETE REQUESTS ==========

app.listen(3000, () => {
    console.log('Listening on port 3000')
});