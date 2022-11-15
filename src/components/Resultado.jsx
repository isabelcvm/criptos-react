import styled from '@emotion/styled'

const Contenedor = styled.div `
    font-family: 'Lato', sans-serif;
    color: #FFF;
    
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px ;

`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p `
    font-size: 30px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Resultado = ({resultado}) => {
    console.log(resultado);
    const { PRICE, CHANGEPCT24HOUR, IMAGEURL, LOWDAY, HIGHDAY, LASTUPDATE  } = resultado

  return (
    <Contenedor>
        <Imagen src= {`https://cryptocompare.com/${IMAGEURL}`} alt="image cripto" />
        <div>
            <Precio>El precio es de: <span> {PRICE} </span>  </Precio>
            <Texto>El precio más alto del día: <span> {HIGHDAY} </span>  </Texto>
            <Texto>El precio  más bajo del día: <span> {LOWDAY} </span>  </Texto>
            <Texto>Variación de las últimas 24 horas: <span> {CHANGEPCT24HOUR} </span>  </Texto>
            <Texto>Última actualización: <span> {LASTUPDATE} </span>  </Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado