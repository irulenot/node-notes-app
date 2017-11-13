const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
let bodyOptions = {
        describe: 'Content of new note',
        demand: true,
        alias: 'b'
}

let argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0];

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else{
        console.log('Note title taken');
    }
}else if(command === 'list') {
    let allNotes = notes.getAll();
    console.log(`${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    let note = notes.getNote(argv.title);
    if(note){
        console.log('Note was read');
        notes.logNote(note);
    }else{
        console.log('Note not read'); // differs bit from Andrew, no title or body
    }
}else if(command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not removed';
    console.log(message);
}else{
    console.log('Command not recognized');
}
