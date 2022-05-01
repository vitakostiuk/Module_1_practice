import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import ColorPicker from './ColorPicker';
import colorPickerOptions from './ColorPicker/colorPickerOptions';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Dropdown />
      {/* <ColorPicker options={colorPickerOptions} /> */}
    </div>
  );
};

export default App;
