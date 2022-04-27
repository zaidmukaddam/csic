import React from 'react';
import styled from 'styled-components';

import assets from 'src/assets';
import DraggableImage from 'src/components/Covers/components/DraggableImage';
import BlankImage from 'src/components/Covers/components/BlankImage';

import ViewProps from './ViewProps';

const Title = styled.p<{ color: ViewProps['titleColor']; borderColor: ViewProps['accentColor'] }>`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  padding-left: 10px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
  position: absolute;
  bottom: 20px;
  border-left: 10px solid ${(props) => props.borderColor};
`;

const SpotifyLogo = styled.div<{ logo: ViewProps['accentColor'] }>`
  background-image: url(${(props) => props.logo && assets[props.logo]});
  background-repeat: no-repeat;
  background-size: 30px;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
`;

const Image = styled(BlankImage)<{ color: ViewProps['accentColor'] }>`
  width: 340px;
  height: 330px;
  border-bottom: 10px solid ${(props) => props.color};
  position: absolute;
`;

export default function Model3(props: ViewProps): React.ReactElement {
  return (
    <>
      <SpotifyLogo logo={props.spotifyLogo} />
      <Image color={props.accentColor}>
        {props.image && <DraggableImage source={props.image} width={360} />}
        <Title color={props.titleColor} borderColor={props.accentColor}>
          {props.title}
        </Title>
      </Image>
    </>
  );
}
