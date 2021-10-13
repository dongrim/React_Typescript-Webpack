// import PropTypes from "prop-types";
import React from 'react'

interface Props {
  name: string
  age?: number
  // isActive: boolean;
  // list: string[];
  // users: {
  //   id: number,
  //   username: string,
  // }
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MyComponent = ({ ...props }: Props): JSX.Element => {
  const { name, age = 100 } = props

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    (/* event */) => {
      // event.preventDefault
    }
  const handleChange = (/* event: React.ChangeEvent<HTMLInputElement> */) => {
    // event.target
  }

  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <button onClick={handleClick}></button>
      <input onChange={handleChange}></input>
    </>
  )
}

// not useless
/* MyComponent.prototype = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
} */
/* MyComponent.defaultProps = {
  age: 100,
} */
