import React, { useContext } from 'react';
import { Button, Box, HStack, Heading } from "@chakra-ui/react";
import { UserContext } from './authContext';

export default function Header({ isLoggedIn, handleLogout }) {

    const { username, theme } = useContext(UserContext);

    return (
        <HStack
            backgroundColor="#18181b"
            // spacing={16}
            // px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center">
            <Box
                backgroundColor="white"
            >
                Hello {username}</Box>

            <Button
                onClick={handleLogout}
                backgroundColor="lightblue"
            >登出</Button>
        </HStack>
    );
};