<!DOCTYPE html>
<html lang="en">
<head>
	<title>ATM CONTAMINACION</title>
	<meta charset="UTF-8">
	<meta name="description" content="Cryptocurrency Landing Page Template">
	<meta name="keywords" content="cryptocurrency, unica, creative, html">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Favicon -->
	<link href="img/favicon.ico" rel="shortcut icon"/>

	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<!-- Stylesheets -->
	<link rel="stylesheet" href="inicio/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="inicio/css/font-awesome.min.css"/>
	<link rel="stylesheet" href="inicio/css/themify-icons.css"/>
	<link rel="stylesheet" href="inicio/css/animate.css"/>
	<link rel="stylesheet" href="inicio/css/owl.carousel.css"/>
	<link rel="stylesheet" href="inicio/css/style.css"/>


	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<style>
.bg-orange{background-color:#ff9933!important}
    .bg-pink{background-color:#cc0033!important}
    .bg-purple{background-color:#660099!important}
    .bg-vinot{background-color:#7e0023!important}

	.carousel-control.left {
    background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
    background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
    background-image: linear-gradient(to right,rgba(53, 167, 161, 0.5) 0,rgba(0,0,0,.0001) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
    background-repeat: repeat-x;
}

.carousel-control.right {
    
	background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
    background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
    background-image: linear-gradient(to right,rgba(53, 167, 161, 0.5) 0,rgba(0,0,0,.0001) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
    background-repeat: repeat-x;
}

.rounded-rect {
        background: white;
        border-radius: 10px;
        box-shadow: 0 0 50px -25px black;
    }

    .flex-center {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-center.left {
        left: 0px;
    }

    .flex-center.right {
        right: 0px;
    }

    .sidebar-content {
        position: absolute;
        width:100%;
        height: 70%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        color: rgb(0, 0, 0);
    }

    .sidebar-toggle {
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        overflow: visible;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar-toggle.left {
        right: -1.5em;
    }

    .sidebar-toggle.right {
        left: -1.5em;
    }

    .sidebar-toggle:hover {
        color: #0aa1cf;
        cursor: pointer;
    }

    .sidebar {
        transition: transform 1s;
        z-index: 1;
        width: 300px;
        height: 100%;
    }

    /*
  The sidebar styling has them "expanded" by default, we use CSS transforms to push them offscreen
  The toggleSidebar() function removes this class from the element in order to expand it.
*/
    .left.collapsed {
        transform: translateX(-295px);
    }

    .right.collapsed {
        transform: translateX(295px);
    }

	</style>
	
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css" rel="stylesheet">
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
</head>
<body>
	<!-- Page Preloder -->
	<div id="preloder">
		<div class="loader"></div>
	</div>

	<!-- Header section -->
	<header class="header-section clearfix">
		<div class="container-fluid">
			<a href="index.html" class="site-logo">
				<img src="inicio/img/logo.png" alt="">
			</a>
			<div class="responsive-bar"><i class="fa fa-bars"></i></div>
			<a href="" class="user"><i class="fa fa-user"></i></a>
			<a href=" {{ route('ingreso') }}" class="site-btn">Ingresar</a>
			<nav class="main-menu">
				<ul class="menu-list">
					<li><a href="#informacion">Informacíon</a></li>
					<li><a href="#escalas">Escalas</a></li>
					<li><a href="#mapa">Mapa</a></li>
					<li><a href="#estadistica">Estadistica</a></li>
					<li><a href="#datos">Datos Historicos</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<!-- Header section end -->


	<!-- Hero section -->
	<section class="hero-section">
		<div class="container">
			<div class="row">
				<div class="col-md-6 hero-text">
					<h2>Niveles De Contaminación Y <br>Cancer De Pulmon En<span> San Juan De Pasto</span></h2>
					<h4>Datos historicos desde 2011 a 2017 y predicción del factor contaminante</h4>
					
				</div>
				<div class="col-md-6">
					<img src="inicio/img/laptop.png" class="laptop-image" alt="">
				</div>
			</div>
		</div>
	</section>
	<!-- Hero section end -->


	<!-- About section -->
	<section class="about-section spad" id="informacion">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-6 about-text">
					<h2>Calidad del Aire</h2>
					
					<p>La ciudad de San Juan de Pasto tuvo un monitorio de la calidad del aire hasta el año 2018 donde se puede ver todas las emisiones registradas por el sistema de monitoreo y por medio de la página web SISAIRE del IDEAM estos datos quedaron almacenados para la visualización al público.</p>
					<h5>Sisaire Ideam</h5>
					<a href="http://sisaire.ideam.gov.co/ideam-sisaire-web/consultas.xhtml" class="site-btn sb-gradients sbg-line mt-5">Visitar Sisaire</a>
				</div>
			</div>
			<div class="about-img">
				<img src="inicio/img/about-img.png" alt="">
			</div>
		</div>
	</section>
	<!-- About section end -->


	<!-- Features section -->
	<section class="features-section spad gradient-bg" id="escalas">
		<div class="container text-white">
			<div class="section-title text-center">
				<h2>Escala De Calidad Del Aire</h2>
				<p>La escala para indexar la Contaminación se basa en la norma EPA de EE.UU usando la fórmula de informe Instant Cast .
				</p>
			</div>
			<div class="row ">
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-success"></i>
					<div class="feature-content">
						<h4>Bueno</h4>
						<p>La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.</p>
						<p>IQA 0-50 </p>
					</div>
				</div>
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-warning"></i>
					<div class="feature-content">
						<h4>Moderado</h4>
						<p>La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber un problema de salud moderado para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire.</p>
						<p>IQA 50 - 100 </p>
					</div>
				</div>
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-orange"></i>
					<div class="feature-content">
						<h4>No es saludable para grupos que son sensibles.</h4>
						<p>Los miembros de grupos sensibles pueden experimentar efectos en la salud. El público en general no es probable que se vea afectado.</p>
						<p>IQA 100 - 150  </p>
					</div>
				</div>
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-pink"></i>
					<div class="feature-content">
						<h4>Insalubre</h4>
						<p>Todos pueden comenzar a experimentar efectos en la salud; los miembros de grupos sensibles pueden experimentar efectos de salud más graves</p>
						<p>IQA 150 - 200  </p>
					</div>
				</div>
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-purple"></i>
					<div class="feature-content">
						<h4>Muy poco saludable</h4>
						<p>Advertencias sanitarias de condiciones de emergencia. Existe la posibilidad que la población entera se vea afectada.</p>
						<p>IQA 200 - 300  </p>
					</div>
				</div>
				<!-- feature -->
				<div class="col-md-6 col-lg-4 feature">
					<i class="ti-flag-alt bg-vinot"></i>
					<div class="feature-content">
						<h4>Peligroso</h4>
						<p>Alerta de salud: todos pueden experimentar efectos de salud más graves.</p>
						<p>IQA 300 - 500  </p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Features section end -->


	<!-- Process section -->
	<section class="process-section spad" id="mapa">
		<div class="container ">
			<div class="section-title text-center">
				<h2>Mapa de contaminación atmosférica en San juan de Pasto</h2>
				<p>Se presenta mapa de San Juan de Pasto divido en doce comunas  </p>
			</div>
			<div class="row   text-center">
				<div class="col-md-12 ">
					<div id='map' style='width: 100%; height: 600px;'>
						<div id="right" class="sidebar flex-center right collapsed">
							<div class="sidebar-content rounded-rect flex-center">
								<div class="container ">

									<div class="row  py-5">
										<div class="col-md-12 titulo display-4">comuna</div>
									</div>
									<hr>
									<div class="row  py-5 text-light color_escala">
										<div class="col-md-6 valor">
											33
										</div>
										<div class="col-md-6 escala">
											bueno
										</div>
									</div>
									<hr>
										<div class="row px-4 py-2">
											<div class="col-md-6">PM10</div>
											<div class="col-md-6 pm">10</div>
										</div>
										<div class="row px-4 py-2">
											<div class="col-md-6">TEMPERATURA</div>
											<div class="col-md-6 tem">10</div>
										</div>
										<div class="row px-4 py-2">
											<div class="col-md-6">PRESIÓN ATM</div>
											<div class="col-md-6 atm">10</div>
										</div>
										<div class="row px-4 py-2">
											<div class="col-md-6">HUMEDAD</div>
											<div class="col-md-6 hum">10</div>
										</div>
										<div class="row px-4 py-2">
											<div class="col-md-6">VELOCIDAD VIENTO</div>
											<div class="col-md-6 vel">10</div>
										</div>
											
											
											
							
										
									

								</div>
								<div class="sidebar-toggle rounded-rect right" onclick="toggleSidebar('right')">
									&larr;
									</div>
							</div>
						</div>
						<div id="left" class="sidebar flex-center left collapsed">
							<div class="sidebar-content rounded-rect flex-center">
								<div class="container ">

									<div class="row  py-5">
										<div class="col-md-12 escala display-4">titulo</div>
									</div>
									<hr>
									<div class="row py-5 text-light colin">
										<div class="col-md-12 valor">
											<i class="ti-flag-alt "></i>
										</div>
									</div>

									<div class="row py-5 ">
										<div class="col-md-12 info">
											leterdsafasdhkjlf
										</div>
									</div>
									
										
									
									

								</div>
								
								<div class="sidebar-toggle rounded-rect left" onclick="toggleSidebar('left')">
								&rarr;
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12 ">
					<div id="div2" class="row text-light text-center ">
						<div class="col-md-1 bg-success" onclick="informacions(1)">Bueno</div>
						<div class="col-md-2 bg-warning" onclick="informacions(2)">Moderado</div>
						<div class="col-md-3 bg-orange" onclick="informacions(3)">No es saludable para grupos sensibles</div>
						<div class="col-md-2 bg-pink" onclick="informacions(4)">Insalubre</div>
						<div class="col-md-2 bg-purple" onclick="informacions(5)">poco Saludable</div>
						<div class="col-md-2 bg-vinot" onclick="informacions(6)">Peligroso</div>
					</div>

				</div>
				
			</div>
		</div>
	</section>
	<!-- Process section end -->


	<!-- Fact section -->
	<section class="fact-section gradient-bg">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-3">
					<div class="fact">
						<h2>60</h2>
						<p>PM <br> 10</p>
						<i class="ti-basketball"></i>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-3">
					<div class="fact">
						<h2>12</h2>
						<p>Comunas</p>
						<i class="ti-panel"></i>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-3">
					<div class="fact">
						<h2>2011</h2>
						<p>Inicio</p>
						<i class="ti-stats-up"></i>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-3">
					<div class="fact">
						<h2>2018</h2>
						<p>Final </p>
						<i class="ti-user"></i>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section class="about-section spad">
		<div class="container">
			
			<img src="images/1atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/2atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/3atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/4atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/5atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/6atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/7atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
			<img src="images/8atm.jpeg" class="img-fluid pb-4" alt="Responsive image">
		</div>
	</section>
	<!-- Fact section end -->


	<!-- Team section -->
	
	<!-- Team section -->


	<!-- Review section -->
	<section class="about-section spad" id="estadistica">
		<div class="container">
			<h2>Índice de Pasto</h2>
			<br>
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  <!-- Indicators -->
			  <ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>
		  
			  <!-- Wrapper for slides -->
			  <div class="carousel-inner">
		  
				<div class="item active">
					<h2>Año 2011</h2>

					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							PM10
						</div>
						<div class="col-md-8">
							<canvas id="myChart" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							TEMPERATURA Celsius (°C) 
						</div>
						<div class="col-md-8">
							<canvas id="myChart1" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							HUMEDAD
						</div>
						<div class="col-md-8">
							<canvas id="myChart2" width="200px" height="40px"></canvas>
						</div>
					</div>
					
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							MONTO V
						</div>
						<div class="col-md-8">
							<canvas id="myChart4" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							VELOCIDAD VIENTO
						</div>
						<div class="col-md-8">
							<canvas id="myChart5" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							TEM/HUM
						</div>
						<div class="col-md-8">
							<canvas id="myChart6" width="200px" height="40px"></canvas>
						</div>
					</div>
				
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							PRESION ATM
						</div>
						<div class="col-md-8">
							<canvas id="myChart8" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							LLUVIA
						</div>
						<div class="col-md-8">
							<canvas id="myChart9" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							INTENSIDAD LLUVIA
						</div>
						<div class="col-md-8">
							<canvas id="myChart10" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							RADIACION SOLAR
						</div>
						<div class="col-md-8">
							<canvas id="myChart11" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							RADIACION ACUMULADA
						</div>
						<div class="col-md-8">
							<canvas id="myChart12" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							MAX RADIACION
						</div>
						<div class="col-md-8">
							<canvas id="myChart13" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							UV INTENSIDAD
						</div>
						<div class="col-md-8">
							<canvas id="myChart14" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							MAX UV
						</div>
						<div class="col-md-8">
							<canvas id="myChart15" width="200px" height="40px"></canvas>
						</div>
					</div>
					<div class="row align-items-center">
						<div class="col-md-2 text-center">
							DENSIDAD AIRE
						</div>
						<div class="col-md-8">
							<canvas id="myChart16" width="200px" height="40px"></canvas>
						</div>
					</div>
					
				  
				</div>
		  
				<!--
				<div class="item">
					
				  <div class="carousel-caption">
					<h3>Chicago</h3>
					<p>Thank you, Chicago!</p>
				  </div>
				</div>
			  -->
				
			
			  </div>
		  
			  <!-- Left and right controls -->
			  <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="">
				<span class="glyphicon glyphicon-chevron-left"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#myCarousel" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right"></span>
				<span class="sr-only">Next</span>
			  </a>
			</div>
		  </div>
	</section>
	<!-- Review section end -->


	<!-- Newsletter section -->
	<section class="newsletter-section gradient-bg" id="datos">
		<div class="container text-white">
			<div class="row">
				<div class="col-lg-7 newsletter-text">
					<h2>Datos Historicos</h2>
				</div>
				
			</div>
		</div>
	</section>
	<!-- Newsletter section end -->



	<!-- Blog section -->
	<section class="about-section spad">
		<div class="container">
			<h2>Datos Historicos</h2>  
			<div id="myCarousel1" class="carousel slide" data-ride="carousel">
			  <!-- Indicators -->
			  <ol class="carousel-indicators">
				<li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel1" data-slide-to="1"></li>
				<li data-target="#myCarousel1" data-slide-to="2"></li>
			  </ol>
		  
			  <!-- Wrapper for slides -->
			  <div class="carousel-inner">
					<?php  $contador=0?>
					@for ($anios = 2011; $anios <= 2016; $anios++)
					
					@if ($anios==2011)
						<div class="item active">
							<h3>{{ $anios}}</h3>
							<table class="table" style='font-size: 15px;'>
								<tr class="table-success">
									<td>Id</td>
									<td>FECHA</td>
									<td>PM10</td>
									<td>TEMP</td>
									<td>HUMEDAD</td>
									<td>DIR VIENTO</td>
									<td>Monto V</td>
									<td>Velocidad V</td>
									<td>Tem/Hum</td>	
									<td>Tem/Hum/Vient</td>
									<td>PRESION ATM</td>
									<td>LLUVIA</td>
									<td>Intens lluv</td>
									<td>RADIACION SOL</td>
									<td>Radiac acum</td>
									<td>Max Rad</td>
									<td>UV Intens</td>
									<td>Max UV</td>
									<td>DENSIDAD AIRE</td>
								</tr>
								
									@for ($i=0;$i<=11;$i++)
									<tr>
										@foreach( $d_his[$i] as $d)
											
											<td>
												{{$d}}
												
											</td>
											
											
										@endforeach
									</tr>
									@endfor
								
							</table>
						</div>
					
						
					@else
						<div class="item">
							<h3>{{ $anios}}</h3>
							<table class="table">
								<tr class="table-success">
									<td>ID</td>
									<td>FECHA</td>
									<td>PM10</td>
									<td>TEMP</td>
									<td>HUMEDAD</td>
									<td>DIR VIENTO</td>
									<td>Monto V</td>
									<td>Velocidad V</td>
									<td>Tem/Hum</td>	
									<td>Tem/Hum/Vient</td>
									<td>PRESION ATM</td>
									<td>LLUVIA</td>
									<td>Intens lluv</td>
									<td>RADIACION SOL</td>
									<td>Radiac acum</td>
									<td>Max Rad</td>
									<td>UV Intens</td>
									<td>Max UV</td>
									<td>DENSIDAD AIRE</td>
								</tr>

								@for ($i=0;$i<=11;$i++)
									<tr>
										@foreach( $d_his[$i] as $d)
											
											<td>
												{{$d}}
												
											</td>
											
											
										@endforeach
									</tr>
								@endfor

							</table>
						</div>
					
					@endif
					@endfor

					
		  
			  </div>
		  
			  <!-- Left and right controls -->
			  <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#myCarousel1" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right"></span>
				<span class="sr-only">Next</span>
			  </a>
			</div>
		</div>
	</section>
	<!-- Blog section end -->

	<section class="newsletter-section gradient-bg" id="datos">
		<div class="container text-white">
			<div class="row">
				<div class="col-lg-7 newsletter-text">
					<h2>Valores de Predicción</h2>
				</div>
			</div>
		</div>
	</section>


	<section class="about-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 offset-lg-12 about-text">
					<table class="table table-striped" style='font-size: 15px;'   >
						<thead>
						  <tr>
							<th scope="col">PM10</th>
							<th scope="col">HUMEDAD</th>
							<th scope="col">PRESION ATM</th>
							<th scope="col">INTENSIDAD LLUVIA</th>
							<th scope="col">RADIACIÓN SOLAR</th>
							<th scope="col">RADIACIÓN ACUM</th>
							<th scope="col">MAX RAD</th>
							<th scope="col">UV INTENSIDAD</th>
							<th scope="col">MAX UV</th>
						  </tr>
						</thead>
						<tbody>
							@foreach ($pre as $pres)
								<tr>
										
									<td>{{$pres->PM10}}</td>
									<td>{{$pres->HUMEDAD}}</td>
									<td>{{$pres->PRESION_ATM}}</td>
									<td>{{$pres->INTS_LLUV}}</td>
									<td>{{$pres->RADIACION_SOL}}</td>
									<td>{{$pres->RADIACION_ACUM}}</td>
									<td>{{$pres->MAX_RAD}}</td>
									<td>{{$pres->UV_INTES}}</td>
									<td>{{$pres->MAX_UV}}</td>
								</tr>
							@endforeach
						
				
						</tbody>
					  </table>
					  {{$pre->links()}}
				</div>
			</div>
			
		</div>
	</section>
	<!-- Footer section -->
	<footer class="footer-section">
		<div class="container">
			<div class="row spad">
				<div class="col-md-6 col-lg-3 footer-widget">
					<img src="img/logo.png" class="mb-4" alt="">
					<p>Atm contaminacion</p>
					<span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->


				</div>
				<div class="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 class="widget-title">Recursos</h5>
					<ul>
						<li><a href="#">Sisare</a></li>
						<li><a href="#">Siac</a></li>
						<li><a href="#">Min Ambiente</a></li>
						<li><a href="#">Ideam</a></li>
					
					</ul>
				</div>
				<div class="col-md-6 col-lg-2 offset-lg-1 footer-widget">
					<h5 class="widget-title"> Links</h5>
					<ul>
						<li><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
					<h5 class="widget-title">Redes Sociales</h5>
					<div class="social">
						<a href="" class="facebook"><i class="fa fa-facebook"></i></a>
						<a href="" class="google"><i class="fa fa-google-plus"></i></a>
						<a href="" class="instagram"><i class="fa fa-instagram"></i></a>
						<a href="" class="twitter"><i class="fa fa-twitter"></i></a>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="row">
					<div class="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
						<a href=""><img src="img/appstore.png" alt="" class="mr-2"></a>
						<a href=""><img src="img/playstore.png" alt=""></a>
					</div>
					<div class="col-lg-8 text-center text-lg-right">
						<ul class="footer-nav">
							<li><a href="">DPA</a></li>
							<li><a href="">Terms of Use</a></li>
							<li><a href="">Privacy Policy </a></li>
							<li><a href="">support@company.com</a></li>
							<li><a href="">(123) 456-7890</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>


	<!--====== Javascripts & Jquery ======-->
	<script src="inicio/js/jquery-3.2.1.min.js"></script>
	<script src="inicio/js/owl.carousel.min.js"></script>
	<script src="inicio/js/main.js"></script>
	<script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
	<script src="cssdashboard/js/pages/maps.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"> </script>
	<script src="cssdashboard/js/pages/grafica.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script>
function toggleSidebar(id) {
        const elem = document.getElementById(id);
        // Add or remove the 'collapsed' CSS class from the sidebar element.
        // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
        const collapsed = elem.classList.toggle('collapsed');
        
		const padding = {};
        // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
      padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
     
		
		// Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
        map.easeTo({
            padding: padding,
            duration: 1000 // In ms. This matches the CSS transition duration property.
        });
    }

let registro="";
	function informacions(a){
		$(".colin").removeClass(registro);
		switch (a) {
			case 1:
			
			registro="bg-success"
			
			$(".colin").addClass("bg-success");
			$(".info").text("La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.IQA 0-50")
			$(".escala").text("Bueno")
				toggleSidebar("left")
			break;
			case 2:

			registro="bg-warning"
			$(".colin").addClass("bg-warning");
			$(".info").text("La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber un problema de salud moderado para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire.IQA 50 - 100")
			$(".escala").text("Moderado")
				toggleSidebar("left")
			
			break;
			case 3:
			registro="bg-orange"
			$(".colin").addClass("bg-orange");
			$(".info").text("Los miembros de grupos sensibles pueden experimentar efectos en la salud. El público en general no es probable que se vea afectado. IQA 100 - 150")
			$(".escala").text("No es saludable para grupos que son sensibles.")
				toggleSidebar("left")
			break;
			case 4:
			registro="bg-pink"
			$(".colin").addClass("bg-pink");
			$(".info").text("Todos pueden comenzar a experimentar efectos en la salud; los miembros de grupos sensibles pueden experimentar efectos de salud más graves IQA 150 - 200")
			$(".escala").text("Insalubre")
				toggleSidebar("left")
			break;
			case 5:
			registro="bg-purple"
			$(".colin").addClass("bg-purple");
			
			$(".info").text("Advertencias sanitarias de condiciones de emergencia. Existe la posibilidad que la población entera se vea afectada. IQA 200 - 300")
			$(".escala").text("Muy poco saludable")
				toggleSidebar("left")
			break;
			case 6:
			registro="bg-vinot"
			$(".colin").addClass("bg-vinot");
			$(".info").text("Alerta de salud: todos pueden experimentar efectos de salud más graves. IQA 300 - 500")
			$(".escala").text("Peligroso")
				toggleSidebar("left")
			break;
		
			
		}
		
	}
	</script>
	
	
	<script> 
   
     map.on('load', ()=>{
         comuna1({{$datos[1]}});
         comuna2({{$datos[2]}});
         comuna3({{$datos[3]}});
         comuna4({{$datos[4]}});
         comuna5({{$datos[5]}});
         comuna6({{$datos[6]}});
         comuna7({{$datos[7]}});
         comuna8({{$datos[8]}});
         comuna9({{$datos[9]}});
         comuna10({{$datos[10]}});
         comuna11({{$datos[11]}});
         comuna12({{$datos[12]}});
     } ); 
     </script>
</body>
</html>
