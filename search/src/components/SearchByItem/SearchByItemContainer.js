import { Provider } from 'react-redux';
import SearchByItem from './SearchByItem';
import store from '../../store/store';

const SearchByItemContainer = () => {
  return (
    <Provider store={store}>
      <SearchByItem />
    </Provider>
  );
};

export default SearchByItemContainer;
