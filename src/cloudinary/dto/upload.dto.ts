import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UploadDto{
    
    @ApiProperty()
    @IsNotEmpty()
    file: string;
    
}