import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import SignInNav from "@/components/SignInNav"

const Home = () => {
  return (
    <main className="min-h-full flex flex-col">
        <SignInNav />
        <Hero />
        <Footer />
    </main>
    )
}

export default Home
