import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleDetail from '../componets/ArticleDetail';
import Header from '../componets/Header';

export default function Home() {
  return (
    <>
      <Header/>
      <ArticleDetail/>
    </>
  )
}
