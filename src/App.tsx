import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Modal from './components/ui/Modal'
import { productList } from './data'

function App() {
  /* -------- States ---------*/
  const [isOpen, setIsOpen] = useState(false)


  /* -------- Handlers ---------*/
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  
  /* -------- Renders ---------*/
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product}/>)


  return (
    <>
    <div className='justify-items-center align-middle'>
      <button className='bg-indigo-600 justify-self-center' onClick ={open}>ADD Product</button>
    </div>
    <main className='container mx-auto'>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-2xl">
        {renderProductList}
      </div>
    </main>
    <Modal isOpen ={isOpen} close={close} title='Add new Product'>
      <Button>Submit</Button>
    </Modal>
    </>
  )
}

export default App
