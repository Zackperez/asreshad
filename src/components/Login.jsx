
import React from 'react'
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function InputField() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="grid w-screen items-center m-auto max-w-screen-sm h-screen md:hidden">
                <div className="flex flex-col gap-5 p-6">
                    <div className='grid text-center gap-1'>
                        <h1 className='text-2xl font-bold'>Inicio sesión</h1>
                        <p className='text-slate-400'>Ingresa tus datos para iniciar sesión</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-5">
                        <Label htmlFor="email">Correo:</Label>
                        <Input className="min-w-76" type="text" placeholder="Correo" {...register("usuario")} />
                        <div className='flex justify-between'>
                                <Label htmlFor="email">Contraseña:</Label>
                                <a className='underline text-sm font-semibold' href="">¿Olvidaste la contraseña?</a>
                            </div>
                        <Input className="min-w-76" type="text" placeholder="Contraseña" {...register("password")} />

                        <Button type='submit'>Iniciar sesión</Button>
                        <div className='text-center mt-5'>
                                <p className='text-sm font-semibold'>¿No tienes una cuenta? <a className='underline' href="">Registrate</a> </p>
                            </div>
                    </form>
                </div>
            </div>

            <div className="hidden md:grid h-screen">
                <div className="grid grid-cols-2 gap-5">

                    <div className='flex bg-zinc-900 py-6 px-10'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='text-white text-2xl font-bold'>Zack's company</h1>
                            </div>
                            <div>
                                <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore a illum corrupti facilis! Ducimus quos quam minima saepe a.</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col m-auto gap-y-5">
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold tracking-tight'>Inicia sesion</h3>
                            <p className='text-slate-500 text-lg'>Inicia sesion con tu correo y contraseña</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4 rounded-xl'>
                            <Label htmlFor="email">Correo:</Label>
                            <Input className="w-96" type="text" placeholder="Correo" {...register("usuario")} />
                            <div className='flex justify-between'>
                                <Label htmlFor="email">Contrasena:</Label>
                                <a className='underline text-sm font-semibold' href="">¿Olvidaste la contraseña?</a>
                            </div>
                            <Input className="w-96" type="text" placeholder="Contraseña" {...register("password")} />

                            <Button className="text-md" type='submit'>Iniciar sesion</Button>
                            <div className='text-center mt-5'>
                                <p className='text-sm font-semibold'>¿No tienes una cuenta? <a className='underline' href="">Registrate</a> </p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}
