<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forki Dataset</title>
    <link rel="stylesheet" href="style.css">
</head>

<body class="login-body">
    <div class="login-container">
        <h2>FORKA</h2>

        <form action="php/submit_form.php" method="post" onsubmit="return submitForm()" autocomplete="off">
            <div class="form-group">
                <label for="kontingen" class="form-label">Pilih Kontingen:</label>
                <select name="kontingen" id="kontingen" class="form-input" onchange="fetchNames()"></select>
            </div>

            <div class="form-group">
                <label for="name" class="form-label">Name:</label>
                <input type="text" name="name" id="name" class="form-input" oninput="fetchNames()" onkeydown="handleKeyDown(event)" autocomplete="off">
                <div id="nameDropdown" class="autocomplete"></div>
            </div>

            <input type="hidden" name="selectedName" id="selectedName">

            <input type="submit" value="Login" class="submit-btn">
        </form>

        <div id="details-container" class="details-container"></div>
    </div>

    <script src="script.js"></script>
</body>

</html>
