import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonDropdown, CustomButton, CustomInput, MainHeader } from '../../../components';
import { BUTTON_CLASS_NAME, GRADIENT_BG, PADDING } from '../../../styles';
import { PAGE_HEADER_TEXT } from '../../../constants';

const CreateUserPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [error, setError] = useState('');

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setError('');
  };

  const handleSubmit = () => {
    const { name, email, password, confirmPassword, role } = form;

    if (!name || !email || !password || !confirmPassword || !role) {
      setError('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // TODO: Submit form data to server here
    console.log('User created:', form);
    navigate('/users');
  };

  return (
    <div className={`h-full w-full ${PADDING.horizontalPadding}`}>
      <MainHeader className="mb-[2vh] md:h-[8vh]" title={PAGE_HEADER_TEXT.createUser} />

      {/* Full Name & Email */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <CustomInput
          label="Full Name"
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          placeholder="Enter full name"
          required
        />
        <CustomInput
          label="Email"
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          type="email"
          placeholder="Enter email address"
          required
        />
      </div>

      {/* Role Dropdown */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <CommonDropdown
          label="User Role"
          value={form.role}
          onChange={val => handleChange('role', val)}
          options={['Admin', 'Manager', 'Viewer']}
          placeholder="Select a role"
          required
        />
        <div />
      </div>

      {/* Password & Confirm Password */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <CustomInput
          label="Password"
          value={form.password}
          onChange={e => handleChange('password', e.target.value)}
          type="password"
          placeholder="Enter password"
          required
        />
        <CustomInput
          label="Confirm Password"
          value={form.confirmPassword}
          onChange={e => handleChange('confirmPassword', e.target.value)}
          type="password"
          placeholder="Re-enter password"
          required
        />
      </div>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {/* Action Buttons */}
      <div className="mt-6 flex items-end justify-end">
        <div className="flex w-full gap-4 md:w-96">
          <CustomButton
            buttonText="Cancel"
            onClick={() => navigate('/users')}
            className={`${BUTTON_CLASS_NAME.commonButton} border border-gray-400 text-gray-700`}
          />
          <CustomButton
            buttonText="Create User"
            onClick={handleSubmit}
            className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
