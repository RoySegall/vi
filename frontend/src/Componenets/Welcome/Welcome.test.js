import Welcome from "./Welcoms";
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Welcome', () => {

  let setNameMock = jest.fn();
  let startHandlerMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mountComponent = ({setNameMock, nameRequired, startHandler}) => shallow(
    <Welcome
      setName={setNameMock}
      nameRequired={nameRequired}
      startHandler={startHandler} />
    );

  it('Verify the start button', () => {
    expect(startHandlerMock).not.toBeCalled();
    const component = mountComponent({
      setName: setNameMock,
      nameRequired: false,
      startHandler: startHandlerMock,
    });
    component.find('button').simulate('click');
    expect(startHandlerMock).toBeCalled();
  });

  it('Testing the name required error', () => {
    const componentWithoutError = mountComponent({
      setName: setNameMock,
      nameRequired: false,
      startHandler: startHandlerMock
    });
    expect(componentWithoutError.find('input.error').length).toBe(0);

    const componentWithError = mountComponent({
      setName: setNameMock,
      nameRequired: true,
      startHandler: startHandlerMock
    });
    expect(componentWithError.find('input.error').length).toBe(1);
  });

  it('Testing set name handler', () => {
    let called = false;
    const component = mountComponent({
      setNameMock: () => {
        called = true;
      },
      nameRequired: false,
      startHandler: startHandlerMock
    });

    expect(called).toBeFalsy();
    component.find('input').simulate('change', { target: { value: 'test@example.com'} });
    expect(called).toBeTruthy();
  });
});
