<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="/" method="post" enctype="multipart/form-data">
    @csrf
    <input type="text" name="title" placeholder="title"><br>
    <input type="text" name="description" placeholder="description"><br>
    <input type="file" name="mp3" placeholder="mp3"><br>
    <input type="text" name="image" placeholder="image"><br>
    <input type="text" name="artist" placeholder="artist"><br>
    <input type="number" name="singer_id" placeholder="singer_id"><br>
    <input type="number" name="user_id" placeholder="user_id"><br>
    <input type="text" name="genre" placeholder="genre"><br>
    <input type="text" name="album" placeholder="album"><br>
    <input type="number" name="listens" placeholder="listens"><br>
    <button type="submit">Add</button>
</form>
</body>
</html>
