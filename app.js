const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

yargs.command({
	command: "add",
	describe: "add a note",
	builder:{
		title:{
			describe:"dzu",
			demandOption:true,
			type:"string"
		},
		body:{ 
			describe:"this is the body",
			demandOption:true,
			type:"string"
		}
	},
	handler(argv){
		notes.addNote(argv.title, argv.body)
	} 
})
debugger

yargs.command({
	command: "remove",
	describe: "remove a note",
	builder:{
		title:{
			describe:'this a title'	,
			demandOption: true,
			type:'string'
		}
	},
	handler(argv){
		notes.removeNote(argv.title)
	}
})
yargs.command({
	command: "list",
	describe: "list command",
	handler(){
		notes.listNotes()
	}
})
yargs.command({
	command: "read",
	describe: "reading notes",
	builder:{
		title:{
			describe:'this a title',
			demandOption:true,
			type:'string'
		}
	},
	handler(argv){
		notes.readNote(argv.title)
	}
})

yargs.parse()
