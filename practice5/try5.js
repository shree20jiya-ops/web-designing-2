let employees = [];
function employee(){
let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let salary=document.getElementById("salary").value;
let department=document.getElementById("department").value;

employee.push({name,id,salary,department});
document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("department").value="";


}
function all(){
let result="";
for(let e of employees){
    result+="name:"+e.name+
             "id:"+e.id+
             "salary:"+e.salary+
             "department:"+e.department+"<br>";
}
document.getElementById("output").innerHTML=result;
}
function salary(){

}
function total(){

}
function average(){

}
function count(){

}