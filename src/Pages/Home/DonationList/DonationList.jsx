

const DonationList = ({ donation }) => {
    const { category, image, title } = donation

    const categoryTitleColors = {
        "Education": "blue",
        "Food": "green",
        "Health": "red",
        "Clothing": "red"

    }
    const categoryBackgroundColors = {
        "Education": "#FFDCDC",
        "Food": "#F2DDFF",
        "Health": "#C7FFDF",
        "Clothing": "#E2FFD3"
    }

    const backgroundColors = categoryBackgroundColors[category]

    const titleColor = categoryTitleColors[category];

  
    return (
        <div>

            <div style={{backgroundColor: backgroundColors}} className="card shadow-xl">

                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <p style={{ color: titleColor}} className="card-title bg-slate-300 w-20 px-1 rounded-md text-sm">
                        {category}

                    </p>
                    <p style={{color: titleColor}} className="font-semibold">{title}</p>

                </div>
            </div>

        </div>
    );
};

export default DonationList;