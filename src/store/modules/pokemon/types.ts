export interface ISprites {
  normal: string,
  large: string,
  animated: string
}

export interface IPokemon {
  national_number: string
  evolution: any
  sprites: ISprites
  name: string
  type: string[]
  total: number
  hp: number
  attack: number
  defense: number
  sp_atk: number
  sp_def: number
  speed: number
}

export interface IPokemonList {
  error: boolean
  loading: boolean
  allTypes: string[]
  results: IPokemon[]
}

