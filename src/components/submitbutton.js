'use client'

import { Button } from '@chakra-ui/react'

// the submit button component
export default function SubmitButton({ onClick }) {
  return (
    <Button colorScheme='blue' onClick={onClick}>Submit</Button>
  )
}