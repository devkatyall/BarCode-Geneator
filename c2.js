JsBarcode("#barcode","Hello World")

const action = document.querySelector(".btn");
action.addEventListener("click",function(){
    let command = document.querySelector("#command").value;
    JsBarcode("#barcode", command);
})
