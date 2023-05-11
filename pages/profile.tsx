import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const MetaHead = () => {
  return (
    <Head>
      <title>相澤先生のプロフィール</title>
    </Head>
  );
};
type ProfileType = {
  name: string;
  personality: string;
};

const profile: ProfileType = {
  name: '相澤消太',
  personality: '抹消'
};

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
        </div>
      </Layout>
    </>
  );
};

export default Profile;
