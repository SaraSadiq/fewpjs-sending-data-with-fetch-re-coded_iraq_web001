// Add your code here
function submitData(name,Email){
return fetch('http://localhost:3000/users'{
  method :"post",
  header:{
    'Content-Type':"application/json",
    "Accept": "application/json"
  }
  body:json.stringify({
    name,email
  })
})
.then(function(response){
  return response.json()
} )
.then (function(object){
  document.body.innerHTML = object["id"]
})
.catch(function(error){
  document.body.innerHTML = error.message
})
}
