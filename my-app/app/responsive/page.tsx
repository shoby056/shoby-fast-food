
import Image from 'next/image';
import Link from "next/link";

export default function Responsive() {
    return (
        <div>
            <h1 className="restaurant-heading">Shoby's Fast Food</h1>
            <div className={"parent-container"}>
                
                <div className="child-container">
                    <Link href="/beef-burger">
                        <Image src="/images/Beef.jpg" alt="Beef burger"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Beef Burger</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/chicken-burger">
                        <Image src="/images/chicken.jpg" alt="Chicken Burger"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Burger</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/club-sandwich">
                        <Image src="/images/Club.jpg" alt="Club Sandwich"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Club Sandwich</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/broast">
                        <Image src="/images/broast.jpg" alt="Chicken Broast"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Broast</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/zinger">
                        <Image src="/images/zinger.jpg" alt="Chicken Zinger"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Zinger</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/chow-mein">
                        <Image src="/images/Show mein.jpg" alt="Chicken Chow Mein"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Chow Mein</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/wings">
                        <Image src="/images/Wingss.jpg" alt="Chicken Wings"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Wings</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

                <div className="child-container">
                    <Link href="/nuggets">
                        <Image src="/images/nuggets.jpg" alt="Chicken Nuggets"
                            width={230}
                            height={230}
                            className="img"
                        />
                    </Link>
                    <h1 className="blog-title">Chicken Nuggets</h1>
                    <p className="descriptions">Juicy, big, loaded with toppings of my choice.</p>
                    <button className="read-more">Order Now</button>
                </div>

            </div>
        </div>
    );
}
