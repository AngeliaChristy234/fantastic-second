import React from 'react';

const Filters = () => (
  <div>
    <div class="filter__kondisi">
      <h4 class="text--small">Kondisi</h4>
      <button class="button__filter">90%</button>
      <button class="button__filter">70%</button>
      <button class="button__filter">50%</button>
      <button class="button__filter">20%</button>
    </div>
    <div class="filter__harga">
      <h4 class="text--small">Harga</h4>
      <button class="button__filter">12jt</button>
      <button class="button__filter">10jt</button>
      <button class="button__filter">8jt</button>
      <button class="button__filter">4jt</button>
    </div>
  </div>
)

export default Filters;