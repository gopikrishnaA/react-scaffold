import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import waves from './waves.svg';

const Bg = styled.div`
  background: ${p => p.theme.palette.background.bg};
  height: 100vh;
  width: 100%;
`;
const BgImage = styled.div`
  background-image: url(${waves});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  height: 100%;
`;

const Canvas = ({ children }) => {
  return (
    <div>
      <Bg>
        <BgImage>{children}</BgImage>
      </Bg>
    </div>
  );
};
Canvas.propTypes = {
  children: PropTypes.node
};

export default Canvas;
