import './App.css';
import { ActionButtons } from './components/ActionButtons';
import { Header } from './components/Header';
import { SpreadsheetGrid } from './components/SpreadsheetGrid';
import { Toolbar } from './components/Toolbar';
import { mockSpreadsheetData } from './data/mockdata';

function App() {
  return (
    <div className="App">
      <Header />
      <Toolbar />
      <ActionButtons />
      <div className="spreadsheet-table-wrapper">
        <SpreadsheetGrid data={mockSpreadsheetData} />
      </div>
    </div>
  );
}

export default App;
