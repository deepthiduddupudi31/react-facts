import myimage from "./th.jpg";
export default function Navbar()
{
    return(
        <div className="navbar">
         <img src={myimage} width="40px"/>
        <h2 className="heading">React Facts</h2>
        <h3 className="subheading">React Course  - project1</h3>
        </div>
    )
}