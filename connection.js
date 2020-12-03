const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./onlinedoctordb');

function solution(a,b,c,d,e,f,g,h,i,j){
let sql = 'select disease, remedies from symptoms where fever = ? and cough = ? and headache =? and weakness = ? and sneezing = ? and stomachache = ? and acutebreathing =? bodyiching = ? and eyeiching = ? and vomit = ? ';
  
db.get(sql,[a,b,c,d,e,f,g,h,i,j], (err,row) => {
if(err){
        console.log(err.message)
    }
    return row 
      ? console.log(row.disease,'is your disease and remedies for it are : '  ,row.remedies)
      : console.log('nothing found');
  
});
}