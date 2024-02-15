import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'


import HomePage from './Pages/Home/HomePage'
import LoginPage from './Pages/Login/Login'
import Header from './Components/Header'

import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
        <div className="App">
            <Router>
              <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={
                    <PrivateRoute>
                      <HomePage/>
                    </PrivateRoute>} />
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;