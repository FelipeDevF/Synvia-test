import { ProgressSpinner } from 'primereact/progressspinner'

import styled from 'styled-components'

const LoadingGrid = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(142, 142, 142, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loading = () => (
  <LoadingGrid>
    <ProgressSpinner />
  </LoadingGrid>
)
