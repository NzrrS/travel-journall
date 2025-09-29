import Logo from '../assets/images/globe.png'
export default function Header(){
    return(
        <header>
            <img src={Logo} alt="globe-img" />
            <h1>my travel journal.</h1>

        </header>
    )
}