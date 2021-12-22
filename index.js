const express = require('express')
const {pool} = require('./pgConfig')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) =>
{
    const sql1 = `select * from заметки;`

    pool.query(sql1, (err, resp) =>
    {
        if(err)
            console.log('Ой:', err)
        else
        {
            res.render('problemset.ejs', {rows: resp.rows})
        }
    })

})

app.listen(port, ()=>
    console.log('Приложение слушает порт:', port)
    )