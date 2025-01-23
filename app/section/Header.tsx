import NavBar from '../components/NavBar'
import Avatar from '../components/Avatar'
import MyName from '../components/MyName'

const Header = () => {
  return (
    <section className="bg-slate-300 m-1.5 p-2 rounded-t-xl  h-[40rem] rounded-b-[100px]" style={{backgroundImage: "url('/svg/noisybg.svg')"}}>
        <NavBar />
        <Avatar />
        <MyName />
        
    </section>
  )
}

export default Header