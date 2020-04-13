
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BeautyBox from './containers/BeautyBox/BeautyBox';

export default () => {
  return (
    <div className="App">
      <Layout>
        <BeautyBox />
      </Layout>
    </div>
  );
};
