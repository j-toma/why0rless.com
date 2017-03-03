<!DOCTYPE html>
<html>
<body>

  <form action="upload.php" method="post" enctype="multipart/form-data">
      Select image to upload:
      <input type="file" name="fileToUpload" id="fileToUpload">
      <input type="submit" value="Upload Image" name="submit">
  </form>

<?php

function myTest() {
    // using x inside this function will generate an error
    $x = 5 + 5;
    echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
$txt = "W3Schools.com";
echo "I love $txt!";
?>

</body>
</html>
