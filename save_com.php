<?php
  $con = mysqli_connect("localhost","root","","testb");

    


  $name 		= $con->real_escape_string($_POST['name']);
  $mail         = $con->real_escape_string($_POST['mail']);
  $conta         = $con->real_escape_string($_POST['contact']);
  $passw         = $con->real_escape_string($_POST['pass']);
	


	 
        $insert  = "INSERT INTO users (`name`,'email','phone','password')
         VALUES ('$name','$mail','$conta','$passw')";
        $result  = $con->query($insert);

       
/*}else{
		$_SESSION['message'] = 'already taken. Please enter a unique Government ID!';
		$_SESSION['success'] = 'danger';
	}*/
 header("Location: dashboard.php");
$con->close();
?>