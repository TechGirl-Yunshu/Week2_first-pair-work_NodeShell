process.stdout.write('promp > ');
process.stdin.on('data',(data)=>{
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

});