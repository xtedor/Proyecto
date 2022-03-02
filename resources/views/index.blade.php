<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="csclogin/fonts/icomoon/style.css">

    <link rel="stylesheet" href="csclogin/css/owl.carousel.min.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="csclogin/css/bootstrap.min.css">
    
    <!-- Style -->
    <link rel="stylesheet" href="csclogin/css/style.css">

    <title>Login #2</title>
  </head>
  <body>
  

  <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style="background-image: url('csclogin/images/bg_1.jpg');"></div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>ATM <strong>Contaminación</strong></h3>
            <p class="mb-4">Panel de administrador</p>
            <form method="POST" action="{{ route('entrar') }}">
              {{ csrf_field() }}
              <div class="form-group first">
                <label for="username">Correo Electronico</label>
                <input type="text" class="form-control" placeholder="Email" id="Email" name="Email">
              </div>
              <div class="form-group last mb-3">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" placeholder="contraseña" id="contraseña" name="contraseña">
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Recuerdame</span>
                  <input type="checkbox" checked="checked"/>
                  <div class="control__indicator"></div>
                </label>
               
              </div>
             
              @if (Session::get('msg'))
              <div class="alert alert-success"><strong>{!! \Session::get('msg') !!}</strong></div>
              @endif
              @if (Session::get('msgerror'))
              <div class="alert alert-danger"><strong>{!! \Session::get('msgerror') !!}</strong></div>
              @endif


            
              
              <input type="submit" value="Entrar" class="btn btn-block btn-success">

            </form>
            <br>
            <a href="{{ route('registrar') }}">
              <input type="submit" value="Registro" class="btn btn-block btn-success">
            </a>
         
          </div>
        </div>
      </div>
    </div>

    
  </div>
    
    

    <script src="csclogin/js/jquery-3.3.1.min.js"></script>
    <script src="csclogin/js/popper.min.js"></script>
    <script src="csclogin/js/bootstrap.min.js"></script>
    <script src="csclogin/js/main.js"></script>
  </body>
</html>