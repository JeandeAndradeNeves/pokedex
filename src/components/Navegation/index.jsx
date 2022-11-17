/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as Nav, Route, Switch, Redirect } from 'react-router-dom';
import Favoritos from '../../pages/Favoritos';
import Home from '../../pages/Home';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navigation() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link component={Nav} to="/Home" underline="hover" color="inherit" href="#">
          HOME
        </Link>
        <Link component={Nav} to="/Favoritos" underline="hover" color="inherit" href="Favoritos">
          FAVORITOS
        </Link>
      </Breadcrumbs>
    </div>
  );
}
