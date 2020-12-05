const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./onlinedoctordb');
var message;

function solution(a,b,c,d,e,f,g,h,i,j){
let sql = 'select disease, remedies from symptoms where fever = ? and cough = ? and headache =? and weakness = ? and sneezing = ? and stomachache = ? and acutebreathing = ? and bodyiching = ? and eyeiching = ? and vomit = ? ';
  
db.get(sql,[a,b,c,d,e,f,g,h,i,j], (err,row) => {
if(err){
        message = (err.message)
    }
     message = `${row.disease} and remdies for it are ${row.remedies}`
});
return message

}