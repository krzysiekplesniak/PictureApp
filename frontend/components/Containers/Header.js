import Link from "next/link"
import NumberPictures from '@/components/Pictures/NumberPictures'

export default function Header() {
    
    return (
        <header>
          <div>
            <Link href="/">
                <a>
                    Bejamas
                </a> 
            </Link>
          </div>
          <nav>
              <ul>
                  <li>
                    <Link href="/pictures">
                        <a>
                            Your checkout
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
