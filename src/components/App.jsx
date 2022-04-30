// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import colorPickerOptions from './ColorPicker/colorPickerOptions';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};

export default App;
