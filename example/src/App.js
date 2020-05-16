import React from 'react'

import ClickOutside from '@leafyjava/react-click-away'

const App = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClickOutside = () => {
    setClicked(clicked => !clicked);
  }

  return (
    <div>
      <ClickOutside onClickOutside={handleClickOutside}>
        <h1>Click Outside of this Box to Toggle</h1>
      </ClickOutside>
      {clicked && <h1>Clicked Outside Toggled</h1>}
    </div>

  )
}

export default App
