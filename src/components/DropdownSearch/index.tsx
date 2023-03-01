import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'

export function DropdownSearch() {
  const [selectedCity, setSelectedCity] = useState({
    name: 'New York',
    code: 'NY',
  })
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]
  return (
    <>
      Ordenar por
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel='name'
        className='w-full md:w-14rem ml-2 p-0 p-inputtext-sm m-0'
        style={{
          borderColor: 'red',
          borderRadius: '25px',
          boxShadow: 'none',
          color: 'red !important',
          padding: '0px',
          margin: '0px',
        }}
      />
    </>
  )
}
