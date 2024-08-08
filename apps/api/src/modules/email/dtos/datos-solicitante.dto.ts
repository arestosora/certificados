import { IsString, IsNotEmpty, IsEmail, IsObject } from 'class-validator';

export class CreateDatosSolicitanteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  primerApellido: string;

  @IsNotEmpty()
  @IsString()
  segundoApellido: string;

  @IsNotEmpty()
  @IsObject()
  genero: { label: string; value: string };

  @IsNotEmpty()
  @IsObject()
  paisEmisor: { label: string; value: string };

  @IsNotEmpty()
  @IsString()
  hijoDe: string;

  @IsNotEmpty()
  @IsString()
  yDe: string;

  @IsNotEmpty()
  @IsObject()
  diaNacimiento: { label: number; value: number };

  @IsNotEmpty()
  @IsObject()
  mesNacimiento: { label: string; value: number };

  @IsNotEmpty()
  @IsObject()
  anoNacimiento: { label: number; value: number };

  @IsNotEmpty()
  @IsObject()
  paisNacimiento: { label: string; value: string };

  @IsNotEmpty()
  @IsString()
  lugarNacimiento: string;

  @IsNotEmpty()
  @IsObject()
  tipoIdentificacion: { label: string; value: string };

  @IsNotEmpty()
  @IsString()
  numeroIdentificacion: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEmail()
  confirmEmail: string;
}
