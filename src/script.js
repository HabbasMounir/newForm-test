

function update(text) {
  let result_element = document.querySelector("#highlighting-content");
  // Handle final newlines (see article)
  if(text[text.length-1] == "\n") {
    text += " ";
  }
  // Update code
  result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
  // Syntax Highlight
  Prism.highlightElement(result_element);
}

function sync_scroll(element) {let result_element = document.querySelector("#highlighting"); result_element.scrollTop = element.scrollTop;result_element.scrollLeft = element.scrollLeft;}

function check_tab(element, event) {
  let code = element.value;
  // console.log(event.key)
  // element.style.color=event.key=="Enter"?'red':"transparent"
  if(event.key == "Tab") {
    /* Tab key pressed */
    event.preventDefault(); // stop normal
    let before_tab = code.slice(0, element.selectionStart); // text before tab
    let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
    let cursor_pos = element.selectionStart + 1; // where cursor moves after tab - moving forward by 1 char to after tab
    element.value = before_tab + "\t" + after_tab; // add tab char
    // move cursor
    element.selectionStart = cursor_pos;
    element.selectionEnd = cursor_pos;
    update(element.value); // Update text to include indent
  }
}

let MyMEssage='> dadaadasdk ksdk] k[ak[ak f'
let myra=MyMEssage.split('')
let textarea=document.querySelector("textarea");
let result_element = document.querySelector("#highlighting-content");
function updateByTime(event){

if(event.inputType=='insertLineBreak') {
  let  text=event.target.value
textarea.value+=`\t\t`
text+=`\t\t`
  for (let index = 0; index <= myra.length; index++) {
    setTimeout(()=>{
      if (index==myra.length) {
        textarea.value+=`\n\t\t> `
        text+=`\n\t\t> `
      }else{
      event.target.value+=`${myra[index]}`
      text+=`${myra[index]}`
      }
      result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
      Prism.highlightElement(result_element);
    },index*100)
  }
  console.log(event.target.value.split('\n'))
  // result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
  // Prism.highlightElement(result_element);
}
    // if(text[text.length-1] == "\n") {
    //   textarea.value += "ads";
    // }

    // setTimeout(()=>{},1000)
    // Update code
    // result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    // Prism.highlightElement(result_element);
}
textarea.addEventListener('input',(event)=>updateByTime(event))        
  let  text=textarea.value
  for (let index = 0; index <= myra.length; index++) {
    setTimeout(()=>{
      if (index==myra.length) {
        textarea.value+=`\n\t\t> `
        text+=`\n\t\t> `
      }else{
        textarea.value+=`${myra[index]}`
      text+=`${myra[index]}`
      }
      result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
      Prism.highlightElement(result_element);

    },index*100)
    
  }
  
  // result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
  // Prism.highlightElement(result_element);
