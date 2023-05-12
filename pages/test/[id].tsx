import { GetStaticPaths, GetStaticProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const props = {};
//   return { props };
// };

interface Props {
  data: {
    id: number;
    name: string;
    content: string;
  };
}

interface Params {
  id: string;
}

async function fetchData(id: number) {
  // TODO: とりあえず叩くのに一旦仮でおく
  const response = await fetch(`http://localhost:3000/api/test${id}/`);
  const data = await response.json();
  return data;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // /test/1 〜 /test/3のページを生成する場合
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ],
    fallback: false // 上記以外は404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const id = params.id;
  const data = await fetchData(id);

  return {
    props: {
      data
    }
  };
};

const TestId = ({ data }: Props) => {
  return (
    <>
      <div className="p-8">
        <div className="text-xl font-bold">{data.name}</div>
        <div className="mt-8 text-lg">{data.content}</div>
      </div>
    </>
  );
};

export default TestId;
