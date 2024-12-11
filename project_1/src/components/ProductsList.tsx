const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹13,995",
      image: "/air-max-pulse-1.jpg", // Replace with your image URLs
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹13,995",
      image: "/air-max-pulse-2.jpg",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      category: "Men's Shoes",
      price: "₹16,995",
      image: "/air-max-97.jpg",
    },
  ];
  
  const ProductsList = () => {
    return (
      <div className="py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Best of Air Max</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-md"
              />
              <h3 className="text-lg font-medium mt-4">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-black font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsList;