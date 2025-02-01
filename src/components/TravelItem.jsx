
function TravelItem({ image, destination, totalCost, desciption, allInclusive  }) {

    let costLabel = '';
    if (totalCost <= 350) {
        costLabel = 'Great Deal';
    } else if (totalCost >= 1500) {
        costLabel = 'Premium';
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80 object-cover" src={image} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{destination}</div>
                    <p className="text-gray-700 text-base">
                        {desciption}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                {/* Etiqueta de costo */}
                {costLabel && (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {costLabel}
                    </span>
                )}
                
                {/* Etiqueta de "All Inclusive" si corresponde */}
                {!allInclusive  && (
                    <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        All Inclusive
                    </span>
                )}

                {/* Mostrar el costo */}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ${totalCost}
                </span>
            </div>
        </div>
    )

}

export default TravelItem;