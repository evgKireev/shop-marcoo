import Image from 'next/image';
import styles from './Comments.module.scss';
const comments = [
  {
    user: { name: 'Michle Jhon', avatar: '/images/avatar/2.jpg' },
    data: '2 days ago',
    comment:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qus ipsum speissei ultrices gravida. Risus commodo viverra maeenas accumsan lacus vel facilisis.',
  },
  {
    user: { name: 'Michle Jhon', avatar: '/images/avatar/1.jpg' },
    data: '2 days ago',
    comment:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qus ipsum speissei ultrices gravida. Risus commodo viverra maeenas accumsan lacus vel facilisis.',
  },
];


const Comments = () => {
  return (
    <div>
      {/* <div className={styles.title}>{`O${comments.length} COMMENTS`}</div> */}
      {comments.map((el, index) => (
        <div key={index} className={styles.comments}>
          <Image
            width={71}
            height={71}
            className={styles.img}
            src={el.user.avatar}
            alt="avatar"
          />
          <div>
            <div className={styles.top}>
              <p className={styles.name}>{el.user.name}</p>
              <p className={styles.data}>{el.data}</p>
            </div>
            <p className={styles.text}>{el.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
