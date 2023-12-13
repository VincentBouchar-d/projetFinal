import React from 'react';
import {POST, DELETE, GET, PATCH} from '../server';
import AdminPanelComponent from '../Components/adminPanel_component';
import Header from '../Components/header'
import Footer from '../Components/footer'
import { Outlet } from 'react-router-dom';

function AdminPanel() {
  


  return (
      <div>
            
            <AdminPanelComponent></AdminPanelComponent>
      </div>

    )
}

export default AdminPanel;
