import React from 'react'
import Spinner from './Spinner'

const ScreenSpinner = () => {
  return (
		<div className='flex items-center justify-center h-screen'>
			<Spinner size='large'/>
		</div>
  );
}

export default ScreenSpinner