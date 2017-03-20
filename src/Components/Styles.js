import styled from 'styled-components'

export const Wrapper = styled.li`
  list-style: none
  display: inline-block
  padding: 1em
  background: papayawhip
  font-size: 12pt
`

export const WarningTitle = styled.h1`
background-color: rgba(59,151,211,1.0);
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 14pt;
  color: white;
  `
// Create an <Input> component that'll render an <input> tag with some styles
export const InputWrapper = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`
export const Breadcrumb = styled.li`
  padding: 8px 15px;
  list-style: none; 
  display: inline-block; 
  background-color: #f5f5f5;
  border-radius: 4px;
  color: black;
`
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'}
  color: ${props => props.primary ? 'white' : 'palevioletred'}

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2280c3;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`