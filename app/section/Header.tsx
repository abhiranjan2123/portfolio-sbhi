import NavBar from '../components/NavBar'
import Avatar from '../components/Avatar'
import MyName from '../components/MyName'

const Header = () => {
  return (
    <section className="bg-maincolor m-1 p-2 rounded-t-xl h-[40rem] rounded-b-[100px] container">
        <NavBar />
        <Avatar />
        <MyName />
        
    </section>
  )
}

export default Header