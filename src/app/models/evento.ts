

export class Evento {
  id: number;
  nome: string;
  data: string;
  local: string;
  hora: string;
  valor: string;
  website: string;
  organizacao: string;
  conteudo: string;
  imagem: string;
  programacao: [
    {
      id: number;
      palestra: string;
      plaestrante: string;
      instagram: string;
      github: string;
      twitter: string;
      facebook: string;
      slides: string;
      youtube: string;
      avatar: string;
      link: string;
      linkedin: string;
      site: string;
      work: string;
      descricao: string;
    }
  ]
  
}