import {Container} from "@mui/material";
import {Box} from "@mui/system";
import {purple} from "@mui/material/colors";

export default function Home() {
    console.log(purple)
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                backgroundColor: purple[500],
                height: 50,
            }}>
                test
            </Box>
            <Container>
                Home component
            </Container>
        </Box>
    )
}