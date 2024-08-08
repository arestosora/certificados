export interface IDatosGenerales {
    idioma: { label: string; value: string };
    persona: { label: string; value: string };
  }
  
  export interface IDatosSolicitante {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    genero: { label: string; value: string };
    paisEmisor: { label: string; value: string };
    hijoDe: string;
    yDe: string;
    diaNacimiento: { label: number; value: number };
    mesNacimiento: { label: string; value: number };
    anoNacimiento: { label: number; value: number };
    paisNacimiento: { label: string; value: string };
    lugarNacimiento: string;
    tipoIdentificacion: { label: string; value: string };
    numeroIdentificacion: string;
    email: string;
    confirmEmail: string;
  }
  
  export interface IDatosCertificado {
    tipoCertificado: { label: string; value: string };
    numeroCopias: { label: string; value: string };
    destinatario: { label: string; value: string };
    motivo: { label: string; value: string };
    observaciones: string;
    idiomaAnexo: { label: string; value: string };
  }
  
  export interface IDatosNotificacion {
    tipoVia: { label: string; value: string };
    nombreVia: string;
    numeroVia: string;
    portal: string;
    escalera: string;
    piso: string;
    puerta: string;
    bloque: string;
    telefonoContacto: string;
    codigoPostal: string;
    paisDomicilio: { label: string; value: string };
    paisInscripcion: { label: string; value: string };
    registroCivil: string;
    tomo: string;
    pagina: string;
    aceptoPolitica: boolean;
    opcionPrioritaria: boolean;
    precioTotal: number;
  }
  