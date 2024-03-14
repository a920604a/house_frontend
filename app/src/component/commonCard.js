import React from "react";
import { Heading, Link, Image, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';



const CommonCard = ({ children }) => {
    const cardProperty = {
        backgroundColor: "#DAF7A6",
        borderRadius: "10px",
        color: "black",
        padding: '10px'

    }
    return (
        <VStack style={cardProperty} >
            {children}
        </VStack>

    );
}
export default CommonCard;