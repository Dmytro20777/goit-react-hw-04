import css from "./ErrorMessage.module.css";

export const ErrorMessage = ({ error, loading }) => {
    return (
        <div className={css.errorContainer}>
            {error && <p className={css.errorText}>Error! {loading ? 'Reloading page...' : 'Error loading images'}</p>}
        </div>
    );
};
