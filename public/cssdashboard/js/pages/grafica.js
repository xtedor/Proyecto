
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'PM 10',
					data: [0,
                        27.71,
                        20.42,
                        12.71,
                        15.42,
                        18.75,
                        9.58,
                        0,
                        0,
                        15.89,
                        21.73,
                        0,
                        ],
					backgroundColor: [
					
						'rgba(40, 167, 69, 0.2)'
						
					],
					borderColor: [
						'rgba(40, 167, 69, 1)'
						
					],
					borderWidth: 1
				}]
			},
			options: {
				title: {
					text: 'Hello',
					display: true
				},
				scales: {
					y: {
						beginAtZero: true
					}
				},
				legend: {
					display: false
				}
			}
		});

        var ctx1 = document.getElementById('myChart1').getContext('2d');
		var myChart = new Chart(ctx1, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'Celsius (°C)  ',
					data: [0,
                        14.35,
                        13.9,
                        13.55,
                        15.77,
                        16.49,
                        14.53,
                        0,
                        0,
                        13.2,
                        13.13,
                        0
                        ],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)'
					
					],
					borderColor: [
						'rgba(255, 99, 132, 1)'
						
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				},
				legend: {
					display: false
				   }
			}
		});

        var ctx2 = document.getElementById('myChart2').getContext('2d');
		var myChart = new Chart(ctx2, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					
					data: [0,
                        86.3,
                        82.75,
                        90.41,
                        70.21,
                        74.26,
                        73.45,
                        0,
                        0,
                        81.25,
                        87.45,
                        0
                        ],
					backgroundColor: [
						
						'rgba(255, 206, 86, 0.2)'
						
					],
					borderColor: [
						
						'rgba(255, 206, 86, 1)'
					
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				},
				legend: {
					display: false
				   }
			}
		});

      

        var ctx4 = document.getElementById('myChart4').getContext('2d');
		var myChart = new Chart(ctx4, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'MONTO V',
					data: [0,
                        1.51,
                        2.07,
                        1.25,
                        0.17,
                        0.12,
                        0.11,
                        0,
                        0,
                        0.65,
                        0.58,
                        0
                        ],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)'
						
					],
					borderColor: [
						'rgba(255, 99, 132, 1)'
						
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx5 = document.getElementById('myChart5').getContext('2d');
		var myChart = new Chart(ctx5, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'VELOCIDAD V',
					data: [0,
                        4.43,
                        3.76,
                        4.08,
                        4.24,
                        3.16,
                        2.97,
                        0,
                        0,
                        3.76,
                        3.41,
                        0
                        ],
					backgroundColor: [
						
						'rgba(255, 206, 86, 0.2)'
						
					],
					borderColor: [
						
						'rgba(255, 206, 86, 1)'
					
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx6 = document.getElementById('myChart6').getContext('2d');
		var myChart = new Chart(ctx6, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'Tem/Hum',
					data: [0,
                        14.39,
                        13.83,
                        13.61,
                        15.43,
                        16.35,
                        14.25,
                        0,
                        0,
                        13.08,
                        13.17,
                        0
                        ],
					backgroundColor: [
						
						'rgba(75, 192, 192, 0.2)'
					],
					borderColor: [
						
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        

        var ctx8 = document.getElementById('myChart8').getContext('2d');
		var myChart = new Chart(ctx8, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'PRESION ATM',
					data: [0,
                        560.36,
                        563.85,
                        562.87,
                        562.32,
                        562.42,
                        563.2,
                        0,
                        0,
                        559.11,
                        559.68,
                        0
                        ],
						
					backgroundColor: [
						
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx9 = document.getElementById('myChart9').getContext('2d');
		var myChart = new Chart(ctx9, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'LLUVIA',
					data: [0,
                        0.1,
                        0.01,
                        0.05,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.01,
                        0.01,
                        0
                        ],
					
					backgroundColor: [
						
						'rgba(30, 35, 157, 0.2)'
					],
					borderColor: [
					
						'rgba(30, 35, 157, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx10 = document.getElementById('myChart10').getContext('2d');
		var myChart = new Chart(ctx10, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'INTENSIDAD LLUVIA',
					data: [0,
                        0.12,
                        0.12,
                        0.58,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.13,
                        0.12,
                        0
                        ],
					backgroundColor: [
					
						'rgba(30, 157, 97, 0.2)'
					],
					borderColor: [
						'rgba(30, 157, 97,1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx11 = document.getElementById('myChart11').getContext('2d');
		var myChart = new Chart(ctx11, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'RADIACION SOLAR',
					data: [0,
                        217.42,
                        183.08,
                        116.13,
                        236.69,
                        185.08,
                        163.5,
                        0,
                        0,
                        143.78,
                        192.68,
                        0
                        ],
					backgroundColor: [
						'rgba(147, 6, 245, 0.2)'
					
					],
					borderColor: [
						'rgba(147, 6, 245, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx12 = document.getElementById('myChart12').getContext('2d');
		var myChart = new Chart(ctx12, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'RADIACION ACUMULADA',
					data: [0,
                        3.12,
                        2.62,
                        1.66,
                        0.34,
                        0.27,
                        0.23,
                        0,
                        0,
                        1.03,
                        1.38,
                        0
                        ],
					backgroundColor: [
						'rgba(39, 0, 254, 0.2)'
					],
					borderColor: [
						'rgba(39, 0, 254, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx13 = document.getElementById('myChart13').getContext('2d');
		var myChart = new Chart(ctx13, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'MAX RADIACION',
					data: [0,
                        251.9,
                        217.23,
                        134.96,
                        237.15,
                        185.5,
                        163.96,
                        0,
                        0,
                        163.77,
                        207,
                        0
                        ],
					backgroundColor: [
						'rgba(0, 254, 162, 0.2)'
					],
					borderColor: [
						'rgba(0, 254, 162, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx14 = document.getElementById('myChart14').getContext('2d');
		var myChart = new Chart(ctx14, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'UV INTENSIDAD',
					data: [0,
                        2.63,
                        2.04,
                        1.35,
                        2.57,
                        1.85,
                        1.39,
                        0,
                        0,
                        1.94,
                        2.43,
                        0
                        ],
					backgroundColor: [
						'rgba(0, 158, 255, 0.2)'
					],
					borderColor: [
						'rgba(0, 158, 255, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx15 = document.getElementById('myChart15').getContext('2d');
		var myChart = new Chart(ctx15, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'MAX UV',
					data: [0,
                        3.01,
                        2.36,
                        1.5,
                        2.58,
                        1.86,
                        1.39,
                        0,
                        0,
                        2.19,
                        2.59,
                        0
                        ],
					backgroundColor: [
			
						'rgba(255, 0, 39, 0.2)'
					],
					borderColor: [
						'rgba(255, 0, 39, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

        var ctx16 = document.getElementById('myChart16').getContext('2d');
		var myChart = new Chart(ctx16, {
			type: 'bar',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
				datasets: [{
					label: 'DENSIDAD AIRE',
					data: [0,
                        0.8771,
                        0.8832,
                        0.88,
                        0.8737,
                        0.8706,
                        0.8838,
                        0,
                        0,
                        0.88,
                        0.88,
                        0
                        ],
					backgroundColor: [
						
						'rgba(0, 255, 247, 0.2)'
					],
					borderColor: [
						'rgba(0, 255, 247, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	