import { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesCard/ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
        .catch( error => console.error(error));
    }, [])
    return (
        <div >
            <h3 className='text-center'>Services Page {services.length}</h3>
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