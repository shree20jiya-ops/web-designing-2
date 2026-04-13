function findlargest(){
    let array=[
    document.getElementById("l1").value,
    document.getElementById("l2").value,
    document.getElementById("l3").value,
    document.getElementById("l4").value,
    document.getElementById("l5").value,
   
    ];
let max=Math.max(...array);
document.getElementById("result").innerHTML="largest:"+max;
}