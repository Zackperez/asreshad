import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function InputField() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-sm gap-1.5 p-5 rounded-xl border bg-card text-card-foreground shadow">
            <Label htmlFor="email">Usuario</Label>
            <Input type="text" id="email" placeholder="Email" {...register("usuario")}/>

            <Label htmlFor="email">Contrase;a</Label>
            <Input type="password" id="email" placeholder="Email" />

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />

            <Label htmlFor="email">Telefono</Label>
            <Input type="phone" id="email" placeholder="Email" />

            <Label htmlFor="email">Pais</Label>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <div className='flex justify-end'>
                <Button type= 'submit'>Button</Button>
            </div>
        </form>
    )
}
