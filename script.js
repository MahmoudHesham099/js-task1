

var input1 = document.querySelector('.search-input')
var input2 = document.querySelector('.add-input')
var addbtn = document.querySelector('.add');
var list = document.querySelector('.list')
var li = list.getElementsByTagName('li')



//add by button
addbtn.addEventListener('click',function() {
    
    var value = input2.value;

    if(value!=''){
        list.innerHTML += `<li class="list-group-item">${value}</li>`;
        input2.value='';
    }  
})


//add by enter
input2.addEventListener('keydown',function (event) {     

          if(event.key=='Enter'){
           
            var value = input2.value;
            if(value!=''){
                  list.innerHTML += `<li class="list-group-item">${value}</li>`;
                  input2.value='';  
                }
          }
})


// search
input1.addEventListener('input',function () {
  
  var filter = input1.value.toUpperCase();

  for (let i = 0; i <li.length; i++) {
   
    if(li[i].innerText.toUpperCase().indexOf(filter) > -1){

      li[i].style.display = "";

    }else{

      li[i].style.display = "none";
    }
     }    
  
})