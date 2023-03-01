import { useEffect } from 'react'
import { ContainerHome } from './styles'
import { Search } from '../../components/Search'
import { useDispatch, useSelector } from 'react-redux'
import { listPokemonRequest } from '../../store/modules/pokemon/actions'
import { IState } from '../../store'
import { IPokemonList } from '../../store/modules/pokemon/types'
import { FilterBar } from '../../components/FilterBar'
import { Loading } from '../../components/Loading'
import { Panel } from '../../components/Panel'

export function Home() {
  const dispatch = useDispatch()
  const pokemon = useSelector<IState, IPokemonList>((state) => state.pokemon)

  useEffect(() => {
    dispatch(listPokemonRequest())
  }, [dispatch])

  return (
    <ContainerHome>
      {pokemon.loading && <Loading />}
      <div className='col-8'>
        <Search />
        <div className='flex col-12 m-0 p-0 gap-8'>
          <div className='col-2 m-0 p-0'>
            <FilterBar allTypes={pokemon.allTypes} />
          </div>
          <div className='col-10 m-0 p-0'>
            <Panel pokemon={pokemon} />
          </div>
        </div>
      </div>
    </ContainerHome>
  )
}
                  