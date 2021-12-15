import { GetStaticPaths, GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

import Head from 'next/head'
import Header from '../../components/Header';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
 return(
   <>
    <Head>

    </Head>
    <Header/>
    <img src="/Banner.png" alt="imagem" className={styles.banner}/>
    <main className={commonStyles.container}>
      <div className={styles.post}>
        <div className={styles.postTop}>
          <h1>Algum titulo para exemplo</h1>
          <ul>
            <li>
              <FiCalendar/>
              12 mar 2021
            </li>
            <li>
              <FiUser/>
              Murilo Souza
            </li>
            <li>
              <FiClock/>
              120 min
            </li>
          </ul>
        </div>
        <article>
          <h2>Titulo secundario</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam ipsa provident tempora cupiditate asperiores cum illo, veniam eum dolore harum illum exercitationem unde, obcaecati explicabo velit recusandae est fuga! Minus exercitationem accusamus, tempore earum, iusto enim magni deserunt error alias neque dolore perspiciatis, doloribus ipsam ex temporibus obcaecati saepe ullam provident voluptatibus. In reprehenderit cum repudiandae maxime id quos iure nulla obcaecati possimus quia. Tempora voluptas earum quam expedita repudiandae accusantium qui odit ad ullam natus nesciunt, ipsa omnis modi nobis maiores placeat animi in consectetur! Assumenda suscipit omnis libero porro. Cumque nisi nam doloribus nostrum reprehenderit, velit quis nulla ipsum omnis facilis? Non nesciunt cum rerum beatae quidem, laboriosam labore numquam maxime vero eius officiis amet hic assumenda fuga odit maiores suscipit, similique ducimus praesentium explicabo nam, ad vitae. Sunt animi magni molestiae asperiores, autem laudantium assumenda consectetur maxime soluta voluptates ad quis itaque alias totam doloribus error harum, eveniet quas. Id nemo debitis minima adipisci, recusandae ipsam beatae quod tempora fugiat molestiae autem modi molestias nulla in sequi harum aliquid saepe inventore possimus exercitationem? Pariatur aliquid voluptatem sint consequuntur incidunt possimus nemo laboriosam fuga accusantium! Adipisci, numquam repellendus? Nesciunt, quibusdam a ipsum voluptas eveniet illum repudiandae quam?
          </p>
        </article>
      </div>
    </main>
   </>
 )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
