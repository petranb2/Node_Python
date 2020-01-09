
const express = require('express')
const { spawn } = require('child_process');
const app = express()
const port = 3000
app.get('/', (req, res) => {
	const pyProg = spawn('python', ['script.py']);
	pyProg.stdout.on('data', function(data) {
		console.log(data.toString());
		res.send(data.toString())
	});
	
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))