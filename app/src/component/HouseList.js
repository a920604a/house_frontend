import React from 'react';
import DeleteButton from './DeleteButton'; // 确保正确导入 DeleteButton 组件
import Card from './HouseCard';
import {
  Link,
  Text,
  Box,
  Badge
} from '@chakra-ui/react';


function HouseList({ houses, onDelete }) {

  return (
    <div>
      <h2>House List</h2>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {houses.map((house, index) => (
          <Card
            key={house.id} // muse have key
            id={house.id}
            currentF={house.currentfloor}
            totalF={house.totalfloor}
            area={house.area}
            age={house.age}
            url={house.url}
            address={house.address}
            onDelete={onDelete}
            update={house.updated_at}
          >
          </Card>
        ))}
      </Box>
    </div >
  );
}

export default HouseList;
