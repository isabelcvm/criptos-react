import { useState ,useEffect } from 'react'
import styled from '@emotion/styled'
import { monedas } from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'


const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    background-color: #9497FF;
    border: none;
    font-size: 20px ;
    font-weight: 700;
    text-transform: uppercase;
    color: #FFF;
    border-radius: 5px;
    transition: background-color .3s ease ;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [ criptos, setCriptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ moneda, SelectMonedas] = useSelectMonedas( 'Elija su Monedas', monedas )
    const [ criptomoneda, SelectCriptomoneda] = useSelectMonedas( 'Elige tu Criptmoneda', criptos )

    useEffect(() => {
        const consultarAPI = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto =>{
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            } )
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()

        if ( [moneda, criptomoneda].includes('') ) {
            setError(true)
            return
        }
       setError(false)
       setMonedas( {
        moneda,
        criptomoneda
       }) 
    }

    return (
    <>
        {error && <Error> Todos los campos son obligatorios </Error> } 
        <form 
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCriptomoneda />

            <InputSubmit type="submit" value="Cotizar" />
        </form>
    </>
  )
}

export default Formulario