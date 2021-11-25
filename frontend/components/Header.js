import Link from "next/link"
import ImagesContext from '@/context/ImagesContext'
import NumberPictures from '@/components/NumberPictures'

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
                  <li>
                    <NumberPictures />
                  </li>
              </ul>
          </nav>
        </header>
    )
}
