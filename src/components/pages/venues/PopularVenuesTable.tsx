const venues = [
    { rank: 1, name: 'The Golden Spoon', bookings: 150 },
    { rank: 2, name: 'The Velvet Lounge', bookings: 120 },
    { rank: 3, name: 'The Cozy Corner', bookings: 100 },
    { rank: 4, name: 'The Neon Lights', bookings: 90 },
    { rank: 5, name: 'The Daily Grind', bookings: 80 },
];

export default function PopularVenues() {
    return (
        <div className="bg-white p-6 rounded-xl font-plus">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Menus</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-sm text-center text-gray-500 border-b border-[#E3DBE5]">
                            <th className="py-3 px-4 font-normal">Rank</th>
                            <th className="py-3 px-4 font-normal">Venue</th>
                            <th className="py-3 px-4 font-normal">Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venues.map((venue) => (
                            <tr key={venue.rank} className="border-b border-[#E3DBE5] last:border-none text-center">
                                <td className="py-4 px-4 text-sm text-gray-600">{venue.rank}</td>
                                <td className="py-4 px-4 text-sm text-gray-700 font-medium">{venue.name}</td>
                                <td className="py-4 px-4 text-sm text-gray-600">{venue.bookings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}