import NavEg from "../../components/navbar";
import FooterEg from "../../components/footer";

function FlowersList() {
    const flowers = [{ id: 1, name: "Rose", price: "Rs.250" },
    { id: 2, name: "Tulips", price: "Rs.230" }
    ];

    return (
        <>
            <NavEg />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Available Flowers</h2>
                <ul className="space-y-2">
                    {flowers.map((flower) => (
                        <li key={flower.id} className="p-4 bg-gray-100 rounded-md">
                            {flower.name} - {flower.price}
                        </li>
                    ))}
                </ul>
            </div>
            <FooterEg />
        </>
    );
}

export default FlowersList;
