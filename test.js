const {pool} = require('./pgConfig')
pool.query('select * from задания;', (err, res)=>
	{
		if(err) console.log('Ой:', err)
		else
		{
			console.log(res.rows)
			pool.end()
		}
	}
)