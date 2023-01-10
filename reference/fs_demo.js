const path = require('path');
const fs = require('fs');

// Create folder
// fs.mkdir(path.join(__dirname,'test'), {}, err => {
//     if (err) throw err
//     console.log('Folder created ...');
// })


// Create and write to file(it overrides file)
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello! New .txt file created.', err => {
//     if(err) throw err;
//     console.log('New File Created...');
//     // Append file
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'Started NodeJS',
//     err => {
//         if (err) throw err;
//         console.log('Appending to file...')
//     }
//     )
// })

// fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'Started NodeJS',
// err => {
//     if (err) throw err;
//     console.log('Appending to file...')
// }
// )

// Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'newhello.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed........');
})