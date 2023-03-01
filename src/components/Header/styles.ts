import styled from "styled-components";
import PokeballImg from '../../assets/pokeball.svg'
import SynviaImg from '../../assets/synvia-A.svg'

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to top, #e90200 0, #e90200 65%, black 35%);
  height: 160px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: var(--white);

  .box {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 15px;
  }

  .pokeballImg {
    width: 50px;
    height: 50px;
    background: url(${PokeballImg}) no-repeat center center;
  }

  .synvia {
    width: 40px;
    height: 40px;
    background: url(${SynviaImg}) no-repeat center center;
    margin-right: 15px;
  }
`