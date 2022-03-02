<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuarios extends Authenticatable
{
    use HasFactory,Notifiable;
    protected $table='usuarios';
    protected $primatyKey='id';

    protected $fillable=[
        "Cedula","Nombre","Apellido","Email","Password"
    ];
}
