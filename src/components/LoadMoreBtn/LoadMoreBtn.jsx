import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({onClick, isVisible}) => {
  return (
    <>
      {isVisible && (
        <button onClick={onClick} className={css.button}>
          Load more
        </button>
      )}
    </>
  );
};