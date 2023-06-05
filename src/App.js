import {ChatEngine} from "react-chat-engine"
import './App.css';

function App() {
  return (
    <div className="App">
    <ChatEngine
      height = "100vh"
      projectID = "2a74737c-1aa1-4d43-aa42-300fad12d43a"
      userName = "sameer"
      userSecret = "aftab" 
    />
    </div>
  );
}

export default App;
