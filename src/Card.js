
import star from "./star.png"
export default function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }

    return (
        <div className="p-4 ml-6">
                <div className=" rounded-lg w-fit h-fit  relative" >
              
                    <img src={`images/${props.img}`}  alt="" className=" shadow-2xl" />
                    { badgeText &&  <div className=" bg-gray-400 text-xs font-mono rounded-lg py-0.5  absolute top-0 px-1 m-2 ">
                        <span className="text-white">{badgeText}</span>
                    </div>}
               
                </div>
                
                  

            <div className=" mt-2">
                <div className="flex  items-center">
                    <img src={star} alt="" className="h-4 mr-1" />
                    <p> {props.rating}</p>
                    <p className="text-gray-400 ml-1 px-1 flex">({props.reviewCount})-{props.location}</p>
                </div>
                <div>
                    <p className="text-xs mb-1 ">{props.title}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-xs font-bold mr-1">From {props.price}</p>
                    <p className="text-xs text-gray-400"> / person</p>
                </div>

           
            </div>

        </div>
    )
}