import CompletionRate from './Components/CompletionRate';
import TotalPlays from './Components/TotalPlays';
import UniquePlays from './Components/UniquePlays';
import Heading from './Components/Heading';
import Image from './Components/Image';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="upper-div">
        <Image />
        <UniquePlays />
        <TotalPlays />
      </div>
      <div className="lower-div">
        <Heading />
        <CompletionRate />
      </div>
    </div>
  );
}

export default App;
