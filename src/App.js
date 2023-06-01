import React from 'react';
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import TaskDashboard from './TaskDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/task-dashboard" element={<TaskDashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

