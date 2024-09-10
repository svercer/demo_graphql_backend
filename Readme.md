# Project Install

### Clone the repo
Use Node version 18+
### Run command ```npm install```

### As project uses prismajs orm need to generate the prisma
```npx prisma generate```

Then run migrations

```npx prisma migrate dev```

Create account in ```supabase.io``` there is a free tier

make a project, and press on connect in the right corner and you will get to select what stack u use to connect
select nodejs anc copy variables into env file 
Varibles are 
```DATABASE_URL``` and ```DIRECT_URL``` used for migrations


## RUN
```npm start```

Project should start on port 4000

