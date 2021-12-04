import React, { useState } from 'react';
import { Input, Button, Stack } from '@chakra-ui/react';
import supabase from '../../config/supabase';

const Form = () => {
    const [email, setEmail] = useState('vaibhavgarg.exe@gmail.com');
    const [password, setPassword] = useState('testuserpassword');
    const loginUser = () => {
        supabase.auth.signIn({ email: email, password: password });
    };
    return (
        <Stack spacing={3}>
            <Input
                variant='filled'
                placeholder='Email'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <Input
                variant='filled'
                placeholder='Password'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button colorScheme='blue' onClick={loginUser}>
                Login
            </Button>
        </Stack>
    );
};

export default Form;
