<?php

    $error = false;
    if(isset($_POST['login'])){
        $email = $_POST['email'];
        $password = md5($_POST['password']);


        if(file_exists('users/' . $email . '.xml')){
            $xml = new SimpleXMLElement('users/' . $email . '.xml',0,true);

            if($email == 'Admin' && $password == $xml->password){
                session_start();
                $_SESSION['loggedIn'] = true;
                header('Location: BackStore/BackStoreHomePage.php');
                die;
            }

            if($password == $xml->password){
                session_start();
                $_SESSION['email'] = $email;
                header('Location: HomePage.php');
                die;
            }
        }
        $error = true;
    }

?>


<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LoginPage</title>
        <link rel="stylesheet" href="template.css">
    </head>

    <body>

        <!--Navigation bar-->
        <div class="container">
            <div class="navbar">
                <h1>
                    <img class="logo" src="Images\giraffe.png"
                    width="50"
                    height="80"
                    >
                    Giraffood.
                    <div class="ShoppingCart">
                        <a href="ShoppingCart.html">
                            <img src="Images\Cart_1.png" class="ShoppingCart"   
                             height="60";
                             width="60";>
                        </a>
                    </div>
                </h1>

                <ul>
                    <li><a href="HomePage.html">Home</a></li>
                    <li class="dropdown">
                      <a href="" class="dropbtn">Aisles</a>
                      <div class="dropdown-content">
                        <a href="Bakery/BakeryAisle.html">Bakery</a>
                        <a href="FruitVeg/FruitVegAisle.html">Fruits & Vegetables</a>
                        <a href="Pantry/PantryAisle.html">Pantry</a>
                        <a href="Meat/MeatAisle.html">Meats</a>
                        <a href="Dairy/DairyAisle.html">Dairy & Eggs</a>
                      </div>
                    </li>
                    <li><a href="SignUp.php">Sign Up</a></li>
                    <li><a href="LogIn.php">Login</a></li>
                    </div>
                  </ul>
            </div>
        </div>

        
            <div class="LoginForm">
                <div class="LogInbox">
                    <h1 class="title">Giraffood.
                        <img class="logo" src="Images\giraffe.png"
                        width="30"
                        height="60"
                        >
                    </h1>

                    <p>Enter your email:</p>
                    <form method = "post" action = "">
                        <input type="text" placeholder="example@concordia.ca" name="email"/>
                        <p>Enter your password:</p>
                        <input type="password" placeholder="PASSWORD" name="password"/>

                        <?php
                            if($error){
                                echo('<p>Invalid password and/or email</p><br>');
                            }
                        ?>


                        <!-- <input type="submit" value="Login" name="login"></input> -->
                        <button type="submit" name="login">Log In</button>
                        <br>
                     
                    </form> 



                    <button id = "ForgotPass" type="button">Forgot your password?</button>
                    <script type="text/javascript">
                        document.getElementById("ForgotPass").onclick = function () {
                            location.href = "SignUp.php";
                        };
                    </script>



            </div>

         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>

  
        
         <!-- Footer -->
         <footer>
            <div class="navbar">
                    <nav style="text-align: left;">
                        <ul>
                            <li>
                                <a href="Facebook">
                                    <img src="Images/fb.png"
                                    width="40"
                                    height="40">

                                 </a>
                            </li>

                            <li>
                                <a href="Instagram">
                                    <img src="Images/ig.png"
                                    width="40"
                                    height="40">
                                </a>
                            </li>

                            <li>
                                <a href="Twitter" >
                                    <img src="Images/twitter.png"
                                    width="40"
                                    height="40">
                                </a>
                            </li>

                        </ul>
                    </nav>
            </div>
        </footer>
    </body>
 </html>