const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema')
const PORT = 8888;
const app = express();
app.get('/', (req, res) => {
    res.send('HELLO WORLD!');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`EXPRESS SERVER RUNNING ON ${PORT}`)
})