// noinspection TypeScriptUnresolvedReference

import bcrypt from 'bcryptjs'
import db from "../../../lib/db";
import jwt from 'jsonwebtoken'

export const authenticationMutations = {
    login: async (_: any, args: { email: string, password: string }, context: any) => {
        const user = await db.user.findUnique({
            where: {
                email: args.email
            }
        });

        if (!user) {
            throw new Error('Invalid Credentials')
        }

        const valid = await bcrypt.compare(args.password, user.password);
        if (!valid) {
            throw new Error('Invalid Credentials')
        }

        if (!process?.env?.JWT_SECRET) {
            throw new Error('Something went wrong, please try again later');
        }

        const token = jwt.sign({userId: user.id}, process?.env?.JWT_SECRET ?? null, {expiresIn: '1h'});

        return {
            token,
            user,
        };
    },


    register: async (_: any, args: { name: string, email: string, password: string }) => {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const user = await db.user.findUnique({
            where: {
                email: args.email
            }
        })

        if (user) {
            throw new Error('User already exist')
        }

        const createdUser = await db.user.create({
            data: {
                email: args.email,
                password: hashedPassword,
                name: args.name
            }
        })

        if (createdUser) {
            const token = jwt.sign({userId: createdUser?.id}, 'process.env.JWT_SECRET', {expiresIn: '1h'});
            return {
                token,
                user: createdUser,
            };
        }


    }
}
