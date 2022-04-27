import React from 'react';

import { usei18n } from 'src/utils/i18n';

import GlobalStyle from 'src/components/GlobalStyle';

import {
  Background,
  Header,
  SubHeader,
  Container,
  Footer,
  Avatar,
  AvatarArrownDown,
  AvatarName,
  AvatarPhoto,
} from './styled';

interface PageProps {
  accentColor: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Page(props: PageProps): React.ReactElement {
  const i18n = usei18n();

  return (
    <>
      <GlobalStyle />
      <Background color={props.accentColor} />
      <Avatar href="https://zaidmkz.xyz?utm_medium=csic&utm_campaign=csic-avatar&utm_source=csic">
        <AvatarPhoto alt="zaidmkz.xyz" src="https://avatars.githubusercontent.com/u/76097144?v=4" />
        <AvatarName>zaidmkz.xyz</AvatarName>
        <AvatarArrownDown />
      </Avatar>
      <Header>csic.</Header>
      <SubHeader>{i18n.getTranslationFor('page.description')}</SubHeader>
      <Container>{props.children}</Container>
      <Footer>
        CC-BY {new Date().getFullYear()} •
        <a href="https://github.com/zaidmukaddam/csic">{i18n.getTranslationFor('footer.sourceCode')}</a>
      </Footer>
    </>
  );
}
