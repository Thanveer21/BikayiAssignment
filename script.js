const url = " http://api.nobelprize.org/v1/prize.json";

async function GETapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}
GETapi(url);
function show(data) {
    console.log(data);
    let tableData = 
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>Year</th>
          <th>Category</th>
         </tr>`;
    // Loop to access all rows 
    listData=[];
    for(var i in data){
        listData.push([i,data[i]]);
    }
    console.log(listData);
    for (let r of listData) {
        tableData += `<tr> 
    <td>${r.laureates.id} </td>
    <td>${r.laureates.firstname +' '+r.laureates.surname}</td>
    <td>${r.year}</td> 
    <td>${r.category}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("winners").innerHTML = tab;
}