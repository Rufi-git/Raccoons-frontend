import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../redux/store';
import { GrNext, GrPowerReset, GrPrevious } from "react-icons/gr"
import { getContrastingColor } from '../config/helpers';
const RotateButtons = ({ children }) => {
  const snap = useSnapshot(state);
  const dispatch = useDispatch()
  const handleRotateLeft = () => {
    dispatch(increment())
  };

  const handleRotateRight = () => {
    dispatch(decrement())
  };

  const handleReset = () => {
    dispatch(reset())
  };

  return (
    <div className="rotate-buttons gap-4 flex">
      <CustomButton
        title={<GrPrevious className={`text-center w-full text-[30px] text-[white}]`} />}
        handleClick={handleRotateLeft}
        customStyles={"!rounded-full !py-5 tab-btn"}
      />
      {children}
      <CustomButton
        title={<GrNext className={`text-center w-full text-[30px] text-[white}]`} />}
        handleClick={handleRotateRight}
        customStyles={"!rounded-full !py-5 tab-btn"}
      />
      <CustomButton
        title={<GrPowerReset className={`text-center w-full text-[30px] text-[white}]`} />}
        handleClick={handleReset}
        customStyles={"!rounded-full !py-5 tab-btn"}
      />
    </div>
  );
};

export default RotateButtons;
