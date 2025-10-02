import type { Iproduct } from "../interfaces"
import { txtSlicer } from "../utils/functions"
import Image from "./Image"
import Button from "./ui/Button"

interface Iprops{
  product:Iproduct
}

const ProductCard = ({product}:Iprops) => {
  return(
    <div className="border border-black text-black rounded-md p-3 flex flex-col">
      <Image
      imageURL= {product.imageURL}
      alt= {`${product.title} photo`}
      />

      <h3>{product.title}</h3>
      <p>{txtSlicer(product.description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full"></span>
        <span className="w-5 h-5 bg-red-600 rounded-full"></span>
      </div>

      <div className="flex items-center justify-between">
        <span>{product.price} EGP</span>
        <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2025/08/11/07/18/nurturing-swan-9767495_1280.jpg" alt="product photo" />
      </div>

      <div className="flex items-center justify-between space-x-2 my-5">
        <Button className="bg-indigo-700">EDIT</Button >
        <Button className="bg-red-700">DELETE</Button>
      </div>
    </div>
  )
}

export default ProductCard