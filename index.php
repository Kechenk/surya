<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forki Dataset</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        .login-body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }

        h2 {
            color: #333;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }

        .form-input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }

        .autocomplete {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            max-height: 150px;
            overflow-y: auto;
            position: absolute;
            z-index: 1;
            width: 100%;
        }

        .submit-btn {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .submit-btn:hover {
            background-color: #45a049;
        }

        .details-container {
            margin-top: 20px;
        }
    </style>
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
