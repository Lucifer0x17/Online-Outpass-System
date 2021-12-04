import { Button, Input, Text, Textarea } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
} from '@chakra-ui/react';
import React from 'react';

const RequestBuilder = () => {
    return (
        <div>
            <Button colorScheme='blue'>Create Request</Button>
            <Modal isOpen={true} onClose={() => {}}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Request Outpass</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Checkbox defaultIsChecked>Parent's Consent</Checkbox>
                        <Text mb='8px'>Reason to Leave: {''}</Text>
                        <Textarea
                            value={''}
                            onChange={() => {}}
                            placeholder='Here is a sample placeholder'
                            size='sm'
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {}}>
                            Request
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default RequestBuilder;
