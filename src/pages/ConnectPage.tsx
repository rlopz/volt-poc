import React, { useEffect, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { connect, ConnectData } from "../services/VoltService";
import { useNavigate } from "react-router-dom";

interface IConnectPage {}

const ConnectPage: React.FC<IConnectPage> = () => {
    const [connected, setConnected] = useState<boolean>(false)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<ConnectData>();

    const onSubmit: (data: ConnectData) => void = async (data) => {
        console.log("Connecting to Volt");
        console.log(data);
        await connect(data);
        setConnected(true);
        navigate('/checkout');
    }

    return (
        <Flex id='connect' direction="column">
            <Text fontSize="xl">Volt Settings</Text>
            <Flex justify="center">
                <form style={{"width": "400px"}}>
                    <FormControl>
                        <FormLabel>Client ID</FormLabel>
                        <Input
                            type="text"
                            {...register("clientId")}
                            marginBottom="10px"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Client Secret</FormLabel>
                        <Input
                            type="password"
                            {...register("clientSecret")}
                            marginBottom="10px"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            {...register("username")}
                            marginBottom="10px"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            {...register("password")}
                            marginBottom="10px"
                        />
                    </FormControl>
                    <Button
                        variant="outline"
                        onClick={handleSubmit(onSubmit)}
                        marginBottom="10px"
                    >
                        Connect to Volt
                    </Button>
                </form>
            </Flex>
        </Flex>
    )
}

export default ConnectPage;
