// ------------------------------------------------------------------------------------------------
// ---------------------------- Populate User List Table Functionality ----------------------------

// a array of JSON objects
var user_list = [
    {"Name":"Ada Lovelace", "Role":"Admin"},
    {"Name":"Grace Hopper", "Role":"Developer"},
    {"Name":"Margaret Hamilton", "Role":"QA"},
    {"Name":"Joan Clarke", "Role":"Manager"},
    {"Name":"Kelsi Price", "Role":"Developer"},
    {"Name":"Augustine Tuttiett", "Role":"QA"},
    {"Name":"Jim Sainter", "Role":"Developer"},
    {"Name":"Tymothy Joseland", "Role":"Manager"},
    {"Name":"Husain Farlowe", "Role":"QA"},
    {"Name":"Haywood Greener", "Role":"Admin"},
    {"Name":"Chelsey Risborough", "Role":"QA"},
    {"Name":"Deana Drysdall", "Role":"Manager"}
  ]

// a utility function to dynamically populate the user list table
function populateTable(user_list){
    var user_list_tbody = document.getElementById("user_list_tbody");
    let html = '';
    for(user of user_list){
        html += `<tr>
        <td class="name_col">${user.Name}</td>
        <td class="role_col">${user.Role}</td>
        <td class="actions_col">
          <i class="material-icons">edit</i>
        </td>
      </tr>`;
    }
    user_list_tbody.innerHTML = html;
}

// calling the function
populateTable(user_list);

// ------------------------------------------------------------------------------------------------
// ----------------------------------- Preview Image Functionality --------------------------------

function showPreview(event){
  if(event.target.files.length > 0){
    var src  = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    // update the photo only if it is within the size limit
    if(checkFileSize() && checkFileType()){
      preview.src = src;
      preview.style.display = "block";
      preview.style.padding = "0px 0px"; // remove the padding of the default image
    }
  }
}

// ------------------------------------------------------------------------------------------------
// ---------------------------------- Profile Pic Size Validation ---------------------------------

function checkFileSize() {
  var filesize = document.getElementById("file-ip-1");
  var files = filesize.files;

  if (files.length > 0) {
    size_in_bytes = files[0].size;
    size_in_KB = Math.round(size_in_bytes/1024);
     if (size_in_bytes > 1 * 1024) {
      alert(`Image size: ${size_in_KB}KB. Please select an image less than 1KB.`);
      // file size exceeding the limit
      return false;
     }
  }
  // file size was within limit
  return true; 
}

// ------------------------------------------------------------------------------------------------
// ------------------------------- File Type (Extension) Validation -------------------------------

function checkFileType(){
  var fileInput = document.getElementById('file-ip-1');
              
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = /(\.jpg|\.png)$/i;
    
  if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type. Only .jpg & .png images are allowed.');
      fileInput.value = '';
      return false;
  }
  return true;
}

// ------------------------------------------------------------------------------------------------
// ---------------------------------- On successful form submission -------------------------------

function submittedSuccessfully(){
  alert("Form was submitted successfully!!!");
}

// ------------------------------------------------------------------------------------------------
// ----------------------------------- Search Table Functionality ---------------------------------
// --------------------------------- NOTE: Search is case-sensitive -------------------------------

let search = document.getElementById('search');
search.addEventListener('input',()=>{
  let inputVal = search.value;
  const table1 = document.getElementById('table1');
  for (let line=1; line < table1.rows.length; line++) {
    let rc0 = table1.rows[line].cells[0].textContent;
    // uncomment the following line if you want the search to performed on 'Role' column as well
    // rc1 = table1.rows[line].cells[1].textContent;

    if(!rc0.includes(inputVal))
    {
      table1.rows[line].classList.add("not_found");
    }
    else
    {
      table1.rows[line].classList.remove("not_found");
    }
  }
})
