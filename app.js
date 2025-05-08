const express = require ('express')
const app = express()
const port = 3000
const logado = function(req, res, next) {
    console.log('logado')
    next()
}

app.use(logado)

app.get('/', function(req, res, next) {
    res.send('é a rota raíz')
})
app.get('/about', function(req, res) {
    res.send('esse aqui é o about')
})
app.post('/data', function(req, res) {
    res.send('isso é o data')
})
app.get('/user', function(req, res) {
    res.redirect('/user/signup')
})
app.get('/user/:userId', function(req, res) {
    res.send('página users')
})
app.get('/user/signin/:userId', function(req, res) {
    const userId = req.params.userId;
    res.send(`
      Página users
      Bem vindo, user de número ${userId}!
    `);
  });
  
app.get('/user/signup', function(req, res) {
    res.send('página signup de usuário')
})
app.use((req, res, next) => {
    res.status(404).send('erro de número 404 - o usuário não acessou nenhuma rota, por favor confira se não errou nada.')
})
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
