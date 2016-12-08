import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import firebase from 'firebase';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import HomeScreen from './components/HomeScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="homeScreen">
        <Scene 
          key="home"
          component={HomeScreen}
        />
      </Scene>
      
      <Scene key="auth">
        <Scene 
          key="login"
          component={LoginForm}
          title="Please Log In"
        />
      </Scene>

      <Scene key="main">
        <Scene
          component={EmployeeList}
          key="employeeList"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          leftTitle="Log out"
          onLeft={() => {
            firebase.auth().signOut();
            Actions.homeScreen();
          }}
          title="Employees"
          initial
        />
        <Scene
          component={EmployeeCreate}
          key="employeeCreate"
          title="Create Employee"
        />
        <Scene
          component={EmployeeEdit}
          key="employeeEdit"
          title="Edit Employee"
        />
      </Scene>

      
    </Router>
  );
};

export default RouterComponent;
