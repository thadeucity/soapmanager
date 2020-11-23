import React, { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import {
  FiClipboard,
  FiList,
  FiPlusSquare,
  FiFileText,
  FiEdit,
} from 'react-icons/fi';

import MainContainer from '../components/MainContainer';
import ContentCard from '../components/ContentCard';
import Input from '../components/Input';
import Select from '../components/Select';

import { SideMenu, SectionButton, ContentBox } from '../styles/pages/Home';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <MainContainer>
      <ContentCard>
        <SideMenu>
          <SectionButton>
            <FiClipboard size={24} />
            <span>Basic Info</span>
          </SectionButton>

          <SectionButton active>
            <FiList size={24} />
            <span>Oils Selection</span>
          </SectionButton>

          <SectionButton>
            <FiPlusSquare size={24} />
            <span>Aditives</span>
          </SectionButton>

          <SectionButton>
            <FiEdit size={24} />
            <span>Notes</span>
          </SectionButton>

          <SectionButton>
            <FiFileText size={24} />
            <span>Results</span>
          </SectionButton>
        </SideMenu>

        <ContentBox>
          <Form ref={formRef} onSubmit={() => console.log('hey')}>
            <Input type="text" title="Recipt name" name="name" />

            <Select
              title="Soap Type"
              columns={7}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              name="type"
            />

            <Select
              title="Units"
              columns={7}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              name="units"
            />

            <Input
              columns={7}
              type="text"
              title="Weight of Oils"
              name="total-weigth"
            />
            <Input columns={7} type="text" title="Superfat" name="super-fat" />

            <Select
              title="Water"
              columns={7}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              name="water"
            />

            <Input
              columns={7}
              type="text"
              title="Water Amount"
              name="water-amout"
            />
          </Form>
        </ContentBox>
      </ContentCard>
    </MainContainer>
  );
};

export default Home;
