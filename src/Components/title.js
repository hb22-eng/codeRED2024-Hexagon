import {Title, Container} from '@mantine/core'

export function Top(){
    const containerprops = {
        bg: 'var(--mantine-color-blue-light)',
        h: 50,
        mt: 'md'

    }

    return (
        <Container {...containerprops}>
        <Title order={1}> 
            Hexagon
        </Title>
        </Container>
    )
}