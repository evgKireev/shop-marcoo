import styles from './CommentForm.module.scss';

type CommentFormType = {
  title: string;
  text: string;
};

const CommentForm: React.FC<CommentFormType> = ({ title, text }) => {
  return (
    <>
      <form action="#">
        <p className={styles.formTitle}>{title}</p>
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
        <button className={styles.btn}>{text}</button>
      </form>
    </>
  );
};

export default CommentForm;
