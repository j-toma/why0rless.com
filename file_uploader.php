<?php
// $targetfolder = "testupload/";
$targetfolder = 'upload';

// create new directory with 744 permissions if it does not exist yet
// owner will be the user/group the PHP script is run under
if ( !file_exists($targetfolder) ) {
   $oldmask = umask(0);  // helpful when used in linux server
   mkdir ($targetfolder, 0744);
}

// $targetfolder = $targetfolder . basename( $_FILES['file']['name']);
$name = basename( $_FILES['file']['name']);
if(move_uploaded_file($_FILES['file']['tmp_name'], "$targetfolder/$name"))
{
  echo "The file ". basename( $FILES['file']['name']). " is uploaded";
}
else {
  echo "Problem uploading file";
}
?>
