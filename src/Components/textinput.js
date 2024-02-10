import { TextInput } from '@mantine/core'
import { useState } from 'react'
import { MantineProvider } from '@mantine/core'


export function Input(){
    const [value, setValue] = useState('')
    
    return (
        <TextInput
        label="Input Label"
        description="Input Descript"
        placeholder="Input placeholder"
        value={value}
        onChange={(event)=>setValue(event.currentTarget.value)}
        />
    )

}
