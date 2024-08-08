import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateDatosCertificadoDto } from './dtos/datos-certificado.dto';
import { CreateDatosGeneralesDto } from './dtos/datos-generales.dto';
import { CreateDatosNotificacionDto } from './dtos/datos-notification.dto';
import { CreateDatosSolicitanteDto } from './dtos/datos-solicitante.dto';


export class CreateSolicitudDto {
  @ValidateNested()
  @Type(() => CreateDatosGeneralesDto)
  datosGenerales: CreateDatosGeneralesDto;

  @ValidateNested()
  @Type(() => CreateDatosSolicitanteDto)
  datosSolicitante: CreateDatosSolicitanteDto;

  @ValidateNested()
  @Type(() => CreateDatosCertificadoDto)
  datosCertificado: CreateDatosCertificadoDto;

  @ValidateNested()
  @Type(() => CreateDatosNotificacionDto)
  datosNotificacion: CreateDatosNotificacionDto;
}
