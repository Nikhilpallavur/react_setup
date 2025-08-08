import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomInput, CustomButton, TableComponent, MainHeader } from '../../components';
import { BUTTON_CLASS_NAME, GRADIENT_BG, PADDING } from '../../styles';
import { PAGINATION_INITIAL_DATA, PAGE_HEADER_TEXT, ROUTE_NAME } from '../../constants';
import { TableColumnType } from '../../types';

// Dummy data
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Moderator' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
];

type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const UserListPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [paginationData, setPaginationData] = useState(PAGINATION_INITIAL_DATA);

  const filteredUsers = useMemo(() => {
    return dummyUsers.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText]);

  const columns: TableColumnType<UserType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '40%',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '30%',
    },
  ];

  return (
    <div className={`relative h-full w-full overflow-auto ${PADDING.horizontalPadding}`}>
      <MainHeader className='mb-[2vh] md:h-[8vh]' title={PAGE_HEADER_TEXT.users || 'Users'} />

      {/* Search and Add User */}
      <div className='mb-6 mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex-1'>
          <CustomInput
            onChange={(e) => setSearchText(e.target.value)}
            required
            value={searchText}
            type='text'
            placeholder='Search users...'
          />
        </div>
        <CustomButton
          buttonText='+ Add User'
          onClick={() => navigate(ROUTE_NAME.createUser)}
          className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} w-full text-white sm:w-auto`}
        />
      </div>

      {/* User Table */}
      <div className='overflow-auto'>
        <TableComponent<UserType>
          dataSource={filteredUsers}
          columns={columns}
          paginationData={paginationData}
          setPaginationData={setPaginationData}
        />
      </div>
    </div>
  );
};

export default UserListPage;
