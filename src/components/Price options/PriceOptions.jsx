import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "membershipName": "Basic Gym Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities during regular hours",
                "Cardio and strength training equipment",
                "Locker room access",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 2,
            "membershipName": "Premium Gym Membership",
            "price": 49.99,
            "features": [
                "Unlimited access to all gym facilities",
                "Access to group fitness classes",
                "Personal trainer consultation",
                "24/7 gym access",
                "Access to sauna and steam room",
                "Towel service",
                "Free parking",
                "Nutrition and dietary advice"
            ]
        },
        {
            "id": 3,
            "membershipName": "Student Gym Membership",
            "price": 19.99,
            "features": [
                "Access to gym facilities during regular hours",
                "Cardio and strength training equipment",
                "Locker room access",
                "Valid student ID required"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-3xl lg:text-5xl text-center p-5">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                priceOptions.map(priceOption => <PriceOption key={priceOption.is} option={priceOption}></PriceOption>)
                }</div>
        </div>
    );
};

export default PriceOptions;