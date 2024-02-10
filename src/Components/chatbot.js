import { useState } from 'react';
import { Container, TextInput, Button, ScrollArea, Group, Text, createTheme } from '@mantine/core';

export function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const userMessage = {text: inputValue, sender: 'user'}
      setMessages([...messages, userMessage]);
      setInputValue('');    
      console.log(inputValue);
        
    
      fetch('http://localhost:3000/flight_searcher', {
        method: postMessage,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message: userMessage.text})
      }).then(response=>{response.json()}).then(data=> {
            const botResponse = {
                text: data.response,
                sender: 'bot'
            };
            setMessages(message=>[...messages, botResponse])
      }).catch(error => console.log(error)
      )

    }
  };


  return (
    <Container  h={50}>
      <ScrollArea style={{ height: 400, marginBottom: 20 }} scrollbarSize={2}>
        <div>
          {messages.map((message, index) => (
            <Text key={index} align={message.sender === 'user' ? 'right' : 'left'}>
              {message.text}
            </Text>
          ))}
        </div>
      </ScrollArea>
      <Group position="apart">
        <TextInput
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
          placeholder="Type your message here..."
          style={{ flexGrow: 1, marginRight: 10 }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <Button onClick={sendMessage}>Send</Button>
      </Group>
    </Container>
  );
}

