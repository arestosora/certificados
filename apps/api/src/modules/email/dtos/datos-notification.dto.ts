import { IsString, IsNotEmpty, IsObject, IsBoolean, IsNumber } from 'class-validator';

export class CreateDatosNotificacionDto {
  @IsNotEmpty()
  @IsObject()
  tipoVia: { label: string; value: string };

  @IsNotEmpty()
  @IsString()
  nombreVia: string;

  @IsNotEmpty()
  @IsString()
  numeroVia: string;

  @IsString()
  portal: string;

  @IsString()
  escalera: string;

  @IsString()
  piso: string;

  @IsString()
  puerta: string;

  @IsString()
  bloque: string;

  @IsNotEmpty()
  @IsString()
  telefonoContacto: string;

  @IsNotEmpty()
  @IsString()
  codigoPostal: string;

  @IsNotEmpty()
  @IsObject()
  paisDomicilio: { label: string; value: string };

  @IsNotEmpty()
  @IsObject()
  paisInscripcion: { label: string; value: string };

  @IsNotEmpty()
  @IsObject()
  registroCivil: string

  @IsNotEmpty()
  @IsString()
  tomo: string;

  @IsNotEmpty()
  @IsString()
  pagina: string;

  @IsNotEmpty()
  @IsBoolean()
  aceptoPolitica: boolean;

  @IsNotEmpty()
  @IsBoolean()
  opcionPrioritaria: boolean;

  @IsNotEmpty()
  @IsNumber()
  precioTotal: number;
}
