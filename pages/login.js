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
            </LogoContainer>
            <Title>
                Log in to access your account!
            </Title>
            <HeadImage src='https://otutu.com.ng/wp-content/uploads/2022/11/FB-IMG-1668054823305-350x220.jpg' />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
        </Wrapper>
    );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-200 p-4
`;

const SigninButton = tw.div`
  bg-blue-500 text-white text-center py-4 mt-8 self-center w-full
`;

const LogoContainer = tw.div``;

const Title = tw.div`
  text-3xl pt-4 text-gray-500
`;

const HeadImage = tw.img`

`;
