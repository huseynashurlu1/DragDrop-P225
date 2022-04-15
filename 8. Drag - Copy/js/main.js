
// let div = document.getElementById('first');

// // drag / dragstart / dragend / dragleave / dragover / drop

// div.addEventListener('dragstart',function(){
//   console.log('Drag started');
// })

// div.addEventListener('drag',function(){
//   console.log('Drag started');
// })


// div.addEventListener('dragend',function() {
//   console.log('Drag end')
// })


// let content = document.querySelector('#content');
// let icon = document.querySelector('#icon')

// content.addEventListener('dragover',function(){
//   content.style.border = '5px dashed red';
//   icon.style.opacity = '1';
// });

// content.addEventListener('dragleave',function(){
//   content.style.border = '5px solid red';
//   icon.style.opacity = '0';
// });




// var dropArea = document.getElementById('DropArea');
// var drop_content = document.querySelector('.drop-content');
// var dragItem = document.querySelectorAll('.drag-item');


// dropArea.addEventListener('dragover',function(e){
//   e.preventDefault();
//   dropArea.style.boxShadow = "inset 1px 1px 13px 1px #f56512"
// })

// dropArea.addEventListener('dragleave',function(){
//   dropArea.style.boxShadow = "inset 0px 0px 0px 0px #f56512"
// })



// for(var i=0;i<dragItem.length;i++) {
//   dragItem[i].addEventListener('dragstart',function(e){
//     e.dataTransfer.setData("param",this.id);
//   });
// };




// // bizim
// dropArea.addEventListener('drop',function(e){
//   console.log("DA");
//   e.preventDefault();
//   var elemID = e.dataTransfer.getData("param");
//   var dropped_item = document.getElementById(elemID);
//   dropArea.appendChild(dropped_item); 
// })






// for(var i=0;i<dragItem.length;i++) {
//   dragItem[i].addEventListener('dragstart',function(param){
//       param.dataTransfer.setData('param',this.id)
//   });
// }


// // works
// drop_content.addEventListener('drop',function(e){
//   var myId = e.dataTransfer.getData("param");
//   var drgItem = document.getElementById(myId);
//   dropArea.appendChild(drgItem);
// })






// let checkbox = document.getElementById('terms');
// let label = document.getElementById('label');
// function Submit() {
//   if(checkbox.checked==true) {
//     label.style.color = "green";
//   }
//   else{
//     label.style.color = 'red';
//   }
// }



// HTTP REQUEST


// XMLHTTPREQUEST
// FETCH
// AXIOS





function SendRequest() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(this.readyState ===4 && this.status === 200) {
      document.getElementById('products').innerHTML = this.responseText;
      console.log(this.responseText);
    }
    if(this.status === 404) {
      document.getElementById('err').innerHTML = "404 NOT FOUND"
    }
  }


  xhr.open('GET','productt.html',true);
  xhr.send();
} 