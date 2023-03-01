import { ToggleButton } from 'primereact/togglebutton'
import { useState } from 'react'

interface IProps {
  label: string
}

export function ToggleButtonFilter({label}: IProps) {
  const [checked, setChecked] = useState(false)
  return (
    <ToggleButton
      onLabel={label}
      offLabel={label}
      checked={checked}
      onChange={(e) => setChecked(e.value)}
      className={checked ? 'checked m-1' : 'm-1'}
    />
  )
}
