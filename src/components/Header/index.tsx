import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewModalTransaction: () => void;
    toggleTheme: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Header({ onOpenNewModalTransaction, toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />

        <div>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={true}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={'#1e212d'}
            offColor={'#f0f2f5'}
            onHandleColor={title === 'dark' ? '#f0f2f5' : '#1e212d'}
          />
          <button type="button" onClick={onOpenNewModalTransaction}>
                    Nova Transação
          </button>
        </div>
      </Content>
    </Container>
  );
}