import { BiFileBlank } from 'react-icons/bi';
import { AiOutlineForm } from 'react-icons/ai';
import { BsTable } from 'react-icons/bs';

import Blank from '@minology/pages/blank';
import Form from '@minology/pages/form';
import Table from '@minology/pages/table';

export const routes = [
  {
    label: 'Blank Page',
    icon: BiFileBlank,
    to: '',
    element: Blank,
  },
  {
    label: 'Form Example',
    icon: AiOutlineForm,
    to: '/form',
    element: Form,
  },
  {
    label: 'Table Example',
    icon: BsTable,
    to: '/table',
    element: Table,
  },
];
