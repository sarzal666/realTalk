import { Avatar, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import Copyright from '../Atoms/Copyright';
import { useState } from 'react';
import env from '../../env';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import {Alert} from "@mui/lab";
import {useNavigate} from "react-router";

export default function SignIn() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreement, setAgreement] = useState(false);

    const [fetching, setFetching] = useState(false);
    const [alert, setAlert] = useState({show: false, message: '', severity: 'error'})

    let navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault()
        setFetching(true)

        const body = {
            name,
            surname,
            email,
            password,
            agreement
        };

        //TODO: use axios package
        axios.post(env.ADDRESS + '/signup', body)
            .then(({ data }) => {
                setFetching(false);

                if (data.result) {
                    //login user and redirect to homepage
                    //TODO: implement React router
                    console.log(`created user: ${data.user.uid}`);

                    navigate("/");
                } else {
                    console.log(`error: ${data.message}`);
                    setAlert({show: true, message: data.message, severity: 'warning'})
                }
            })
            .catch(err => {
                setFetching(false);
                console.log(err)
                setAlert({show: true, message: err.message, severity: 'error'})
            })
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" onChange={(e) => setAgreement(!agreement)} checked={agreement} />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            loading={fetching}
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                { alert.show && <Alert severity={alert.severity}>{alert.message}</Alert> }
            </Container>
        </>
    );
}