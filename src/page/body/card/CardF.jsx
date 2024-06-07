const CardF = ({title,location,time,phone}) => {

    return (
<div className=" w-[100%] lg:w-[100%] auto lg:h-[210px] border p-[30px] pr-[100px] wrapper  ">

<div className="title">
    <p>{title}</p>
    <p className="text-gray-400 mt-[10px]">{location}</p>
</div>
<div className="flex gap-2
flex-col md:flex-row md:items-center md:justify-between mt-[30px] box-link border-t pt-4 ">
<p className="text-h"> <i className="fa-solid fa-clock"></i>{time}</p>
<a  href={`tel:${phone}`} className="lg:border-b-2 text-f "> <i className="fa-solid fa-phone"></i> +998 93 801 00 34</a>
</div>

</div>
       
    );
}

export default CardF;