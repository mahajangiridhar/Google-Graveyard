let cl = console.log;

let main = document.querySelector("#main")
const searchBox = document.getElementById("searchBox");
let dropDown = document.getElementById("dropDown")


function templating(arr){
  let result = "";
    arr.forEach(element => {
    result += `<div class="col-md-3">
    <div class="card mt-5">
        <div class="card-body mb-3">
            <h2 class="tagName ${colors(element.type)}">${element.type}</h2>
        </div>
        <div class="card-body">
            <h2 class="card-heading">${element.name}</h2>
            <p class="duration mt-4">from ${element.dateOpen} to ${element.dateClose}</p>
            <p class="para">${element.description}</p>
            <button class="btn btn-primary mt-4">Details</button>
        </div>
    </div>
</div>`
});
main.innerHTML = result;
}
templating(db);

function onkeyup(ele){
    let search = ele.target.value;
    let item = db.filter(e=>e.name.toLowerCase().trim().includes(search));
    templating(item)
}

function colors(i){
    if(i === "hardware"){
        return "blue";
    }else if(i == "app"){
        return "orange";
    }else if(i == 'service'){
        return "green";
    }
}

function onChange(ele){
    let newVal = ele.target.value;
    if(newVal !== "All"){
        let newArr = db.filter(e=> e.type===newVal)
        templating(newArr)
    }else{
        templating(db)
    }
}
// function onkeyup(ele){
//     if(ele.key === "Enter"){
//         let name = ele.target.value.toLowerCase().trim();
//         let item = db.filter(e=>e.name.toLowerCase().trim().includes(name));
//         templating(item);
//     }else{
//         templating(db);
//     }
// }


searchBox.addEventListener("keyup", onkeyup)
dropDown.addEventListener("change", onChange)
