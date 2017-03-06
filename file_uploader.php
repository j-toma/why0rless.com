<?php
// $targetfolder = "testupload/";
$targetfolder = '/var/www/why0rless.com/uploads';
// $targetpath = $targetfolder . basename( $_FILES['file']['name']);

// create new directory with 744 permissions if it does not exist yet
// owner will be the user/group the PHP script is run under
if ( !file_exists($targetfolder) ) {
   $oldmask = umask(0);  // helpful when used in linux server
   mkdir ($targetfolder, 0755);
}

// $targetfolder = $targetfolder . basename( $_FILES['file']['name']);
$name = basename( $_FILES['file']['name']);
if(move_uploaded_file($_FILES['file']['tmp_name'], "$targetfolder/$name")) {
  echo "The file ". basename( $FILES['file']['name']). " is uploaded";
  // chmod("uploads/" . basename( $_FILES['file']['name']), 755);
} else {
  echo "Problem uploading file";
}
?>
