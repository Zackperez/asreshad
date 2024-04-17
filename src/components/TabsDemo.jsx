import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Button } from "@/components/ui/button"

import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import significados from "../data/significados.json";
import axios from 'axios';


export function TabsDemo() {

    const { register, handleSubmit } = useForm();
    const [ resultado, setResultado ] = useState("haz la prueba");

    const onSubmit = (data) => {
        realizarPrueba(data)
    }

    async function realizarPrueba(data) {
        try {
          const res = await getData(data)
          setResultado(res.data.resultado_prueba)

        } catch (error) {
            console.log(error)
        }
      }
    
      async function getData(data) {
    
        const dataEnviar = {
          "age": data.age,
          "menopause": data.menopause,
          "tumorSize": data.tumorSize,
          "invNodes": data.invNodes,
          "nodeCaps": data.nodeCaps,
          "degMalig": data.degMalig,
          "breast": data.breast,
          "breastQuead": data.breastQuead,
          "irradiat": data.irradiat
        }
        console.log(dataEnviar)
    
        const res = axios({
          method: "POST",
          url: " http://127.0.0.1:5700/enviar-datos-prueba/",
          data: dataEnviar
        });
        return res
    
      }

    return (
        <div className="sm:flex flex-col justify-center items-center h-screen p-6">

            <Tabs defaultValue="account" className="sm:w-[900px] sm:h[900px]">

                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Información</TabsTrigger>
                    <TabsTrigger value="password">Prueba</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>¿Qué es el cancer de mama?</CardTitle>

                            <CardDescription>
                                El cáncer de mama es una enfermedad que se origina en las células de la mama. A medida que las células crecen y se dividen, pueden producir una masa o tumor en la mama, que a veces se puede sentir como un bulto o protuberancia. Si estas células se extienden fuera de la mama hacia otros tejidos, como los ganglios linfáticos, se considera que el cáncer se ha diseminado o metastatizado.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>

                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ingresa los datos</CardTitle>
                            <CardDescription>
                                Ingresa los datos y al final de todo, veras el resultado de la prueba.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-center space-y-2">
                            <form onSubmit={handleSubmit(onSubmit)} className="grid sm:flex sm:flex-col">
                                <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
                                    {Object.entries(significados).map(([key, value]) => (
                                        <div key={key} className="">
                                            <label className="block text-gray-700 text-xm mb-2 font-semibold" htmlFor={key}>
                                                {key.toUpperCase()}
                                            </label>
                                            <div className="relative">
                                                <select
                                                    {...register(`${key}`)}
                                                    name={key}
                                                    className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full">
                                                    <option>Selecciona una opcion</option>
                                                    {Object.entries(value).map(([clave, valor]) => (
                                                        <option key={clave} value={valor}>{clave}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 mb-5 text-center">
                                    <Button type='submit'>Enviar</Button>
                                </div>
                            </form>
                            <div className="border">
                            </div>
                            <div className="text-center mb-5">
                                <p className="text-slate-700 text-xl font-semibold">Resultado: {resultado}</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
