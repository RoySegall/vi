import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Tiles from "./Tiles";
Enzyme.configure({ adapter: new Adapter() });

describe('Tiles', () => {

  const searchDraggable = ({initialConfiguration, draggable = [], notDraggable = []}) => {
    const component = shallow(<Tiles initialConfiguration={initialConfiguration} />);

    draggable.forEach((item) => {
      expect(component.find(`.tile[draggable=true][data-number=${item}]`)).toBeTruthy();
    });

    notDraggable.forEach((item) => {
      expect(component.find(`.tile[draggable=false][data-number=${item}]`)).toBeTruthy();
    });
  };

  it('Checking the tiles are rendering correctly', () => {
    const component = shallow(<Tiles initialConfiguration={[
      1,  2,  3,  4,
      5,  6,  7,  0,
      8,  9,  10, 11,
      12, 13, 14, 15
    ]} />);

    // Check the amount of tiles.
    expect(component.find('.tile').length).toBe(16);

    // Verify only one disabled tiles.
    expect(component.find('.tile.disabled').length).toBe(1);

    // Verify the length of draggable items.
    expect(component.find('.tile[draggable=true]').length).toBe(3);
  });

  it('Check draggable from initialConfig', () => {

    searchDraggable({
      initialConfiguration: [
        1,  2,  3,  4,
        5,  6,  7,  0,
        8,  9,  10, 11,
        12, 13, 14, 15
      ],
      draggable: [4, 7, 11],
      notDraggable: [15, 1, 2, 3]
    });

    searchDraggable({
      initialConfiguration: [
        1,  2,  3,  4,
        5,  6,  0,  7,
        8,  9,  10, 11,
        12, 13, 14, 15
      ],
      draggable: [3, 6, 7, 10],
      notDraggable: [12, 13, 14, 15, 1]
    });

    searchDraggable({
      initialConfiguration: [
        1,  2,  3,  4,
        0,  5,  6,  7,
        8,  9,  10, 11,
        12, 13, 14, 15
      ],
      draggable: [1, 8, 5],
      notDraggable: [12, 13, 14, 15, 9]
    });
  });
});
