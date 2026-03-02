import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({ imports: 
    [ ConfigModule.forRoot({ isGlobal: true, envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env', }), 
        BooksModule, MembersModule, PrismaModule, AuthModule ],
    controllers: [AppController],
    providers: [AppService], 
}) 

export class AppModule {}
