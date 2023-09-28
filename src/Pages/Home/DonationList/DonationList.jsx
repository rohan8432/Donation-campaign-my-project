

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationList = ({ donation }) => {
    const { category, image, title, id } = donation;

    const categoryTitleColors = {
        "Education": "blue",
        "Food": "green",
        "Health": "red",
        "Clothing": "red"
    };

    const categoryBackgroundColors = {
        "Education": "#FFDCDC",
        "Food": "#F2DDFF",
        "Health": "#C7FFDF",
        "Clothing": "#E2FFD3"
    };

    const backgroundColors = categoryBackgroundColors[category];
    const titleColor = categoryTitleColors[category];

    const handleCardClick = () => {

        const storedDonations = JSON.parse(localStorage.getItem("selectedDonations")) || [];

    
        const selectedDonation = {
            id,
            category,
            image,
            title,
            backgroundColor: backgroundColors,
            titleColor,
        };

      
        storedDonations.push(selectedDonation);

        localStorage.setItem("selectedDonations", JSON.stringify(storedDonations));

        toast('You have successfully selected a donation');
    };

    return (
        <div>
            <div onClick={handleCardClick} style={{ backgroundColor: backgroundColors }} className="card shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <p style={{ color: titleColor }} className="card-title bg-slate-300 w-20 px-1 rounded-md text-sm">
                        {category}
                    </p>
                    <p style={{ color: titleColor }} className="font-semibold">{title}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationList;
