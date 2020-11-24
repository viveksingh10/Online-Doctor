const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./tabel',(err)=>{

    if(err){
        console.log(err.message)
    }
   console.log('connected ')
   db.close((err)=>
   {
       if(err){
           console.log(err.message)
       }
})
console.log('close')
})