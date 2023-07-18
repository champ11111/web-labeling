import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto'; // Create DTO classes for login and register requests
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const accessToken = await this.authService.registerUser(registerDto);
      return accessToken;
    } catch (error) {
      throw new BadRequestException('Failed to register user');
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const accessToken = await this.authService.loginUser(
      loginDto.username,
      loginDto.password,
    );
    return accessToken;
  }
}
