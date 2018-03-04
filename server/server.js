import express  from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from './etc/config.json';


//подключенние бд
db.setUpConnection();
const app = express();


app.use( bodyParser.json());

app.get('/users/:id ', (req, res) => 
{//получение список локаций
   db.listLocations().then(data => res.send(data));
});

app.post('/users', (req, res) =>
{
    db.createUser().then(data => res.send(data));
});

app.get('/users', (req, res) =>
{//вывод список юзеров
    db.listUsers().then(data => res.send(data));
});


app.post('/users/:id', (req, res) =>
{//добавить локацию в массив locations
    db.addLocations().then(data=> res.send(data));
});

const server = app.listen(serverPort, ()=>
{
    console.log('server running on port 8080');
})