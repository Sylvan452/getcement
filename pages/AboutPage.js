import React from 'react';
import tw from 'tailwind-styled-components';
import getcement from '../public/getcement_logo.png';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Image src="getcement_logo.png" width="120px" height="50px" alt="getcement_logo" />
        <Link href="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </LogoContainer>
      <Content>
        <Title>About Us</Title>
        <Description>
          <h2>Welcome To getcement</h2>
          <p>
            <b>Getcement</b> is an e-commerce Platform for sales of cement. We're dedicated to providing a stress-free experience in providing cement to our clients at an affordable price. We help retailers sell their products faster and encourage them to own a truck rather than a shop to enable a reduction in the price of cement for the end-user. End-users can now order cement from the comfort of their home. Our app is capable of detecting the location of the end-user in real-time. We contact the closest retailer to supply products.
          </p>
          <br />
          <p>
            This project is a requirement for graduation as a software engineer from ALX. I am a registered cement distributor in Nigeria. I’m familiar with the stress involved in getting cement to the end-users and the long chain it passes before reaching the end-user. This project aims to find a lasting solution to the above-stated problems.
          </p>
          <br />
          <p>Thanks For Visiting Our Site</p>
        </Description>
        <Title>Team</Title>
        <Team>
          <div>
            <Image src='https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/355109051_10230021651188117_6876090353017231622_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGx-PxIjn3bG-WSY9w0DTfNZilnx1HOHo1mKWfHUc4emV0q44jgxQSvo9OTviqmy4&_nc_ohc=nZZoFSwBVlsAX9TrSkG&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAFiidYlC3qJkQmcXdR8bpa6xDGdmvy1I3WHn9EYPqIew&oe=64B19559' />
            <Link href="https://www.linkedin.com/in/obah-sylva-414ab013a/">Linkedin</Link><br />
            <Link href="https://github.com/Sylvan452">Github</Link><br />
            <Link href="https://twitter.com/sylvan452">Twitter</Link>
          </div>
          <div>
            <Image src='https://scontent.fabv2-2.fna.fbcdn.net/v/t1.6435-9/30708549_1850323051652734_6611694692939595776_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEBKmn3KSf9q95tjvjOP2V9sKRthz7O7sawpG2HPs7uxnzPRD6ludYBVsSnt9HdJ5A&_nc_ohc=ioHDSBdpboAAX-d2z3Z&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAIdwR0VsSitP95olkSSUTKDn0pcyDIqmdpnM0Wn46L9g&oe=64CE653D' />
            <Link href="https://www.linkedin.com/in/tayo-akinrinsoye-06212b69">Linkedin</Link><br />
            <Link href="https://github.com/tayyoakinrinsoye">Github</Link><br />
            <Link href="https://twitter.com/teeone22/status/1374752246852894725?s=46&t=KpwAKD6mZRrTv7Hlyqe1Rg">Twitter</Link>
          </div>
        </Team>
        <Repo>
          <Link href="https://github.com/Sylvan452/getcement">Project Repository</Link>
        </Repo>
      </Content>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = tw.div`
  flex flex-col bg-gray h-screen
`;

const Repo = tw.div`
  text-xl text-white bg-blue-500 mx-4 px-4
`;
const HomeButton = tw.button`
  bg-blue-500 text-white py-2 px-4 rounded-lg mt-4
`;

const LogoContainer = tw.div`
  flex justify-between items-center py-2 px-2
`;

const Content = tw.div`
  flex flex-col justify-center items-center py-8 px-8
`;

const Title = tw.h1`
  text-3xl text-gray-500 font-bold mb-4
`;

const Description = tw.div`
  text-lg text-gray-500 text-center
`;

const Image = tw.img`
  w-300 h-100 rounded-lg my-8
`;

const Team = tw.div`
  flex flex-row
`;

const Team_1 = tw.div`
`;

const Team_2 = tw.div`
`;
