import { InputText } from 'primereact/inputtext'

export function FieldSearch() {
  return (
    <span className='p-input-icon-right col-12 m-0 p-0'>
      <i className='pi pi-search' style={{ color: 'red' }} />
      <InputText
        className='p-inputtext-sm col-12 p-2 px-3'
        style={{
          boxShadow: 'none',
          backgroundColor: 'var(--light-gray)',
          border: '0px',
          borderRadius: '25px'
        }}
        placeholder='Pesquiser por nome ou número'
      />
    </span>
  )
}
