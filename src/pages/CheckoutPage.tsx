import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { purchase, OrderData } from '../services/VoltService';

interface ICheckoutPage { }

const CheckoutPage: React.FC<ICheckoutPage> = () => {

  const { register, handleSubmit } = useForm<OrderData>();

  const onPay: (data: OrderData) => void = async (data) => {
    console.log('Submiting payment to Volt');
    console.log(data);
    await purchase(data);
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Flex id='checkout' direction='column'>
        <Text fontSize='xl'>Volt Settings</Text>
        <Flex justify='center'>
          <form style={{ 'width': '400px' }}>
            <FormControl>
              <FormLabel>Customer name</FormLabel>
              <Input
                type='text'
                {...register('customer.name')}
                marginBottom='10px'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Customer email</FormLabel>
              <Input
                type='text'
                {...register('customer.email')}
                marginBottom='10px'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Currency</FormLabel>
              <Input
                type='text'
                {...register('currencyCode')}
                marginBottom='10px'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                type='text'
                {...register('amount')}
                marginBottom='10px'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Input
                type='text'
                {...register('type')}
                marginBottom='10px'
              />
            </FormControl>
            <FormControl>
              <FormLabel>Reference ID</FormLabel>
              <Input
                type='text'
                {...register('uniqueReference')}
                marginBottom='10px'
              />
            </FormControl>
            <Button
              variant='outline'
              onClick={handleSubmit(onPay)}
              marginBottom='10px'
            >
              Pay
            </Button>
          </form>
        </Flex>
      </Flex>
    </Box>
  )
}

export default CheckoutPage;
