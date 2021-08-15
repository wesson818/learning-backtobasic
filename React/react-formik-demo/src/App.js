import './App.css';
// import { YoutubeForm } from './components/YoutubeForm';
// import { FormikContainer } from './components/FormikContainer';
// import { LoginForm } from './components/LoginForm';
// import { RegisterForm } from './components/RegisterForm';
import { CourseEnrolmentForm } from './components/CourseEnrolmentForm';
import { theme, ThemeProvider } from '@chakra-ui/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegisterForm /> */}
        <CourseEnrolmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
