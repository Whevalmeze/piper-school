import Link from "next/link"
import { Button } from "../ui/button"

const SignInNav = () => {
  return (
    <nav className="p-5 flex justify-between container">
        <span className="font-bold text-2xl tracking-tighter"><Link href="/">Piper School</Link></span>
        <div className="flex gap-2">
            <Button>Create a Free Account</Button>
            <Button>Login</Button>
        </div>
    </nav>
    )
}

export default SignInNav