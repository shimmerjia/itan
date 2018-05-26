import React from 'react';

export default () => {
  return (
    <div id="not-found">
      <div class="not-found-image">
        <img src="/img/404.svg" alt="" />
      </div>
      <div class="not-found-title">
        <h1>Sorry, that page doesn't exist</h1>
        <a href="/" class="gotohomepage">Go to home</a>
      </div>
    </div>
  )
}
