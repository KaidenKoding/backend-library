import {
Body, Controller, Delete, Get, Param,
ParseIntPipe, Post, Put, UseGuards
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Books')
@ApiBearerAuth()

@Controller('books')
export class BooksController {
constructor(private readonly booksService:BooksService) {}
@UseGuards (JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)

@Post()
@ApiOperation({ summary: 'Menambahkan buku (ADMIN only)' })
create(@Body() body: any) {
return body;
}

@Get()
@ApiOperation({ summary: 'Menampilkan seluruh data buku' })
findAll() {
return [];
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
return this.booksService.findOne(id);
}
@Put(':id')
update(@Param('id', ParseIntPipe) id: number, @Body()
dto: UpdateBookDto) {
return this.booksService.update(id, dto);
}
@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
return this.booksService.remove(id);
}
}