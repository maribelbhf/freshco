import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';


var settings = {
  images: [
    { url: require('../assets/images/bg01.jpg'), position: 'center' },
    { url: require('../assets/images/bg02.jpg'), position: 'center' },
    { url: require('../assets/images/bg03.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
