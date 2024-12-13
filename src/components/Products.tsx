import guitar from "../assets/guitar.png";
const Products = () => {
  const arr = [
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
    {
      image: guitar,
      name: "products",
      price: 1234,
      year: 2023,
      place: "indiaaa",
      description: "lorem lipsum sakhjsda  hfsdkhk sf kjjshdfkh sd",
    },
  ];
  return <div className=" mx-28 my-12  grid grid-cols-4 gap-3">
    {arr.map((item)=>{
        return <div className="border-2 border-black rounded-md h-[17em]" key={item.name}>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.year}</h1>
            <h1>{item.place}</h1>
        </div>
    })}
  </div>;
};

export default Products;
