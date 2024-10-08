import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { UploadDto } from './dto/upload.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Cloudinary")
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  
  @Post("upload-image")
  async uploadImage(@Body() dto:UploadDto ) {
    return await this.cloudinaryService.uploadImage(dto);
  }

  @Post("upload-image-with-effect")
  async uploadImageWithEffect(@Body() dto:UploadDto ) {
    return await this.cloudinaryService.uploadImageWithEffect(dto);
  }

}
