import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div>Header</div>
          <Link href="/">
            <a>
                Go home
              </a> 
          </Link>
          <nav>
              <ul>
                  <li>
                    <Link href="/pictures">
                    <a>
                        Pictures page
                        </a>        
                    </Link>     
                  </li>
              </ul>
          </nav>
        </header>
    )
}
