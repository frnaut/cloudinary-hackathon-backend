import { Injectable, Logger } from '@nestjs/common';
import {
  v2 as cloudinary,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';
import { UploadDto } from './dto/upload.dto';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(dto: UploadDto) {
    try {
      const resp: UploadApiResponse = await cloudinary.uploader.upload(
        dto.file,
        {
          access_mode: 'public',
          resource_type: 'image',
          // transformation:[
          //   {effect: "background_removal"}
          // ]
        },
      );

      return resp;
    } catch (e) {
      return e;
    }
  }

  // cloudinary.image("cld-sample.jpg", {transformation: [
  //   {effect: "gen_background_replace:prompt_replace the background with a black and white cartoon-style cemetery that is both spooky and funny the cemetery should have crooked tombstones some with humorous inscriptions and playful floating ghosts with friendly expressions the sky should be dark with a large exaggerated full moon and cartoonish bats flying around the overall mood should be eerie but amusing mixing Halloween-style elements with a touch of humor"},
  //   {effect: "saturation:50"},
  //   {effect: "grayscale"},
  //   {effect: "enhance"},
  //   {effect: "contrast:50"}
  //   ]})

  async uploadImageWithEffect(dto: UploadDto) {
    try {
      const resp: UploadApiResponse = await cloudinary.uploader.upload( dto.file );

      const urlWithFilters = cloudinary.url(resp?.public_id, {
        transformation: [
          { height: 300, width: 300, crop: 'scale' },

          {
            effect:
              'gen_background_replace:prompt_replace the background cartoon-style cemetery that is both spooky and funny the cemetery should have crooked tombstones some with humorous inscriptions and playful floating ghosts with friendly expressions the sky should be dark with a large exaggerated full moon and cartoonish bats flying around the overall mood should be eerie but amusing mixing Halloween-style elements with a touch of humor',
          },
          { effect: 'enhance' },
          {
            overlay: 't9iwtduc7mzpwwlwi4hx',
            width: '1.0',
            gravity: 'center',
            flags: 'relative',
          },
        ],
      });
     
      return urlWithFilters;
    } catch (e) {
      return e;
    }
  }
}
