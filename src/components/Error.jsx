import styled from '@emotion/styled'

const Texto = styled.div`
    padding: 15px;
    background-color: red;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-align: center;

`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error