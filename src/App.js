import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: red;
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: calc(100% - 10px);
`;

const App = () => {
  return (
    <Container />
  );
};

export default App;
