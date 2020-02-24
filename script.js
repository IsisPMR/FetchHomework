function search() {
    var inputId = document.getElementById("idNum");
    getInfo(inputId.value)
    inputId.value = null;
  }
  
  var getInfo = async (id) => {
    var response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    var data = await response.json()
    var info = document.createTextNode(JSON.stringify(`User ID: ${data.id},Title: ${data.title}, Body:${data.body}`));
    addResult(info);
  };
  function addResult(userId) {
    var list = document.getElementById("list");
    var newLi = document.createElement("li");
    list.appendChild(newLi);
    newLi.appendChild(userId); 
  };