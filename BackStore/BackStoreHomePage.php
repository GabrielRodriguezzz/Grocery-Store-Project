<?php
    session_start();

    session_destroy();
    
    if($_SESSION['loggedIn']){

    }
    else{
        
        header('Location: /Grocery/HomePage.html');
        die;
    }

?>


<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Back Store Product List</title>
        <link rel="stylesheet" href="../templatebackstore.css">
    </head>

    <body>
        
    <!--Navigation bar-->
    <div class="bs_container">
        
            <h1 class="logo">
                <img src="../Images/giraffe.png"
                width="50"
                height="80"
                >
            Giraffood.
            </h1>
    </div>
    
    <div class="bs_wrapper">
        <div class="bs_sidebar">
         <!--   <left><h2-menu><pre> Sidebar</pre></h2></left> -->
            <p>
                    <!--<p><img src="https://www.iconsdb.com/icons/preview/white/home-5-xxl.png" alt="Home" style="width:15px;height:18px;margin-right:5px;">-->
                        <ul class="bs_ul">

                            <li class="bs_li_text">Home</li>
                        
    
                            <li class="bs_li_img"><a href="BackStoreHomePage.html">
                                <img class= "bs_icon" src="../Images/home.png" alt="Home" >
                            </a></li>


                             <li class="bs_li_text ">Products</li>

                                <li class="bs_li_img "><a href="productList.html">
                                    <img class="bs_icon" src="../Images/products.png" alt="Products">
                                    </a></li>
    


                             <li class="bs_li_text">Users</li>

                                <li class="bs_li_img "><a href="newUserList.html">
                                    <img class="bs_icon" src="../Images/users.png" alt="Users">
                                    </a></li>


                             <li class="bs_li_text">Orders</li>

                                <li class="bs_li_img "><a href="newOrderList.html">
                                    <img class="bs_icon" src="../Images/orders.png" alt="Orders">
                                    </a></li>


                            <li class="bs_li_text">About</li>

                                <li class="bs_li_img "><a href="">
                                    <img class= "bs_icon" src="../Images/about.png" alt="About">
                                    </a></li>


                            <li class="bs_li_text">More</li>

                            <li class="bs_li_img "><a href="">
                                <img class= "bs_icon" src="../Images/more.png" alt="More">
                            </a></li>


                            <li class="bs_li_text">Settings</li>

                            <li class="bs_li_img "><a href="">
                                <img class= "bs_icon" src="../Images/settings.png" alt="Settings">
                            </a></li>


                            <li class="bs_li_text">Logout</li>

                            <li class="bs_li_img "><a href="">
                                <img class= "bs_icon" src="../Images/logout.png" alt="Logout">
                            </a></li>

                        </ul>
                </p>
        </div>
        <div class="bs_content">
            <br>
            <p><h2 class="bs_h2-product">Back Store Page</h2></p>
            <br>
            <br>
            <br>
            <br>

            <p><h4><a href="../HomePage.html"> Back to Main Website</a></h4></p>
        </div>
    </div>
    
    </body>