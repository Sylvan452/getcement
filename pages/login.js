import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import getcement from '../public/getcement_logo.png';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import AboutPage from './AboutPage';
import YouTube from 'react-youtube';

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
    const VideoPlayer = () => {
        const videoId = 'tFBzIZEpHs4';

        return (
            <YouTube videoId={videoId} opts={{ width: '100%', height: '450', autoplay: true }} />
        );
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
            <HeadImage src='https://media.gettyimages.com/id/478182554/photo/egypt-opens-rafah-border-crossing.jpg?s=612x612&w=gi&k=20&c=zR-0NlZoYhJ0lWefKytGfUURvPOfF_uL-6WStBD__c4=' />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
            <Content>
                <Demo>
                    <Title>
                        Demo Video
                    </Title>
                    <YouTube videoId={'tFBzIZEpHs4'} />
                </Demo>
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
                        <Pag><b>Obah Sylva</b> is a digital marketer, newspaper editor, and a major distributor of Dangote Cement in Nigeria. <b>Tayo Akinrinsoye</b> works in a financial institution and he currently is a loan officer and has always been open to using technology to solve real-life problems.</Pag>
                    </Team>
                </StyledDiv>
            </Content>


        </Wrapper>
    );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col bg-gray h-screen md: w-full px-2 mx-2
`;

const SigninButton = tw.div`
  bg-blue-500 text-white text-center py-4 mt-8 self-center w-full cursor-pointer md: w-full
`;

const LogoContainer = tw.div`
flex justify-between items-center py-2 px-2`;

const Title = tw.div`
  text-3xl pt-4 text-gray-500
`;

const Demo = tw.div`
flex-1 md: w-'489px'
`;

const HeadImage = tw.img`
w-full h-auto md: w-full sm: w-full
`;

const SignUpButton = tw.div`
bg-blue-500 flex text-white text-center py-2 px-2 rounded hover:bg-blue-600 self-center cursor-pointer
`;

const Content = tw.div`
flex flex-row space-y-4 justify-between items-center py-2 px-2 mx-2 md: flex-col sm: flex-col`;

const GetCheapCement = tw.div`
flex-1
`;

const Driver = tw.div`
flex-1
`;

const Team = tw.div`
flex-1
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