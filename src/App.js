import Header from "./Headers"
import Body from "./Body"

import Data from "./Data"
import Card from "./Card"
// console.log(Data)
export default function App() {

    const cards = Data.map(item => {
        return (
        
            <Card
            key= {item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount = {item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}


            />
            
        )
    })
    return (
        <div>
            <Header/>
            
            <Body/>
            <div className="lg:flex lg:flex-row md:flex-row sm:flex sm:flex-col ">
            {cards}
            </div>
        </div>
    )
}