import { AllProduct } from "../AllProduct/AllProduct"
import { CartProvider } from "../AllProduct/CartContext"
//import { CartContext } from "../AllProduct/CartContext"
import { Checkout } from "../AllProduct/Checkout"
import { OrderSummary } from "../AllProduct/OrderSummary"
import Banner from "../Banner/Banner"
import Offer from "../Offer/Offer"


export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AllProduct></AllProduct>
        <Offer></Offer>
        <Checkout></Checkout>
        <OrderSummary></OrderSummary>
        {/* <CartContext></CartContext> */}
        <CartProvider>
          
        </CartProvider>
        
    </div>
  )
}
