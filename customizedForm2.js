
var id = 0;
var h1 = document.getElementById("setheading");
function heading() {
    var x = document.getElementById("getheading").value;
    h1.innerHTML = x;
    // document.getElementById("save").style.display = "block";
    // document.getElementById("edit").style.display = "block";
}
var demo3 = document.getElementById("demo3");
var demo2 = document.getElementById("demo2");
function createIP() {
    // deleting all previous elements from the div, if present 
    removeAllChildNodes(demo2);
    removeAllChildNodes(demo3);
    // var label = document.getElementById("setlabel").value;
    var type = document.getElementById("Iptype").value;
    value(type);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
var main_contents = " ";

function value(type) {

    if (type == "radio") {
        radioboxoptions();
    }
    else if (type == "checkbox") {
        checkboxoptions();
    }
    else if (type == "range") {
        range();
    }
    else if (type == "text") {
        text();
    }
    else {
        var label = document.getElementById("setlabel").value;
        console.log(label);
        var html = "";
        html += `
        <div style="width: 100%; display:flex; justify-content: center; align-items: center;">
            <div style="width: 25%; display:inline-block;">
                <label style="padding: 12px; margin-left: 10%;" id="heading" class="label">${label}</label>
            </div>
            <div style="width: 75%; display:inline-block;">
                <input style="border-radius: 5px;  border: 1px solid #ccc; height: 40px; padding: 12px; width: 60%;" type="${type}" id="${id}" draggable="true" ondragstart="drag(event)" class="ip draggableElement">
            </div>
        </div>

        <br>
        `

        main_contents += html;
        var div = document.createElement("DIV");
        div.innerHTML = html;
        document.getElementById("contents").appendChild(div);
        id = id+1;

    }
}
function radioboxoptions() {
    var rbi;
    var i = 1;
    var html = " ";
    rbi = document.createElement("INPUT");
    rbi.setAttribute("type", "text");
    rbi.setAttribute("class", "rbo ip draggableElement");
    rbi.setAttribute("placeholder", "Radio Option 1");
    document.getElementById("demo2").appendChild(rbi);

    var div = document.createElement("DIV");
    div.setAttribute("id", "div2");
    document.getElementById("demo2").append(div);

    var add = document.createElement("BUTTON");
    add.innerHTML = " Add Radio Button ";
    add.id = "rbPlus";
    document.getElementById("demo3").appendChild(add);

    var inputBox = document.getElementById("div2");
    add.onclick = function () {
        html += `<div style="display: inline-block; margin-top:10px;"> 
            <input type="text" class="rbo ip2" placeholder= "Radio Option ${i + 1}" > 
            <i  class="fa fa-trash" style="font-size:30px; " aria-hidden="true" onclick="del(this)">
            </i></div> <br> `;
        inputBox.innerHTML = html;
        i++;
    }
    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "Add To Form";
    btn2.id = "rb";
    demo3.append(btn2);
    btn2.onclick = function () {
        let box = document.createElement("DIV");
        box.setAttribute("id", "box");
        var getlabel = document.getElementById("setlabel").value;
        console.log(getlabel);
        let label = " ";
        label += `
        <label style="margin-left:40%;">
        ${getlabel}
        </label>
        <br>
        `;
        main_contents += label;
        let setlabel = document.createElement("DIV");
        setlabel.style.margin = "auto";
        setlabel.innerHTML = label;
        document.getElementById("contents").append(setlabel);
        var x = document.getElementsByClassName("rbo");
        for (var i = 0; i < x.length; i++) {
            var y = x[i].value;
            let ip = " ";
            ip += `
            <br>
            <div style="width: 100%;display:flex; justify-content: space-between; align-items: center;">
            <div style="width: 49%;  display:inline-block;">
                <label style="float: right; " id="heading" class="label">${y}</label>
            </div>
            <div style="width: 49%; display:inline-block;">
                <input style="float: left;" type="radio" class="draggableElement" draggable="true" ondragstart="drag(event)" id="${id}" name="val" value=${y}>
            </div>
            </div>
            <br>
            <br>
            `;
            id = id+1;
            let box = document.createElement("DIV");
            box.innerHTML = ip;
            document.getElementById("contents").appendChild(box);
            main_contents += ip;
        }
        document.getElementById("preview").appendChild(label, box);
        document.getElementById("demo2").innerHTML = " ";
        document.getElementById("rb").remove();
        document.getElementById("rbPlus").remove();
    }
}
function checkboxoptions() {
    var cbi;
    var i = 1;
    var html = "";
    cbi = document.createElement("INPUT");
    cbi.setAttribute("type", "text");
    cbi.setAttribute("class", "cbo ip ");

    cbi.setAttribute("placeholder", "Check Box Option 1");
    document.getElementById("demo2").appendChild(cbi);

    var div = document.createElement("DIV");
    div.setAttribute("id", "div1");
    document.getElementById("demo2").append(div);

    var add = document.createElement("BUTTON");
    add.id = "cbPlus";
    add.innerHTML = " Add Checkbox ";
    document.getElementById("demo3").appendChild(add);
    var inputBox = document.getElementById("div1");
    add.onclick = function () {
        html += `<div style="display: inline-block; width:100%; margin-top:10px;"> 
            <input type="text" class="cbo ip2" placeholder= "Check Box Option ${i + 1}" >
             <i  class="fa fa-trash" style="font-size:30px; " aria-hidden="true" onclick="del(this)"></i></div> <br> `;
        inputBox.innerHTML = html;
        i++;
    }
    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "Add To Form";
    btn2.id = "cb"
    demo3.append(btn2);
    btn2.onclick = function () {
        let box = document.createElement("DIV");
        box.setAttribute("id", "box");
        box.style.margin = "auto";
        var getlabel = document.getElementById("setlabel").value;
        console.log(getlabel);
        let label = " ";
        label += `
        <label style="margin-left:40%;">
        ${getlabel}
        </label>
        <br>
        `;
        main_contents += label;
        let setlabel = document.createElement("DIV");
        setlabel.innerHTML = label;
        document.getElementById("contents").appendChild(setlabel);

        var x = document.getElementsByClassName("cbo");
        for (var i = 0; i < x.length; i++) {
            var y = x[i].value;
            let ip = " ";
            ip += `
            <br>
            <div style="width: 100%;display:flex; justify-content: space-between; align-items: center;">
            <div style="width: 49%; display:inline-block;">
                <label style="float: right; " id="heading" class="label">${y}</label>
            </div>
            <div style="width: 49%; display:inline-block;">
                <input style="float: left; " type="checkbox" class="checkboxinput draggableElement" draggable="true" ondragstart="drag(event)" id="${id}" name="val" value=${y}>
            </div>
        </div>
        <br>
        <br>
            `;
            id = id+1;
            let box = document.createElement("DIV");
            box.innerHTML = ip;
            document.getElementById("contents").appendChild(box);
            main_contents += ip;
        }
        document.getElementById("demo2").innerHTML = " ";
        document.getElementById("cb").remove();
        document.getElementById("cbPlus").remove();

    }
}
function del(e) {
    var x = e.parentElement;
    x.remove();
}
function range() {
    // var h = document.createElement("label");
    // h.innerHTML = "Enter range";
    var ip = document.createElement("INPUT");
    ip.setAttribute("id", "minrange");
    ip.setAttribute("class", "ip");
    ip.setAttribute("type", "number");
    ip.setAttribute("placeholder", "Enter minimum range");
    var ip2 = document.createElement("INPUT");
    ip2.setAttribute("id", "maxrange");
    ip2.setAttribute("class", "ip");
    ip2.setAttribute("type", "number");
    ip2.setAttribute("placeholder", "Enter maximum range");

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Add";
    btn.onclick = function () {
        let minimum = document.getElementById("minrange").value;
        let maximum = document.getElementById("maxrange").value;
        if (minimum == 0 || maximum == 0) {
            alert("Please enter valid details");
        }
        else {
            var label = document.getElementById("setlabel").value;
            let max = document.getElementById("maxrange").value;
            let min = document.getElementById("minrange").value;
            var html = " ";
            html += `
            <div style="width: 100%; display:flex; justify-content: center; align-items: center;">
                <div  style=" width: 25%; display:inline-block;">
                    <label style="padding: 12px; margin-left: 10%;" id="heading" class="label">${label}</label>
                </div>
                <div style=" width: 75%; display:inline-block;">
                    <input type="range" min="${min}" max="${max}" id="${id}" class="ip draggableElement" style="border-radius: 5px;  border: 1px solid #ccc; height: 40px; padding: 12px; width: 60%;" >
                </div>
            </div>
            <br>
            `;
            id = id+1;
            main_contents += html;
            var div = document.createElement("DIV");
            div.innerHTML = html;
            document.getElementById("contents").appendChild(div);
        }
    }
    // document.getElementById("demo2").appendChild(h);
    document.getElementById("demo2").appendChild(ip);
    document.getElementById("demo2").appendChild(ip2);
    document.getElementById("demo2").appendChild(btn);
}
function text() {
    var ip = document.createElement("INPUT");
    ip.setAttribute("placeholder", "Enter placeholder content");
    ip.setAttribute("class", "ip");
    ip.setAttribute("id", "plh");
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Add";
    var br = document.createElement("BR");
    btn.setAttribute("id", "btn2")
    demo2.appendChild(ip);
    demo2.appendChild(br);
    demo2.appendChild(btn);

    btn.onclick = function () {
        var label = document.getElementById("setlabel").value;
        console.log(label);
        let placeholder = document.getElementById("plh").value;
        document.getElementById("plh").remove();
        document.getElementById("btn2").remove();
        var html = " ";
        html += `
        <div style="width: 100%; display:flex; justify-content: center; align-items: center;">
        <div  style=" width: 25%; display:inline-block;" >
            <label  style="padding: 12px; margin-left: 10%;" id="heading" class="label">${label}</label>
        </div>
        <div style=" width: 75%; display:inline-block;">
            <input type="text" id="${id}" placeholder="${placeholder}" class="ip draggableElement" style="border-radius: 5px;  border: 1px solid #ccc; height: 40px; padding: 12px; width: 60%;">
        </div>
        </div>
        <br>
        `;
        id = id+1;
        main_contents += html;
        var div = document.createElement("DIV");
        div.innerHTML = html;
        document.getElementById("contents").appendChild(div);
    }
}



// function edit() {
//     document.getElementById("container").contentEditable = true;
//     document.getElementById("save").disabled = false;
//     document.getElementById("dropdiv").style.display = "block";
// }

// function allowDrop(ev) {
//     ev.preventDefault();
//     console.log("allowdrop");
// }
// function drag(ev) {
//     ev.dataTransfer.setData("Text", ev.target.id);
//     console.log("drag");
// }
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("Text");
//     var el = document.getElementById(data);
//     console.log(el);
//     el.parentNode.removeChild(el);
// }
// function save() {
//     document.getElementById("container").contentEditable = false;
//     document.getElementById("dropdiv").style.display = "none";
//     document.getElementById("save").disabled = true;
// }

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function () {

    var filename = "form.html";

    download(filename, main_contents);
}, false);
