import { GetStaticProps } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import {FiCalendar, FiUser} from 'react-icons/fi'


import { getPrismicClient } from '../services/prismic';


import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}


interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <div>
          <Link href="/">
            <a>
              <strong>Title</strong>
              <p>Something subtitle uehuhehdeudhe idhehdehien</p>
              <ul>
                <li>
                  <FiCalendar/>
                  15 Mar 2021                
                </li>
                <li>
                  <FiUser/>
                  Murilo Souza
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
