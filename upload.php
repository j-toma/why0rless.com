<?php
$targetfolder = "upload/";
$targetfolder = $targetfolder . basename($_FILES['file']['name']);
if(move_uploaded_file($_FILES['file']['tmp_name'],$targetfolder))
  {
    echo "The file ". basename($_Files['file']['name']). " is uploaded";
  }
  else {
    echo "There was a problem uplaoding the file";
  }
?>
