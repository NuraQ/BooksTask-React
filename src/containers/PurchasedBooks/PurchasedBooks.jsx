import { BookList } from "../../components/BookList/BookList";

const PurchasedBooks = () => {
    let allUsersbooks = JSON.parse(localStorage.getItem("bookList"));
    let user = localStorage.getItem("loggedUser");
    let books = []
    if (allUsersbooks != null) {
      for (let userBooks of allUsersbooks) {
        if (userBooks[0].includes(user)) {
            books = userBooks.slice(1)
            break;
        }
      }
    }
    return (
        <BookList
        Books={books}
      />
    )
}
export default PurchasedBooks;