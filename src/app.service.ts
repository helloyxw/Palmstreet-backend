import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getImages() {
    const images = Array.from({ length: 9 }, (_, index) => ({
      id: index + 1,
      imageUrl: `https://picsum.photos/400?random=${index}`,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 100)
    }));
    return images;
  }
}
