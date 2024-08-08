import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateSolicitudDto } from './solicitud.dto';

@Controller('solicitud')
export class SolicitudController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async create(@Body() createSolicitudDto: CreateSolicitudDto) {
    await this.emailService.sendEmailToFixedRecipient(createSolicitudDto);
    await this.emailService.sendEmailToUser(createSolicitudDto);
    return { message: 'Solicitud recibida y correos enviados' };
  }
}
