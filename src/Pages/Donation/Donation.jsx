
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
    // const donate = useLoaderData();
    const [selectedDonations, setSelectedDonations] = useState([]);

    useEffect(() => {
        
        const storedDonations = JSON.parse(localStorage.getItem("selectedDonations")) || [];
        setSelectedDonations(storedDonations);
    }, []);

    return (
        <div>
            <h2>Selected Donations</h2>
            {selectedDonations.length > 0 ? (
                <ul>
                    {selectedDonations.map((donation, index) => (
                        <li key={index}>
                            <p>ID: {donation.id}</p>
                            <p>Category: {donation.category}</p>
                            <p>Title: {donation.title}</p>
                            <p>Background Color: {donation.backgroundColor}</p>
                            <p>Title Color: {donation.titleColor}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No donations selected.</p>
            )}
        </div>
    );
};

export default Donation;
