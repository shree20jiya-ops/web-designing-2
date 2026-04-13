function calculate(){
    let n= document.getElementById("student").value;
    let total=0;
    for(let i=0;i<n;i++){
        let marks=Number(prompt("Enter no of subject"+(i+1)))
        total=total+marks;
    }

    let average =total/n;
    let grade;
    if(average>=80){
        grade="A";
    }
    else if(average>=60){
        grade="B";
    }
    else{
        grade="C";
    }
    document.getElementById("result").innerHTML=
    "total marks:"+total+"<br>"+
    "average:"+average+"<br>"+
    "grade:"+grade;

}