import { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesCard/ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [ascending, setAscending ] = useState(true);

    useEffect(()=>{
        fetch(`https://car-doctor-server-try4.vercel.app/services?sort=${ascending ? 'ascending' : 'decending'}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
        .catch( error => console.error(error));
    }, [ascending])
    return (
        <div className="text-center">
            <h3 className='text-center'>Services Page {services.length}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, corrupti.</p>
            <div className="py-4">
            <className className='text-warning'>Show me the Price :</className> 
            <button className="btn btn-success ms-4"
            onClick={() => setAscending(!ascending) }
            > {ascending ? 'High to Low' : 'Low to High'} </button>
            </div>
            <div>
<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3">
{
    services.map(service => <ServicesCard 
    key={service._id}
    service={service
    }></ServicesCard>)
}
</div>
            </div>
        </div>
    );
};

export default Services;