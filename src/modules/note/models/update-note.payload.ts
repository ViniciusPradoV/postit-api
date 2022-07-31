import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";

 
 export class UpdateNotePayload{

    @ApiPropertyOptional()
    @IsOptional()
    @IsDefined({message:'O título da nota deve ser definido'})
    @IsString({message: 'O título da nota deve ser uma string'})
    @IsNotEmpty({message: 'O título da nota não pode ser vazio'})
    @MaxLength(150, {message: 'O título da nota não pode ultrapassar 150 caracteres'})
    public title?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDefined({message: 'O corpo da nota deve ser definido'})
    @IsString({message: 'O corpo da nota deve ser uma string'})
    @IsNotEmpty({message: 'O corpo da nota não pode ser vazio'})
    public annotation?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean({message: 'A visibilidade da nota deve ser uma booleana'})
    public isPublic?: boolean
 }