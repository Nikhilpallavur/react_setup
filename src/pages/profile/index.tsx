// import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components';
import { BUTTON_CLASS_NAME, FONT } from '../../styles';
import { logOut } from '../../utils';
import { fetchUserDataFromLocalStore } from '../../utils/localStorage/dataFetching';
// import { ROUTE_NAME } from '../../constants';

const ProfilePage = () => {
  // const navigate = useNavigate();
  const userData = fetchUserDataFromLocalStore();
  return (
    <div className='profile-page relative h-full w-full'>
      <div className='relative block h-[200px] sm:h-[300px]'>
        <div
          className='absolute top-0 h-full w-full bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span id='blackOverlay' className='absolute h-full w-full bg-black opacity-50'></span>
        </div>
      </div>
      <section className='bg-blueGray-200 relative py-16'>
        <div className='container mx-auto px-4'>
          <div className='relative -mt-40 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl'>
            <div className='px-6'>
              <div className='relative mb-16 flex justify-center sm:mb-32'>
                <img
                  alt='...'
                  src='https://images.pexels.com/photos/11418767/pexels-photo-11418767.jpeg'
                  className='absolute -mt-16 h-auto max-w-[100px] rounded-full border-none shadow-xl sm:max-w-[150px]'
                />
              </div>
              <div className='absolute right-4 top-2 sm:right-16 sm:top-6'>
                {/* <CustomButton
                  buttonText="Language"
                  className={`${BUTTON_CLASS_NAME.commonButton} text-blue-600`}
                  onClick={() => {
                    navigate(ROUTE_NAME.language);
                  }}
                /> */}
                <CustomButton
                  buttonText='Log out'
                  className={`${BUTTON_CLASS_NAME.commonButton} text-red-500`}
                  onClick={() => {
                    logOut();
                  }}
                />
              </div>
              <div className='mt-12 text-center'>
                <span
                  className={`text-blueGray-700 mb-2 ${FONT.headerTextNormal} font-semibold leading-normal`}
                >
                  {userData?.userName ?? ''}
                </span>
                <div
                  className={`text-blueGray-400 mb-2 mt-0 ${FONT.contentText} !font-bold uppercase leading-normal`}
                >
                  {userData?.roleId?.role ?? ''}
                </div>
                <div className={`text-blueGray-600 mb-2 mt-10 ${FONT.contentText}`}>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className={`text-blueGray-600 mb-2 ${FONT.contentText}`}>
                  University of Computer Science
                </div>
              </div>
              <div className='border-blueGray-200 border-t py-10 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full px-4 lg:w-9/12'>
                    <p className={`text-blueGray-700 mb-4 ${FONT.contentText} leading-relaxed`}>
                      An artist of considerable range, Jenna the name taken by Melbourne-raised,
                      Brooklyn-based Nick Murphy writes, performs and records all of his own music,
                      giving it a warm, intimate feel with a solid groove structure. An artist of
                      considerable range.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
