import db from '../../../lib/db'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const userMutationsResolvers = {
  createUser: async (_: any, args: { email: string, name: string }) => {
   return db.user.create({
      data: args
    })
  },

  updateUser: async (_: any, args: { id: number,  name: string, email: string, }) => {
    return  db.user.update({
      data: {
        name: args.name,
        email: args.email,
      },
      where: { id: Number(args.id) }
    })
  },
  
  deleteUser: async (_: any, args: { id: number }) => {
    try {
      await db.user.delete({
        where: { id: Number(args.id) }
      })
      return { message: "Successfully deleted", success: true }
    } catch (error: any) {
      if (error instanceof PrismaClientKnownRequestError) {
        return { message: error?.meta?.cause, success: false }
      }
      return { message: "Something went wrong", success: false }
    }
  }
} 