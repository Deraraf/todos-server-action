"use server"

import { revalidatePath } from "next/cache"
import prisma from "./db"

export async function Create(prevState:any, formData:FormData) {
    "use server"
   try {
    const input = formData.get('input') as string
    await prisma.todo.create({
      data:{
        input:input
      }
    })
    revalidatePath('/better')
   } catch (error) {
    return "faild to create "
   }
  }



 export async function edit(formData:FormData){
    "use server"
    const input = formData.get('input') as string
    const inputId = formData.get('inputid') as string
    await prisma.todo.update({
      where:{
        id:inputId
      },
      data:{
        input:input
      }
    })
    revalidatePath('/better')

  }
 export async function deleteItems(formData:FormData) {
  "use server"
  const inputId = formData.get('inputid') as string

   await prisma.todo.delete({
    where:{
      id:inputId
    }
   })
   revalidatePath('/better')
 }