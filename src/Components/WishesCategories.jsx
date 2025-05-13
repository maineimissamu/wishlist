import { Link } from "react-router-dom";

export function WishesCategories({wishlists}) {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-12 px-2">
            {wishlists.map((categories) => (
                <Link key={categories.id} to={`/wisheslist/${categories.id}`} className="flex flex-col items-center bg-white rounded-3xl shadow border border-gray-200 hover:shadow-xl group overflow-hidden aspect-square">
                    <div className="flex-1 flex items-center justify-center w-full">
                        {categories.image ? (
                            <img src={categories.image} alt={categories.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl text-gray-300">📋</span>
                            </div>
                        )}
                    </div>
                    <div className="w-full border-b-4 border-black mb-2 group-hover:border-emerald-500"></div>
                    <h2 className="text-lg font-bold text-gray-800 text-center mb-4">{categories.title}</h2>
                </Link>
            ))}
            <Link to="/create-wishlist" className="flex flex-col items-center bg-white rounded-3xl shadow border border-gray-200 hover:shadow-xl group overflow-hidden aspect-square">
                <div className="flex-1 flex items-center justify-center w-full">
                    <span className="text-8xl text-gray-400 group-hover:text-emerald-500">+</span>
                </div>
            </Link>
        </div>
    );
}
