import { DropdownSearch } from "../DropdownSearch";
import { FieldSearch } from "../FieldSearch";

export function Search() {
  return (
    <div className='boxFilter'>
      <div className='col-6 p-0'>
        <FieldSearch />
      </div>
      <div>
        <DropdownSearch />
      </div>
    </div>
  )
}