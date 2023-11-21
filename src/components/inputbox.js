'use client'

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

  // the inputbox component
  export default function InputBox ({ value, onChange}) {
    return (
        <NumberInput min={0} max={31} value={value} onChange={onChange}  >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
  }