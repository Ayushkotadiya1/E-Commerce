import Loading from '../../src/spinner/Spinner-1.5s-200px.gif'

const Spinner = () => {
  return (
    <div className='w-full h-12 flex justify-center'>
      <img src={Loading} alt="Loading" />
    </div>
  )
}

export default Spinner
