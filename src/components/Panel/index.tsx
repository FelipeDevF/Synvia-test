import { ScrollPanel } from 'primereact/scrollpanel'
import { Tag } from 'primereact/tag'
import { IPokemonList } from '../../store/modules/pokemon/types'

interface IProps {
  pokemon: IPokemonList
}

export function Panel({pokemon}: IProps) {
  return (
    <ScrollPanel style={{ width: '100%', height: '500px' }}>
      <div className='flex flex-wrap justify-content-center col-12 gap-5'>
        {pokemon?.results.map((item, index) => (
          <div key={index} className='w-11rem mb-5'>
            <img src={item.sprites.large} height={100} alt={item.name} />
            <p className='txt-number'>Nº {item.national_number}</p>
            <p className='font-bold'>{item.name}</p>
            <div className='mt-2'>
              {item.type.map((type, index) => (
                <span key={index}>
                  <Tag className='mr-2' value={type}></Tag>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollPanel>
  )
}
