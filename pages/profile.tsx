import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel';
import { default as Layout } from '../components/Layout';
import { ProfileType, SlideType } from '../types/index';

const MetaHead = () => {
  return (
    <Head>
      <title>相澤先生のプロフィール</title>
    </Head>
  );
};
const profile: ProfileType = {
  name: '相澤消太',
  personality: '抹消'
};

const sliders: SlideType[] = [
  {
    color: '3d4070',
    name: 'slide 1'
  },
  {
    color: '3e7058',
    name: 'slide 2'
  },
  {
    color: '3e6770',
    name: 'slide 3'
  },
  {
    color: '54703e',
    name: 'slide 4'
  },
  {
    color: '70563e',
    name: 'slide 5'
  }
];

const Profile: NextPage = () => {
  return (
    <>
      <Layout>
        <MetaHead />
        <div className="Profile__page">
          <Image
            src="/images/sample.jpg"
            width={1500}
            height={1500}
            alt="相澤先生"
          />
          <div className="mt-20">
            <div className="mb-8">名前: {profile.name}</div>
            <div className="mb-8">個性: {profile.personality}</div>
          </div>
          <div className="mt-40">
            <p>スライダー</p>
            <Carousel sliders={sliders} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
