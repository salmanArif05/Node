const fs = require('fs');


// const readStream = fs.createReadStream('../docs/write.txt', { encoding: 'utf8' }); // for plain text
const readStream = fs.createReadStream('../docs/write.txt'); // for buffer
const writeStream = fs.createWriteStream('../docs/write2.txt');


// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// piping

readStream.pipe(writeStream);