import React, { useState, useEffect } from 'react';
import {
  Overlay,
  PopUpContainer,
  CloseButton,
  Title,
  Input,
  Textarea,
  Label,
  LabelColors,
  ColorButton,
  AddButton,
  PlusIcon,
  CustomDatePickerInput,
} from './AddCard.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <CustomDatePickerInput onClick={onClick} ref={ref}>
    {value}{' '}
    <span>
      <b>⌵</b>
    </span>
  </CustomDatePickerInput>
));

CustomInput.displayName = 'CustomInput';

const AddCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labelColor, setLabelColor] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [isOnMobile, setIsOnMobile] = useState(false);

  const checkIsOnMobile = () => {
    setIsOnMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsOnMobile();
    window.addEventListener('resize', checkIsOnMobile);
    return () => {
      window.removeEventListener('resize', checkIsOnMobile);
    };
  }, []);

  return (
    <Overlay>
      <PopUpContainer>
        <CloseButton>&times;</CloseButton>
        <Title>Add card</Title>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Label>Label color</Label>
        <LabelColors>
          <ColorButton
            color="#8DBFFF"
            selected={labelColor === '#8DBFFF'}
            onClick={() => setLabelColor('#8DBFFF')}
          />
          <ColorButton
            color="#FFC0CB"
            selected={labelColor === '#FFC0CB'}
            onClick={() => setLabelColor('#FFC0CB')}
          />
          <ColorButton
            color="#90EE90"
            selected={labelColor === '#90EE90'}
            onClick={() => setLabelColor('#90EE90')}
          />
          <ColorButton
            color="#D3D3D3"
            selected={labelColor === '#D3D3D3'}
            onClick={() => setLabelColor('#D3D3D3')}
          />
        </LabelColors>
        <Label>Deadline</Label>
        <CustomDatePickerInput>
          <DatePicker
            selected={deadline}
            onChange={date => setDeadline(date)}
            dateFormat="MMMM d, yyyy"
            customInput={
              <CustomInput value={format(deadline, 'MMMM d, yyyy')} />
            }
            withPortal={isOnMobile ? true : false}
            toggleCalendarOnIconClick
          />
        </CustomDatePickerInput>

        <AddButton
          onClick={() => {
            /* Add card functionality here */
          }}
        >
          <PlusIcon>+</PlusIcon>Add
        </AddButton>
      </PopUpContainer>
    </Overlay>
  );
};

export default AddCard;
