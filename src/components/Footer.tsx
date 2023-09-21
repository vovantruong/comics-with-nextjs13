import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"

const Footer = ({ }) => {
    return (
        <footer className='w-full h-20 bg-[#f6f3ee] mt-[100px] py-2 justify-center flex items-center flex-col gap-2 border-t'>
            <div className="flex items-center gap-3 flex-wrap justify-center">
                <p>Copyrights &copy; {new Date().getFullYear()} by Gavin Dev</p>
                <div>|</div>
                <Link href="https://github.com/vovantruong/comics-with-nextjs13" className="flex items-center hover:underline" target="_blank">
                    <AiFillGithub /> <span className="ml-2">vovantruong</span>
                </Link>
            </div>
        </footer>
    )
}
export default Footer