import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import getcement from '../public/getcement_logo.png';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import AboutPage from './AboutPage';

const Login = () => {
    const router = useRouter();
    const [showAboutPage, setShowAboutPage] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        });
    });

    const handleAboutClick = () => {
        router.push('/AboutPage');
    };

    return (
        <Wrapper>
            <LogoContainer>
                <img src={getcement} width="120px" height="50px" alt="getcement_logo" />
                <ButtonContainer>
                    <SignUpButton onClick={() => signInWithPopup(auth, provider)}>Sign up</SignUpButton>
                    <AboutButton onClick={handleAboutClick}>About Us</AboutButton>

                </ButtonContainer>
            </LogoContainer>
            <Title>
                Log in to access your account and get cement cheap and fast!
            </Title>
            <HeadImage src='https://images.unsplash.com/photo-1656356283646-a6f6f671f2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
            <Content>
                <StyledDiv>
                    <GetCheapCement>
                        <Title>Get Cement Cheap</Title>
                        <Pag>Are you searching for fast and affordable options to procure cement? One effective approach is to consider purchasing cement in bulk from wholesale suppliers or directly from manufacturers. These sources often provide discounted prices for larger quantities, allowing you to save money. Log in to access offer</Pag>
                    </GetCheapCement>
                </StyledDiv>
                <StyledDiv>
                    <Driver>
                        <Title>Get a Truck not Shop</Title>
                        <Pag> Cement distributors play a vital role in the construction industry, facilitating the connection between manufacturers and contractors, builders, and individuals seeking cement. Our platform assists retailers in selling cement efficiently. Get your hands on a TRUCK today!</Pag>
                    </Driver>
                </StyledDiv>
                <StyledDiv>
                    <Team>
                        <Title>Our Team</Title>
                        <Pag>Obah Sylva is a digital marketer, newspaper editor, and a major distributor of Dangote Cement in Nigeria. Tayo Akinrinsoye works in a financial institution and he currently is a loan officer and has always been open to using technology to solve real-life problems.</Pag>
                    </Team>
                </StyledDiv>
            </Content>
        </Wrapper>
    );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col bg-gray h-screen
`;

const SigninButton = tw.div`
  bg-blue-500 text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`;

const LogoContainer = tw.div`
flex justify-between items-center py-2 px-2`;

const Title = tw.div`
  text-3xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
w-300 h-100
`;

const SignUpButton = tw.div`
bg-blue-500 flex text-white text-center py-2 px-2 rounded hover:bg-blue-600 self-center cursor-pointer
`;

const Content = tw.div`
flex justify-between items-center py-2 px-2`;

const GetCheapCement = tw.div`
`;

const Driver = tw.div`
`;

const Team = tw.div`
`;
const StyledDiv = tw.div`
  border border-gray-500 flex-1 p-4
`;

const Pag = tw.div`
`;
const AboutButton = tw.div`
  bg-blue-500 flex text-white text-center py-2 px-2 rounded hover:bg-blue-600 self-center cursor-pointer
`;

const ButtonContainer = tw.div`
  flex items-center space-x-2
`;