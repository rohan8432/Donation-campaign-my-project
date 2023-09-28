import { useEffect, useState } from "react";
import DonationList from "../DonationList/DonationList";


const Donations = () => {

    const [donations, setDonations] = useState([]);

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[])

    return (
        <div>
            
            <div className="grid grid-cols-4 gap-5 py-7">
                {
                    donations.map(donation =><DonationList key={donation.id} donation={donation}></DonationList>)
                }
            </div>
        </div>
    );
};

export default Donations;