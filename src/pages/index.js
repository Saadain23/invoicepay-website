export { default } from '../pages/[lang]';

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/fi',
      permanent: false,
    },
  };
}