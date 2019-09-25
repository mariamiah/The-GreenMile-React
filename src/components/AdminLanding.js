/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import parseDate from '../utils/helpers';

const AdminLanding = props => (
  <div className="col-lg-4 card">
    <div className="card-deck">
      <div className="card border-success mb-3" style={{ maxWidth: '40rem' }}>
        <div className="card-header bg-transparent border-success"><h4 className="text-success mt-3">{props.item.package_name}</h4></div>
        <div className="card-body text-dark" id="pdtbody">
          <ul className="list-unstyled">
            <li>
Delivery:&nbsp;
              {props.item.delivery_description}
            </li>
            <li>
Date:
              {parseDate(props.item.date_registered)}
            </li>
            <li>
Price:
              {props.item.hub_address}
            </li>
            <li>
Code:
              {props.item.loading_type_name}
            </li>
            <li>
Quantity:
              {props.item.invoice_number}
            </li>
          </ul>
        </div>
        <div className="card-footer bg-transparent border-success">
          <button className="btn btn-success" type="submit">Modify</button>
          <button className="btn btn-secondary" id="btndelete" type="submit">Delete</button>
        </div>
      </div>
    </div>
  </div>
);
export default AdminLanding;
