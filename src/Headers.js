import logo from "./airbnb_logo.svg"

export default function Header() {
    return (
        <header className="flex items-center py-4 px-9  mt-2 w-full h-fit shadow-2xl">
            <img src={logo} alt="" className="w-9 mr-2" />
            <h1 className="text-logo_color text-xl font-semibold ">airbnb</h1>
            
        </header>
    )
}