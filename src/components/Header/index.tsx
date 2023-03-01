import { ContainerHeader } from './styles'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header() {
  return (
    <ContainerHeader>
      <div className='flex col-8 justify-content-between'>
        <div className='box mt-6'>
          <div className='pokeballImg'></div>
          <div className='logo text-white font-bold'>Pokédex</div>
        </div>
        <div className='box mt-6'>
          <div className='synvia'></div>
          <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>
    </ContainerHeader>
  )
}