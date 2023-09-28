import Card from './Card';
import { connect } from 'react-redux';

const Favorites = ({ myFavorites }) => {
    return (
        <>
            {
                myFavorites?.map((fav, index) => {
                    return (
                        <Card
                            key={index}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            status={fav.status}
                            origin={fav.origin.name}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);