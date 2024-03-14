import React, { useState, useContext } from 'react';
import axios from "axios";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack, VStack, HStack,
    Button, Heading,
    Card, CardBody, CardFooter,
    Image,
    Text
} from '@chakra-ui/react';
import { login } from "./auth";
import { UserContext } from './authContext';
import CommonCard from './commonCard';

// https://ithelp.ithome.com.tw/articles/10280317

export default function LoginForm({ onLoginSuccess, onLoginFailure }) {

    // const [username, setUsername] = useState("");
    const { username, setUsername } = useContext(UserContext);

    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    const clearForm = () => {
        // setUsername("");
        setPassword("");
    };

    const handleLogin = (e) => {
        setErrorMessage(null);
        console.log("before CHECK");
        login(username, password).then((data) => {
            console.log("AFTER CHECK", data);
            if (data.status === "success") {
                onLoginSuccess();
            }
            else {
                setErrorMessage(data.message);
            }

        });

    };



    const handleSubmit = (e) => {
        console.log("handleSubmit", username, "password:", password);
        e.preventDefault();
        clearForm();
    };

    const getIsFormValid = () => {

        return username && password && password === username;
    };
    return (
        // https://chakra-ui.com/docs/components/card
        <CommonCard

        >
            <Card
                direction={{ base: 'column', sm: 'row' }}
            // overflow='hidden'
            // variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                    alt='Caffe Latte'
                />
                <Stack >

                    <CardBody>
                        <Heading size='md'>
                            房屋存摺</Heading>
                        <Text >
                            新增自選與查看
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <form onSubmit={handleSubmit}>
                            <Text>帳號</Text>
                            <input
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                placeholder="Username"

                            />
                            <Text>密碼</Text>
                            <input
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="Password"
                            />

                            <button type="submit" onClick={handleLogin} disabled={!getIsFormValid()}>
                                Submit
                            </button>
                        </form>
                    </CardFooter>
                </Stack>
            </Card>
        </CommonCard>

    );
}