import css from "./LoadMoreBtn.module.css"

export const LoadMoreBtn = ({ images, loading, onClick }) => {
    return (
        <>
            {images.length > 0 && !loading && (<button onClick={onClick} className={css.button}>Load more</button>)}
        </>
    )
}