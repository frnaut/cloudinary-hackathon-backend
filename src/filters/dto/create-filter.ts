import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive } from "class-validator";


export class CreateFilterDto{
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    name: string;
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    description: string;
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    prompt: string;
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    example: string;
    @ApiProperty({ type: Number, required: true })
    @IsPositive()
    width: number;
    @ApiProperty({ type: Number, required: true })
    @IsPositive()
    height: number;
    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    public_id: string
}