document.addEventListener("DOMContentLoaded", ()=>{

    const photoList = document.getElementById("photoList");
    const photo = document.getElementById("photo");

    for(let i = 0; i < data.length; i++){
        photoList.innerHTML += `<option value="${ data[i].url }">${ data[i].name }</option>`;
    }

    photoList.addEventListener("change", (e)=>{
        photo.src = "./data/images/" + e.target.value;
    });//END CHANGE

}); //END LOADED