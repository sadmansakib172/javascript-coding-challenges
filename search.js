let lyrics = 'Amar sonar bangla ami tomai valobashi';
// let search = lyrics.toLowerCase().includes('bangLA'.toLowerCase());
// console.log(search);
let result = lyrics.endsWith('Valobashi');
if(result === true){
    console.log('that exists');
}
else{
    console.log('that does not exist');
}