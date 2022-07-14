import PropTypes from 'prop-types';
import { Label } from 'components/ui/Label/Label';
import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
