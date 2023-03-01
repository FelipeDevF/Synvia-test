import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;

  .boxFilter {
    display: flex;
    width: 100%;
    margin: 50px 0px;
    justify-content: space-between;
    align-items: center;
  }

  .p-togglebutton {
    box-shadow: none;
    border: 1px solid red;
    border-radius: 25px;
    color: red;
    padding: 5px 12px;
    width: 0 auto;
    font-size: 0.7rem;
  }

  .checked {
    background-color: red !important;
    box-shadow: none;
    border: 1px solid red !important;
    border-radius: 25px;
    padding: 5px 12px;
    width: 0 auto;
    font-size: 0.7rem;
  }

  .p-inputswitch-slider {
    box-shadow: none;
    padding: 0px;
  }

  .p-inputswitch-slider:checked {
    box-shadow: none;
    background-color: red !important;
    padding: 0px;
  }

  .p-scrollpanel-bar-y {
    background-color: red !important;
    width: 3px;
  }

  .txt-number {
    font-size: 0.7rem;
    color: var(--steel);
  }
`