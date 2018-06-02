<!DOCTYPE html>
<html>
    <head>
        <title>Statistics Calculator</title>
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <div id="medianContent">
            <h1>Median Calculator</h1>
            <form id="medianForm" action="stat.php" method="post">
                <input type="text" id="display"readonly="true"/>
                 <p>
                    To determine the median, enter the values below:
                </p>
                <label id="labelmnum1" for="mnum1">Enter a value for field 1</label>
                <input type="text" name="mnum1" id="mnum1" />
                <label id="labelmnum2" for="mnum1">Enter a value for field 2</label>
                <input type="text" name="mnum2" id="mnum2" />
                <label id="labelmnum3" for="mnum3">Enter a value for field 3</label>
                <input type="text" name="mnum3" id="mnum3" />
            </form>
            <button id="addmfield" onclick="addMedianField()">Add a field</button>
            <button id="deletemfield" onclick="deleteMedianField()">Delete a field</button>
            <button id="mSubmit" onclick="validateData()">Submit</button>
            <button id="reset"onclick="reset()">Reset</button>
        </div>
        <div id="testSection">
            <p id="testElement">
                
            </p>
        </div>
        <script type="text/javascript" src="js/main.js">
        </script>
    </body>
</html>