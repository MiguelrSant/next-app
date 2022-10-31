import Image from "next/image";

export default function Header({black}){
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" height={25} width={93}/>
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" height={35} width={35}/>
                </a>
            </div>
        </header>
    )
}