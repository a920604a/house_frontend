import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdDelete } from "react-icons/md";


function DeleteButton({ houseId, onDelete }) {

    const handleClick = async () => {
        try {
            // console.log("houseId = ", houseId)
            const response = await fetch(`http://localhost:8000/House/delete_house/${houseId}/`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete house');
            }

            const data = await response.json();
            console.log(data); // 可以根据返回的数据做进一步处理
            // 触发 onDelete 回调函数
            onDelete();
        } catch (error) {
            console.error('Error deleting house:', error);
        }
    };

    return (
        <Button leftIcon={<MdDelete />} colorScheme='pink' variant='solid' onClick={handleClick}>
            删除
        </Button>
    );
}

export default DeleteButton;
