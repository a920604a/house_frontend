import React, { useState, useEffect } from 'react';
import {
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack, VStack, HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  Flex
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useFormik, Form, Formik } from 'formik';
function HouseappForm() {
  const [formData, setFormData] = useState({
    age: '',
    url: '',
    address: '',
    currentfloor: '', // 新增目前樓層欄位
    totalfloor: '',  // 新增總樓層欄位
    area: ''
  });

  const handleSubmitbackend = async (e) => {

    try {
      const response = await fetch('http://localhost:8000/House/add_house/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(e),
      });
      const data = await response.json();
      console.log(data); // 可以根据返回的数据做进一步处理
      // 提交后清空表单数据
      setFormData({
        age: '',
        url: '',
        address: '',
        currentfloor: '',
        totalfloor: '',
        area: ''
      });
    } catch (error) {
      console.error('Error adding house:', error);
    }

  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const formik = useFormik({
    // STEP 2-1：建立初始值
    initialValues: {
      currentfloor: "",
      totalfloor: "",
      area: "",
      age: "",
      url: "",
      address: ""
    },
    // STEP 2：搭配 Yup 使用 validationSchema
    validationSchema: Yup.object({

      // currentfloor: Yup.string().min(0, "至少要一樓"),
      // totalfloor: Yup.string().min(0, "至少要一樓"),
      // area: Yup.string().min(0, "至少要一坪"),
      url: Yup.string().required("必填"),
      address: Yup.string().required("必填"),
    }),
    onSubmit: handleSubmitbackend

  });

  return (
    <HStack>
      <Heading as="h3">
        新增房屋
      </Heading>

      <form onSubmit={formik.handleSubmit} style={{ backgroundColor: "#B8FEFF" }}>
        <FormControl isInvalid={!!formik.errors.currentfloor && formik.touched.currentfloor}>
          <FormLabel htmlFor="currentfloor">樓層</FormLabel>
          <Input id="currentfloor" name="currentfloor" {...formik.getFieldProps("currentfloor")} placeholder='樓層' />
          <FormErrorMessage>{formik.errors.currentfloor}</FormErrorMessage>
        </FormControl>

        <FormLabel htmlFor="totalfloor"> 總樓層 </FormLabel>
        <FormControl isInvalid={!!formik.errors.totalfloor && formik.touched.totalfloor}>
          <Input id="totalfloor" name="totalfloor" {...formik.getFieldProps("totalfloor")} placeholder='總樓層' />
          <FormErrorMessage>{formik.errors.totalfloor}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.area && formik.touched.area}>
          <FormLabel htmlFor="area">坪數:</FormLabel>
          <Input id="area" {...formik.getFieldProps("area")} placeholder='坪數'></Input>
          <FormErrorMessage>{formik.errors.area}</FormErrorMessage>



        </FormControl>
        <FormControl isInvalid={!!formik.errors.age && formik.touched.age}>
          <FormLabel htmlFor="age" >屋齡:</FormLabel>
          <Input id="age" {...formik.getFieldProps("age")} placeholder='屋齡'></Input>
          <FormErrorMessage>{formik.errors.age}</FormErrorMessage>


        </FormControl>
        <FormControl isInvalid={!!formik.errors.url && formik.touched.url}>
          <FormLabel htmlFor="url">網址:</FormLabel>
          <Input id="url" {...formik.getFieldProps("url")} placeholder='網址'></Input>
          <FormErrorMessage>{formik.errors.url}</FormErrorMessage>



        </FormControl>
        <FormControl isInvalid={!!formik.errors.address && formik.touched.address}>
          <FormLabel htmlFor="address">地址:</FormLabel>
          <Input id="address" {...formik.getFieldProps("address")} placeholder='地址'></Input>
          <FormErrorMessage>{formik.errors.address}</FormErrorMessage>


        </FormControl>
        <Flex justifyContent="flex-end">

          <Button type="submit" colorScheme='teal' width="full" >
            新增房屋
          </Button>
        </Flex>

      </form >
    </HStack >
  );
}


export default HouseappForm;
