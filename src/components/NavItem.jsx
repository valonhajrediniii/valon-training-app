export default function NavItem({NavName}){
    return (
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">{NavName}</a>
      </li>
    );
}