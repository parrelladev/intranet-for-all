import { Controller, Get, Module } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRoot(): string {
    return "API pronta";
  }
}

@Module({ controllers: [AppController] })
export class AppModule {}
