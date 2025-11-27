import { Button } from '@primer/react';
import AppLogo from './logo';

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-slate-200 '>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>
          <div className='flex items-center'>
            <div className='shrink-0 flex items-center'>
              <AppLogo className='h-7' />
            </div>

            <div className='hidden sm:ml-6 sm:flex sm:space-x-6 text-sm'>
              <a
                href='#'
                className='text-slate-700 hover:text-slate-900 px-3 py-2 font-medium'
              >
                Item 1
              </a>
              <a
                href='#'
                className='text-slate-700 hover:text-slate-900 px-3 py-2 font-medium'
              >
                Attractions
              </a>
              <a
                href='#'
                className='text-slate-700 hover:text-slate-900 px-3 py-2 font-medium'
              >
                Support
              </a>
              <a
                href='#'
                className='text-slate-700 hover:text-slate-900 px-3 py-2 font-medium'
              >
                Resources
                <svg
                  className='ml-1 -mr-0.5 h-4 w-4 inline-block'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className='hidden sm:ml-6 sm:flex sm:items-center space-x-3'>
            <Button>Register</Button>
            <Button variant='primary'>Launch FambaHub</Button>
          </div>

          <div className='flex items-center sm:hidden'>
            <span className='text-slate-700'>Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
