import Ads from "./Ads"
import ad1 from "../assets/ads/ad1.png"
import ad2 from "../assets/ads/ad2.png"
import Menu from "./Menu"
import Products from "./Products"

const Home = () => {
  return (
    <div className="">
      <Menu/>
      <Ads image={ad1} />
      <Products />
      <Ads image={ad2} />
    </div>
  )
}

export default Home
