import { useLocation } from 'react-router-dom';
import BookDetailsData from '../../components/BookDetailsComponents/BookDetails'

const BookDetails = () => {
    const location = useLocation();
    console.log(location.state,"state")
    return (
        <div>
            <BookDetailsData Book={location.state}/>
        </div>
    )
}

export default BookDetails;