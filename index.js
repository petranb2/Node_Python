const express = require('express')
const {
	spawn
} = require('child_process');
const app = express()
const port = 3000
app.get('/', (req, res) => {
	var dataToSend;
	const pyProg = spawn('python', ['script.py']);
	pyProg.stdout.on('data', function (data) {
		console.log('Pipe data from python script ...');
		dataToSend = data.toString();
	});

	pyProg.on('close', (code) => {
		console.log(`Child closed with code ${code}`);
		res.send(dataToSend)
	});
	pyProg.on('exit', (code) => {
		console.log(`Child exited with code ${code}`);
	});

})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))
