import './App.css'
import ProductCard from './components/ProductCard'
import { productList } from './data'

function App() {
  /* Renders*/
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>)


  return (
    <>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-2xl">
        {renderProductList}
      </div>
    </>
  )
}

export default App
