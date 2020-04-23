const {Client} 	= require('pg');

const client = new Client({ 	
    user	:'postgres',
	password:'root',
	host	:'localhost',
	port : 5000,
	database:'Company'
})

client.connect().then(()=>{		
		console.log('Connection Successfully');
})
module.exports = client;