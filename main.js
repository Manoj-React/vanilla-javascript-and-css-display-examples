let add=[]


function myFunction() {
    event.preventDefault();

    var x = document.getElementById("myText").value;

    add.push(x);
    
    // returns ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
    console.log(add,"vjhvj");

  localStorage.setItem("todos", JSON.stringify(add));
 

    console.log("csdfsd",x)
    let datas=localStorage.getItem("todos");
    let arra=datas.map((data)=>{
        return data
    })
    console.log("zZC",arra)
    document.getElementById("demo").innerHTML = arra;
  }