
var products = [
  {
    id:1,
    name:"Product1",
    desc:"Best Quality Provider",
    qty:100,
    price:2200,
    image:"slider2.avif",
    category : "men"
  },

  {
    id:2,
    name:"Product2",
    desc:"Best Quality Provider",
    qty:100,
    price:3200,
    image:"slider2.avif",
    category: "men"
  },

  {
    id:3,
    name:"Product3",
    desc:"Best Quality Provider",
    qty:100,
    price:4500,
    image:"slider2.avif",
    category:"men"
  },


  {
    id:4,
    name:"Product4",
    desc:"Best Quality Provider",
    qty:100,
    price:4500,
    image:"slider2.avif",
    category:"Kids"
  },

  {
    id:5,
    name:"Product5",
    desc:"Best Quality Provider",
    qty:100,
    price:4500,
    image:"slider2.avif",
    category:"Women"
  },
  {
    id:6,
    name:"Product6",
    desc:"Best Quality Provider",
    qty:0,
    price:4500,
    image:"slider2.avif",
    category:"Kids"
  },
]


var MakeCategoryNameDynamic = []


for(var data of products){
  if(!MakeCategoryNameDynamic.includes(data.category)){
      MakeCategoryNameDynamic.push(data.category)
  }else{

  }
}
//Dynamic Category Show On UI

var creatingCategory = "";
for(var data of MakeCategoryNameDynamic){
creatingCategory += `
   <div class="col-sm-12 col-md-6 col-lg-4 my-3">
      <div class="card-body shadow p-5">
        <a href="category.html?category=${data}"><h5 class="card-title">${data}</h5></a>
      </div>
    </div>

   </div>
`; 
}


//Now Target CategoryListing Id from dashbaord.html

document.getElementById("CategoryListing").innerHTML = creatingCategory


var creatingproducts = "";
for(var data of products){
creatingproducts += `
   <div class="col-sm-12 col-md-6 col-lg-4 my-3">
    <div class="card" style="width: 18rem; shadow">
      <img src="images/${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.desc}</p>
        <a href="detail.html?name=${data.name}&desc=${data.desc}&qty=${data.qty}&price=${data.price}&image=${data.image}" class="btn btn-primary">See Detail</a>
      </div>
    </div>

   </div>
`; 
}


//Now Target productListing Id from dashbaord.html

document.getElementById("productListing").innerHTML = creatingproducts



function Submit(){
    //Target ID Here
   var magic =  document.getElementById("showmagichere")
   var submitbtn =  document.getElementById("submitbtn")
   //submitbtn.style.display = "none"
    magic.innerHTML = "Hello World"
    magic.style.display = "block"

//    console.log(magic)
}


function ChangeColor(){
       var magic =  document.getElementById("showmagichere")
       magic.style.color = "red"
}

function HideText(){
    var magic =  document.getElementById("showmagichere")
       magic.style.display = "none"
}


function ShowPassword(){
    var pass = document.getElementById("password")
    var passwordbtn = document.getElementById("passwordbtn")

    //Now Use Conditional Statement

    // console.log(pass.type)
    if(pass.type == "password"){
        pass.type = "text"
        passwordbtn.innerHTML = "Hide Password"
    }else{
        pass.type = "password"
        passwordbtn.innerHTML = "Show Password"
    }
   
}


//Register Process


function Register(){

 // var name =   document.getElementsByClassName("form-control")[1]

 var name = document.getElementsByTagName('input')[0].value
 var email = document.getElementsByTagName('input')[1].value
  var password = document.getElementsByTagName('input')[2].value
  //Storage

  localStorage.setItem("name",name)
    localStorage.setItem("email",email)
      localStorage.setItem("password",password)
      alert("Account Created Successfully")

      //redirect

      location.assign('login.html');
}


function Login(){

 // var name =   document.getElementsByClassName("form-control")[1]
 var email = document.getElementsByTagName('input')[0].value
  var password = document.getElementsByTagName('input')[1].value

  var emessage = document.getElementById("emessage")
    var pmessage = document.getElementById("pmessage")
  //Storage
  if(email == localStorage.getItem("email") && password == localStorage.getItem("password")){

    //Create SessionStorage
      sessionStorage.setItem("islogin",email)

        location.assign("dashboard.html")
  }else{
    emessage.innerHTML = "email not match"
    emessage.style.color = "red";

    pmessage.innerHTML = "password not match"
    pmessage.style.color = "red";
  }
  
}




function Logout(){
  sessionStorage.removeItem("islogin")
  location.assign("login.html")
}

if(sessionStorage.getItem("islogin")){
     document.getElementById("loginbtn").style.display = "none"
    document.getElementById("logoutbtn").style.display = "block"
}else{
     document.getElementById("loginbtn").style.display = "block"
    document.getElementById("logoutbtn").style.display = "none"
}