import Link from "next/link"

export default function Footer() {
    return (
        <footer>
            <p>Copyrigt &copy; PictureApp 2021</p>
            <p>
                <Link href="/about">About this Project</Link>
            </p>
              
        </footer>
    )
}
