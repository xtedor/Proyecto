<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;
use Redirect;
class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data=$request->all();
        $Cedula=$data["Cedula"];
        $Nombre=$data["Nombre"];
        $Apellido=$data["Apellido"];
        $Email=$data["Email"];
        $Password=md5($data["contraseña"]);
        
       
            $crear_usuario=new Usuarios;
            $crear_usuario->Cedula=$Cedula;
            $crear_usuario->Nombre=$Nombre;
            $crear_usuario->Apellido=$Apellido;
            $crear_usuario->Email=$Email;
            $crear_usuario->Password=$Password;
            $crear_usuario->save();
          
            return view('index')->with('msg', 'Registro Exitoso');
    }
    public function Login(Request $request){
        $data=$request->all();
        
        $email=$data["Email"];
        $Password=md5($data["contraseña"]);
        
        $usuarios=DB::table('usuarios')
        ->select()
        ->where('usuarios.Email','=',$email)
        ->get()->first();
        $satos=DB::table('comunas')
                ->select()
                ->get(); 

        if($usuarios){
            if($usuarios->Password==$Password){
                session()->put('id', $usuarios->id);
                session()->put('usernamecomplet', $usuarios->Nombre." ".$usuarios->Apellido);
                return view('dash/dashboard',compact("satos"));
            }else{
                return back()->with('msgerror', 'La Contraseña Es Incorrecta');
            }
           
        }else{
            return back()->with('msgerror', 'El Correo Es Incorrecto');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $id=session("id");
        $usuario=Usuarios::findOrFail($id);
        //return response(["data"=>$usuario]);
        return view('dash/pages-profile',compact("usuario"));
       
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function edit(Usuarios $usuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data=$request->all();
        $Cedula=$data["Cedula"];
        $Nombre=$data["Nombre"];
        $Apellido=$data["Apellido"];
        $Email=$data["Email"];
        $Password=md5($data["contraseña"]);
        
        $actualcontraseña=md5($data["contraseña_actual"]);
        $id=session("id");
        $usuario=Usuarios::findOrFail($id);
        if($usuario->Password==$actualcontraseña){
            Usuarios::find($id)
        ->update(
            [
                'Cedula'=> $Cedula,
                'Nombre' => $Nombre,
                'Apellido'=>$Apellido,
                'Email' => $Email,
                'Password'  => $Password
            ]
        );
            return back()->with('msg', 'Datos Actualizados Correctamente');
        }else{
            return back()->with('msgerror', 'La Contraseña Actual Es Incorrecta');
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        //session()->flush();
        return view("index");
    }

    public function logins(){
        return view("index");
    }
}
