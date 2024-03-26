import Categories from "../Components/Category/Categories"
import Header from "../Components/Header"

const SdMenuPages = () => {
  return (
    <div className=" container w-screen h-screen flex flex-col justify-between items-center">
        <div className="w-full h-1/6 flex justify-center items-center">
            <Header />
        </div>
        <div className="w-full h-5/6">
            <Categories />
        </div>
        
    </div>
  )
}

export default SdMenuPages