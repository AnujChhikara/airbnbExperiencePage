import img from "./grid.png"

export default function Body() {
    return (
        <div className="p-4 ">
            <div className="p-4 mt-6 flex items-center justify-center " >
            <img src={img} alt="" className="px-12" />
       
            </div>
            <div className="p-2 ml-4">
                <h2 className="text-4xl font-bold mb-4">Online Experiences</h2>
                <p className="text-lg ">Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}