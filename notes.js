const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body)=>{
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)
	if(!duplicateNote){
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse('new note added'))
	}else{
		console.log(chalk.red.inverse('note title already taken'))
	}
}

const saveNotes = (notes)=>{
	const dataJson = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJson)
}
const loadNotes = ()=>{

	try{
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJson = dataBuffer.toString()
		return JSON.parse(dataJson)
	}catch (e){
		return []
	}
}

const removeNote = (title)=>{
	const notes = loadNotes()

	const nonMatchingTitle = notes.filter((note) => note.title !== title)
	if(nonMatchingTitle.length === notes.length){
		console.log(chalk.red.inverse("couldn't find the title"))	
	}else{
		console.log(chalk.green.inverse('note removed'))
	}
	saveNotes(nonMatchingTitle)
}

const listNotes = () =>{
	console.log(chalk.red.inverse('Your notes'))
	const notes = loadNotes()
	
	notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
	const notes = loadNotes()
	const note = notes.find((note) => note.title === title)
	if(note){
		console.log(chalk.red.inverse(note.title))
		console.log(note.body)
	}else console.log(chalk.red.inverse('idi naxuy'))
	
}


module.exports = {
	addNote: addNote,
	removeNote:removeNote,
	readNote:readNote,
	listNotes:listNotes
}