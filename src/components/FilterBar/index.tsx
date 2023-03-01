import { useState } from 'react'
import { ToggleButtonFilter } from '../../components/ToggleButtonFilter'
import { InputSwitch } from 'primereact/inputswitch'

interface IProps {
  allTypes: string[]
}

export function FilterBar({ allTypes }: IProps) {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <>
      <div className='mb-4'>
        <p className='mb-2'>Filtrar por Tipo</p>
        {allTypes.map((type, index) => (
          <ToggleButtonFilter key={index} label={type} />
        ))}
      </div>
      <div className='my-2'>
        <p>Filtrar Favoritos</p>
        <InputSwitch checked={checked} onChange={() => setChecked(!checked)} />
      </div>
    </>
  )
}
