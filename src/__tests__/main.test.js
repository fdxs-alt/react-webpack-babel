import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

it('should not render properly', async () => {
  const { queryByText } = render(<App />)
  expect(queryByText('APP')).not.toBeInTheDocument()
})
