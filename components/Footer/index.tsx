
type Props = {}

const Footer = (props: Props) => {
    const date: number = new Date().getFullYear()
  return (
    <footer className='w-full p-5 fixed bottom-0'>
        <div className='container m-auto text-center'>
            Copyright &copy; {date}.
        </div>
    </footer>
  )
}

export default Footer;

