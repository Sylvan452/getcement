import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import getcement from '../public/getcement_logo.png';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        });
    });

    return (
        <Wrapper>
            <LogoContainer>
                <img src={getcement} width="120px" height="50px" alt="getcement_logo" />
                <SignUpButton onClick={() => signInWithPopup(auth, provider)}>Sign up</SignUpButton>
            </LogoContainer>
            <Title>
                Log in to access your account and get cement cheap and fast!
            </Title>
            <HeadImage src='https://otutu.com.ng/wp-content/uploads/2022/11/FB-IMG-1668054823305-350x220.jpg' />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
            <Content>
                <StyledDiv>
                    <GetCheapCement>
                        <Title>Get Cement Cheap</Title>
                        <Pag>Looking for ways to get cement fast and cheap? Firstly, consider buying cement in bulk from wholesale suppliers or manufacturers, as they often offer discounted prices for larger quantities. Login and gain access to cheap cement products in Nigeria</Pag>
                    </GetCheapCement>
                </StyledDiv>
                <StyledDiv>
                    <Driver>
                        <Title>Get a Truck not Shop</Title>
                        <Pag>Cement distributors play a crucial role in the construction industry by connecting manufacturers with contractors, builders, and individuals in need of cement. We help retailers sell cement faster. Get a TRUCK!</Pag>
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
