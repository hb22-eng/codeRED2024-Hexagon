import './App.css';
import {Input} from './Components/textinput.js'
import ChatBot from 'react-simple-chatbot';
import {Grid, Center, Box} from '@mantine/core'
import {ChatUI} from './Components/chatbot.js'

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

function App() {
  return (
    <ChatUI>
    </ChatUI>
  );
}

export default App;
