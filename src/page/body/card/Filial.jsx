import { Link } from "react-router-dom";
import './card.scss'
const Filial = ({ link, textLink }) => {

    return (

        <div className="w-[100%] h-[80px]  flex items-center pl-[25px]">
            <p>
                <Link to='/' className="hoverCursor" >Bosh sahifa
                </Link> / <Link to={link} className="text-[orange]">
                    {textLink}</Link>
            </p>



        </div>




    );
}

export default Filial;