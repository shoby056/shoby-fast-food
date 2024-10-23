import Image from 'next/image';
import Header from '../responsive/header';
import Footer from '../responsive/footer'; 



export default function Chicken(){
    return(
        <div>
            <Header/>
        <h1 className="restaurant-heading">Chicken  Burger</h1>
        <p className="content-of-cards">
         A burger is a patty of ground beef grilled and placed between two halves of a bun.<br/> Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.
            <br/> Burgers are considered an American food but are popular around the world</p>
        <div className={"parent-container"}>
  
         
        <div className="child-container">
        <Image src="/images/chicken.jpg" alt="Beef burger"
          width={230}
          height={230}
          className="img"
           />
            <h1 className="blog-title">Beef Burger</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>
        </div>
        <Footer/>
        </div>
      
        )
        }
        