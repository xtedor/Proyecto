<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registro</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="vendor/nouislider/nouislider.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="main">

        <div class="container">
            <div class="signup-content">
                <div class="signup-img" >
                    <img src="images/form-img.jpg" alt="">
                    <div class="signup-img-content">
                        <h2>Registro ATM </h2>
                       
                    </div>
                </div>
                
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form" action="{{ route('crear') }}">
                        {{ csrf_field() }}
                        <div class="form-row">
                            <div class="form-group">
                                <div class="form-input">
                                    <label for="company" class="required">Cedula</label>
                                    <input type="text" name="Cedula" id="Cedula" />
                                </div>
                                <div class="form-input">
                                    <label for="first_name" class="required">Nombre</label>
                                    <input type="text" name="Nombre" id="Nombre" />
                                </div>
                                <div class="form-input">
                                    <label for="last_name" class="required">Apellido</label>
                                    <input type="text" name="Apellido" id="Apellido" />
                                </div>
                                
                                <div class="form-input">
                                    <label for="email" class="required">Email</label>
                                    <input type="text" name="Email" id="Email" />
                                </div>
                                <div class="form-input">
                                    <label for="email" class="required">Contraseña</label>
                                    <input type="text" name="contraseña" id="contraseña" />
                                </div>
                              
                            </div>
                         
                        </div>
                     
                        <div class="form-submit">
                            <input type="submit" value="Submit" class="submit" id="submit" name="submit" />
                            
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/nouislider/nouislider.min.js"></script>
    <script src="vendor/wnumb/wNumb.js"></script>
    <script src="vendor/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="vendor/jquery-validation/dist/additional-methods.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>