import Item from './components/item';
import ItemDate from './components/itemDate';
import Card from './components/card';
import './App.css';


function App() {
  const respons = [
    {
      PersonName : 'Om',
      personDay : "07",
      PersonMonth : "April",
      PersonYear : "2003"
    },
    {
      PersonName : 'Bala',
      personDay : "26",
      PersonMonth : "Oct",
      PersonYear : "2002"
    },
    {
      PersonName : 'Kushal',
      personDay : "06",
      PersonMonth : "june",
      PersonYear : "2002"
    }
  ];


  return (
   
      <Card>
    <Item name={respons[0].PersonName}></Item>
    <ItemDate day={respons[0].personDay} month={respons[0].PersonMonth} year={respons[0].PersonYear}></ItemDate>

    <Item name={respons[1].PersonName}></Item>
    <ItemDate day={respons[1].personDay} month={respons[1].PersonMonth} year={respons[1].PersonYear}></ItemDate>

    <Item name={respons[2].PersonName}></Item>
    <ItemDate day={respons[2].personDay} month={respons[2].PersonMonth} year={respons[2].PersonYear}></ItemDate>

    <div className="App"> Hello jee </div>
    </Card>
   
  );
}

export default App;
