import React from 'react';
import {POST, DELETE, GET, PATCH} from '../server';
import AdminPanelComponent from '../Components/adminPanel_component';
import Header from '../Components/header'
import Footer from '../Components/footer'

function AdminPanel() {
  


  return (
      <div>
            <Header></Header>
            <AdminPanelComponent></AdminPanelComponent>
      </div>

    )
}

export default AdminPanel;
