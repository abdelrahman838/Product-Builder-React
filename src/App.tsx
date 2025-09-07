import './App.css'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
    <div className="bg-indigo-500 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-2xl">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    </div>
    </>
  )
}

export default App
