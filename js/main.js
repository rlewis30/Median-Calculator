var fieldNum=3;

function addMedianField()
{
    fieldNum++;
    // Create a label node
    var node = document.createElement("label");                 
    // Create a text node
    var textnode = document.createTextNode("Enter a value for field "+fieldNum); 
    // Append the text to <label>
    node.appendChild(textnode);
    //Create and set an id attribute
    node.setAttribute("id","labelmnum"+fieldNum);
    //Create and set a for attribute
    node.setAttribute("for","mnum"+fieldNum);
    // Append <label> to <form> with id="medianForm"
    document.getElementById("medianForm").appendChild(node);     
    
    // Create a label node
    var node = document.createElement("input");
    // Create a text node
    var textnode = document.createTextNode("");
    // Append the text to <label>
    node.appendChild(textnode);
    //Create and set a type attribute
    node.setAttribute("type","text");
    //Create and set a name attribute
    node.setAttribute("name","mnum"+fieldNum);
    //Create and set an id attribute
    node.setAttribute("id","mnum"+fieldNum);
    // Append <input> to <form> with id="medianForm"
    document.getElementById("medianForm").appendChild(node);
}

function deleteMedianField()
{   if(fieldNum>3)
    {
    var parent = document.getElementById("medianForm");
    
    var child = document.getElementById("labelmnum"+fieldNum);
    parent.removeChild(child);
    
    var child = document.getElementById("mnum"+fieldNum);
    parent.removeChild(child);
    
    fieldNum--;
    }
    else
    {
        alert("At least 3 values are needed to calculate the median!");
    }
}

function validateData()
{
    var x;
    var failed=false;
    var inputs = document.getElementById("medianForm").getElementsByTagName("input");
    for(var i=1;i<inputs.length;i++)
    { 
       x=parseFloat(inputs[i].value);
       console.log(x);
       if(isNaN(x))
        failed=true;
    }
    if(failed==true)
    {
        document.getElementById("display").value="Enter a valid Number!";
        //alert("Enter a valid number!");
    }
    else
    {
        //document.getElementById("display").value="";
        //alert("Success!");
        var str=createString();
        postData(str);
    }
    failed=false;
}

function createString()
{
   
    var inputs = document.getElementById("medianForm").getElementsByTagName("input");
    var vars=inputs[1].value;
    for(var i=2;i<inputs.length;i++)
    {
        vars=vars+" "+inputs[i].value;
    }
    return vars;
}

function postData(data)
{
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    // Create some variables we need to send to our PHP file
    var url = "stat.php";
    var vars = "datastream="+data;
    console.log(vars);
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
    console.log(hr);
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            document.getElementById("display").value = return_data;
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    //document.getElementById("status").innerHTML = "processing...";
}

function reset()
{
    var inputs = document.getElementById("medianForm").getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value="";
    }
}