import { Link } from "react-router-dom"


type productProp={
  products:any
}

const Products = (props:productProp) => {
  return <div className=" mx-28 my-12 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {props?.products?.map((data:any)=>{
        return <Link to="/Details" state={{data:data}}>
         <div className="border border-slate-400 rounded-md h-[17em] p-2" key={data.id} >
          <div className="flex justify-center p-2">
          <img src={data?.image} alt="" className="p-4 w-52 h-40"/>
          </div>
          <h1 className="font-bold text-xl">₹ {data?.price}</h1>
          <h1>{data?.category}</h1>
          <h1>{data?.title.slice(0,33)+'...'}</h1>
        </div>
        </Link>
    })}
  </div>
}

export default Products;
