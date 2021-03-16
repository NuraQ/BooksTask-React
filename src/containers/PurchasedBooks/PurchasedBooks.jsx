import { useLocation } from 'react-router-dom';

const PurchasedBooks = () => {
    const location = useLocation();

    console.log(location.state)

    return (
        <div>blaa</div>
    )
}
export default PurchasedBooks;