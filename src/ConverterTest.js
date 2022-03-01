import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import { Converter } from "./Converter"

it("renders correctly", () => {
    const {queryByPlaceholderText} = render(<Converter/>)

    expect(queryByPlaceholderText("1234...")).toBeTruthy()
})