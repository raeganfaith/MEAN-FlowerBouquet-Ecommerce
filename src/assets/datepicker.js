// admin - upload picture
function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("upload-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

// custom-flower JavaScript
function ChangeSmall() {
  document.getElementById("change").innerHTML = "10";
}

function ChangeMedium() {
  document.getElementById("change").innerHTML = "20";
}

function ChangeLarge() {
  document.getElementById("change").innerHTML = "30";
}