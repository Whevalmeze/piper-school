import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import SignInNav from "@/components/SignInNav"
import Image from "next/image"

const Home = () => {
  return (
    <main className="min-h-full flex flex-col">
        <SignInNav />
        <Hero />
        <section className="w-full p-3 ">
         <Image src="/das.png" className="border rounded-2xl m-auto" width={1280} height={840} alt="Piper School Demo Dashboard " />
        </section> 
        <Footer />
    </main>
    )
}

export default Home
