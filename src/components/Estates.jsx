import PropertyCard from "./PropertyCard";

const Estates = ({ properties }) => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Estates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-4">

                {
                    properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        ></PropertyCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Estates;