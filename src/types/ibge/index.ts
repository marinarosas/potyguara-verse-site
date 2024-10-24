export interface IRegiaoIbge {
    id: number
    nome: string
    sigla: string
  }
  
  export interface IEstadosIBGE {
    id: number
    nome: string
    sigla: string
    regiao: IRegiaoIbge
  }
  
  export interface IMesoRegiaoIbge {
    id: number
    nome: string
    UF: IEstadosIBGE
  }
  
  export interface IMicroRegiaoIbge {
    id: number
    nome: string
    mesorregiao: IMesoRegiaoIbge
  }
  
  export interface IMunicipioIbge {
    id: number
    nome: string
    microrregiao: IMicroRegiaoIbge
  }
  
  export interface IDistritoByEstado {
    id: number
    nome: string
    sigla: string
    municipio: IMunicipioIbge
  }
  