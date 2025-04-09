import './App.css';
import NewProductForm from './components/NewProductForm';
import Product from './components/Products';

function App() {
  const Response = [
    {
      name:'Nirma',
      day:'12',
      month:'May',
      year:'1998',
      date: new Date(2021,12,2)
    },
    {
      name:'Arial',
      day:'22',
      month:'August',
      year:'2005',
      date: new Date(2011,12,12)

    },
    {
      name:'Surf-xl',
      day:'14',
      month:'June',
      year:'2000',
      date: new Date(2041,2,52)

    },
    {
      name:'Tide',
      day:'08',
      month:'April',
      year:'2007',
      date: new Date(2071,8,62)

    }
  ]

  function dataSet(data){
    data.value=21;
    data.age='myAge';
    console.log(data)
  }

  return (
    <div className='wrapper'>
      
      <NewProductForm data={dataSet}/>
    
      <div className ='main-div'>
      <Product item={Response} />
     </div>
    </div>
    
  );
}

export default App;
