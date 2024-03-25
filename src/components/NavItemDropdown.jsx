import DropdownItem from "./DropdownItem";

export default function NavItemDropdown(){
    return (
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul class="dropdown-menu">
          <DropdownItem DropdownItemName={'Action'}/>
          <DropdownItem DropdownItemName={'Another Action'}/>
          <li><hr class="dropdown-divider" /></li>
          <DropdownItem DropdownItemName={'Something else here'}/>
        </ul>
      </li>
    );
}