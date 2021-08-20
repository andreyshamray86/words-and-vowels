import {StringsContextProvider} from './context/StringsContext'
import Form from './components/Form/Form';
import Table from './components/Table/Table';

import './App.css'

function App() {
  return (
    <StringsContextProvider>
      <div className='container'>
        <h1 className='app__title'>Введите числа от 1 до 20, разделяя ',' или ';'</h1>
        <Form/>
        <Table/>
      </div>
    </StringsContextProvider>
  );
}

export default App;
