import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UserTicketContainer,
    UserTicketButton,
    UseTicketLabel,
    Container,
}

    from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
    const [isVisible, setVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setVisible((prevState) => !prevState);
    }
    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }
    return (
        <Wrapper>
            <Container>
                <Header colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}>
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>
                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                            </Value>
                            <EyeButton onPress={handleToggleVisibility}>
                                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                            </EyeButton>
                        </BalanceContainer>
                        <Info>
                            Seu saldo está rendendo 100% do CDI
                    </Info>
                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>
                            <Action>
                                <FontAwesome name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>
                <UseBalance>
                    <UseBalanceTitle>Usar Saldo ao Pagar</UseBalanceTitle>
                    <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
                </UseBalance>
                <PaymentMethods>
                    <PaymentMethodsTitle>Formas de Pagamentos</PaymentMethodsTitle>

                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                                <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não estiver saldo no seu PicPay</CardInfo>
                            </CardDetails>
                        </CardBody>

                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                            <AddLabel>
                                Adicionar Cartão de Crédito
                    </AddLabel>
                        </AddButton>
                    </Card>

                    <UserTicketContainer>
                        <UserTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={25} color="#0DB060" />
                            <UseTicketLabel>
                                Usar Código Promocional
                            </UseTicketLabel>
                        </UserTicketButton>
                    </UserTicketContainer>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}