import { NextPage } from 'next';
import Mainpage from './mainpage/page';
import { redirect } from 'next/navigation';

const HomePage: NextPage = () => {
  redirect('/mainpage')
  // return (
  //   <Mainpage />
  // );
};

export default HomePage;
