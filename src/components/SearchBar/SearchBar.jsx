import toast from 'react-hot-toast';
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.elements.search.value.trim() === "") {
            toast.error("Current string")
            return;
        }

        onSubmit(event.target.elements.search.value);
        event.target.reset();
    }

    return (
        <header>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.field}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="search"
                />
                <button className={css.btn} type="search">Search</button>
            </form>
        </header>
    )
}