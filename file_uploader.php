

<?php
   if(isset($_FILES['file'])){
      $errors= array();
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));

      $extensions= array("jpeg","jpg","png","pdf");

      if(in_array($file_ext,$extensions)=== false){
         $errors[]="Extension not allowed, please choose a .jpg, .jpeg, .png, or .pdf file.";
      }

      if($file_size > 10097152){
         $errors[]='File size must be under 10MB';
      }
      $targetfolder = 'uploads';
      $name = basename( $_FILES['file']['name']);

      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"$targetfolder/$name");
         echo "<ul><li>$file_name</li><li>$file_size</li><li>$file_type</li></ul>";

      }else{
        echo "Problem uploading file";
        print_r($errors);
      }
   }
?>
