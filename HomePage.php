<?php
  session_start();
  if(!file_exists('users/' . $_SESSION['email'] . '.xml')){
    header('Location: LogIn.php');
    die;
  }
?>


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HomePage</title>
    <link rel="stylesheet" href="template.css" />
  </head>

  <body>
    <!--Navigation bar-->
    <div class="container">
      <h1 class="logo">
        <img src="Images\giraffe.png" width="50" height="80" />

        Giraffood.
        <div class="ShoppingCart">
          <a href="ShoppingCart.html">
            <img
              src="Images\Cart_1.png"
              class="ShoppingCart"
              height="60"
              ;
              width="60"
              ;
            />
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
      </ul>
    </div>

    <br />
    <p id="welcome" style="font-size:24; text-align:center;">Welcome, <?php echo $_SESSION['email'];?></p>
    <h2>Store Aisles</h2>
    <br />
    <br />

    <div class="aisle">
      <!--This is Bakery Aisle-->
      <div class="AisleItem">
        <a href="Bakery/BakeryAisle.html">
          <img class="image" src="Images/BakeryAisle.jpeg" />
          <div class="overlay">
            <div class="title">Bakery</div>
          </div>
        </a>
      </div>

      <!-- This is the Dairy & Eggs Aisle-->

      <div class="AisleItem">
        <a href="Dairy/DairyAisle.html">
          <img class="image" src="Images/Dairy_EggAisle.jpeg" />
          <div class="overlay">
            <div class="title">Dairy & Eggs</div>
          </div>
        </a>
      </div>

      <!-- This is the Fruit & Vegetable Aisle -->

      <div class="AisleItem">
        <a href="FruitVeg/FruitVegAisle.html">
          <img class="image" src="Images/Fruit_VegetableAisle.jpeg" />
          <div class="overlay">
            <div class="title">Fruits & <br />Vegetables</div>
          </div>
        </a>
      </div>

      <!-- This is the Meat Aisle -->

      <div class="AisleItem">
        <a href="Meat/MeatAisle.html">
          <img class="image" src="Images/steak.png" />
          <div class="overlay">
            <div class="title">Meats</div>
          </div>
        </a>
      </div>

      <!-- This is the Pantry Aisle -->
      <div class="AisleItem">
        <a href="Pantry/PantryAisle.html">
          <img class="image" src="Images/PantryAisle.jpeg" />
          <div class="overlay">
            <div class="title">Pantry</div>
          </div>
        </a>
      </div>
    </div>

    <br /><br /><br /><br />
    <!-- Footer -->
    <footer>
      <!--Footer Navigation Bar-->
      <nav style="text-align: left">
        <ul>
          <li>
            <a href="Facebook">
              <img src="Images/fb.png" width="40" height="40" />
            </a>
          </li>

          <li>
            <a href="Instagram">
              <img src="Images/ig.png" width="40" height="40" />
            </a>
          </li>

          <li>
            <a href="Twitter">
              <img src="Images/twitter.png" width="40" height="40" />
            </a>
          </li>

            <li>
                <a href="HomePage.html"> Log Out </a>
            </li>

          
        </ul>
      </nav>
    </footer>
  </body>
</html>
