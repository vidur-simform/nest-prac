import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ForbiddenException, UseFilters,  UsePipes, PipeTransform, ArgumentMetadata, BadRequestException, ParseIntPipe, DefaultValuePipe, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto,createCatSchema } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
// import { HttpExceptionFilter } from 'src/http-exception.filter';
import { JoiValidationPipe } from './cats.joivalidator';
// class ParseIntPipe implements PipeTransform<string, number> {
//   transform(value: string, metadata: ArgumentMetadata): number {
//     const val = parseInt(value, 10);
//     if (isNaN(val)) {
//       throw new BadRequestException('Validation failed');
//     }
//     return val;
//   }
// }
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('z')
  findAll() {
    return this.catsService.findAll();
  }

  @Get()
  findOne(@Query('id',new DefaultValuePipe(0),new ParseIntPipe()) id: string) {



  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
