import './App.css';
import {Input} from './Components/textinput.js'
import ChatBot from 'react-simple-chatbot';
import {Grid, Center, Box} from '@mantine/core'


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
    <Grid justify='flex-start' align='stretch'>
        <Grid.Col span={4}>
        </Grid.Col>
        <Grid.Col span={4}><Input/></Grid.Col>
        <Grid.Col span={4}></Grid.Col>
    </Grid>
  );
}

export default App;
