import styles from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <>
      <form action="#">
        <p className={styles.formTitle}>LEAVE A REPLY</p>
        <div className={styles.boxInput}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Your name"
          />
          <input
            className={styles.textInput}
            type="text"
            placeholder="E-mail address"
          />
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Your text here"
        ></textarea>
        <button className={styles.btn}>POST COMMENT</button>
      </form>
    </>
  );
};

export default CommentForm;
