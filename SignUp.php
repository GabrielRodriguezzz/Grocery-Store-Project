<?php
    error_reporting(E_ERROR | E_PARSE);
    $errors = array();
    if(isset($_POST['login'])){
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $address = $_POST['address'];
        $postal = $_POST['postal'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $c_password = $_POST['c_password'];

        if(file_exists('users/' . $email . '.xml')){
            $errors[] = 'Email is already used';
        }
        if($email == ''){
            $errors[] = 'Email is empty';
        }
        if($firstname == ''){
            $errors[] = 'Firstname is empty';
        }
        if($lastname == ''){
            $errors[] = 'Lastname is empty';
        }
        if($address == ''){
            $errors[] = 'Address is empty';
        }
        if($postal == ''){
            $errors[] = 'Postal is empty';
        }
        if($password == '' || $c_password == ' '){
            $errors[] = 'Passwords are blank';
        }
        if($password != $c_password){
            $error[] = 'Passwords do not match';
        }
        
        if(count($errors) == 0){
            $xml = new SimpleXMLElement('<user></user>');
            $xml->addChild('password',md5($password));
            $xml->addChild('email',$email);
            $xml->addChild('firstname',$firstname);
            $xml->addChild('lastname',$lastname);
            $xml->addChild('address',$address);
            $xml->addChild('postal',$postal);

            $xml->asXML('users/' . $email . ".xml");
            header('Location: LogIn.php');

        }
        
    }

?>


<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SignUpPage</title>
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

        <form method = "post" action = "">
            <div class="SignUpForm">
                <div class="SignUpbox">
                    <h1 class="title">Giraffood.
                        <img class="logo" src="Images\giraffe.png"
                        width="30"
                        height="60"
                        >
                    </h1>

                    <p>First Name</p>
                    <input type="text" placeholder="First Name" name="firstname"/>
                    <p>Last Name</p>
                    <input type="text" placeholder="Last Name" name="lastname"/>
                    <p>Address</p>
                    <input type="text" placeholder="Address" name="address"/>
                    <p>Postal Code</p>
                    <input type="text" placeholder="Postal Code" name="postal"/>
                    <p>Email Address</p>
                    <input type="text" placeholder="example@concordia.ca" name="email"/>
                    <p>Password</p>
                    <input type="password" placeholder="PASSWORD" name="password"/>
                    <p>Confirm Password</p>
                    <input type="password" placeholder="PASSWORD" name="c_password"/>

                    <button type="submit" name="login">Sign Up</button>
                    <br>
                    <button type="button">Reset</button>

                    <?php
                        if(count($errors)>0){
                            echo '<ul>';
                            foreach($errors as $e){
                                echo '<li>' . $e . '</li>';
                            }
                            echo '</ul>';
                        }
                    ?>
                </div>

            </div>


         </form>


        
       
        
        <!-- Footer -->
        <!-- <footer>
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
            </footer> -->
    </body>
 </html>